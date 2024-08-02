import { computed, onMounted, ref } from "vue";
import { columns } from "../const/columns";
import { useDisplay } from "vuetify/lib/framework.mjs";
import { filter } from "../const/filter";
import Events from "../domain/model/events";

const eventsController =
  (
    getEventsUseCase,
    getCountriesUseCase,
    getDisciplinesUseCase,
    getVenuesUseCase
  ) =>
  () => {
    const display = useDisplay();
    const itemsPerPage = ref(10);
    const headers = ref(columns);
    const tableFilter = ref(structuredClone(filter));
    const modelEvents = ref(new Events({}));
    const tableItems = ref([]);
    const countries = ref([]);
    const disciplines = ref([]);
    const venues = ref([]);
    const totalItens = ref(0);
    const formFilter = ref(null);
    const loading = ref(false);
    const dialogForm = ref(false);
    const dialogFilter = ref(false);
    const isMobile = computed(() => {
      return display.smAndDown.value;
    });

    onMounted(async () => {
      const [itemsCountry, itemsDiscipline, itemsVenue] = await Promise.all([
        getCountriesUseCase(),
        getDisciplinesUseCase(),
        getVenuesUseCase(),
      ]);

      countries.value = itemsCountry;
      disciplines.value = itemsDiscipline;
      venues.value = itemsVenue;
    });

    const getEvents = async (options) => {
      try {
        loading.value = true;

        const cleanedFilters = cleanFilters(tableFilter.value);
        const { items, count } = await getEventsUseCase(
          cleanedFilters,
          options.page
        );

        tableItems.value = items;
        totalItens.value = count;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    };

    const cleanFilters = (filters) => {
      const cleaned = {};
      for (const key in filters) {
        if (filters[key] && filters[key] !== "Nenhuma") {
          cleaned[key] = filters[key];
        }
      }
      return cleaned;
    };

    const details = async (item) => {
      try {
        loading.value = true;
        modelEvents.value = { ...item };
        dialogForm.value = true;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    };

    const filterRecords = async (filters) => {
      try {
        const validate = await formFilter.value.validate();
        if (!validate.valid) {
          return;
        }

        loading.value = true;
        await getEvents(filters);

        close();
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    };

    const closeDialogForm = () => {
      dialogForm.value = false;
      modelEvents.value = new Events({});
    };

    const close = () => {
      formFilter.value.resetValidation();
      dialogFilter.value = false;
    };

    const clear = () => {
      tableFilter.value.country = "Nenhuma";
      tableFilter.value.discipline = "Nenhuma";
      tableFilter.value.venue = "Nenhuma";
      tableFilter.value.date = "";
      formFilter.value.resetValidation();
      getEvents({});
      close();
    };

    return {
      itemsPerPage,
      headers,
      tableFilter,
      modelEvents,
      tableItems,
      countries,
      disciplines,
      venues,
      totalItens,
      formFilter,
      loading,
      dialogForm,
      dialogFilter,
      isMobile,
      getEvents,
      cleanFilters,
      details,
      filterRecords,
      closeDialogForm,
      close,
      clear,
    };
  };

export { eventsController };
