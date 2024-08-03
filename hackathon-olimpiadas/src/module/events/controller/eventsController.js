import { computed, onMounted, ref } from "vue";
import { columns } from "../const/columns";
import { useDisplay } from "vuetify/lib/framework.mjs";
import { filter } from "../const/filter";
import { competitors } from "../const/competitors";
import Events from "../domain/model/events";
import Toastify from "toastify-js";

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
    const totalItens = ref(0);
    const totalItensCountry = ref(0);
    const headers = ref(columns);
    const tableFilter = ref(structuredClone(filter));
    const participant = ref(competitors);
    const modelEvents = ref(new Events({}));
    const tableItems = ref([]);
    const countries = ref([]);
    const disciplines = ref([]);
    const venues = ref([]);
    const formFilter = ref(null);
    const loading = ref(false);
    const loadingCountries = ref(false);
    const dialogForm = ref(false);
    const dialogFilter = ref(false);
    const isMobile = computed(() => {
      return display.smAndDown.value;
    });

    onMounted(async () => {
      const [itemsDiscipline, itemsVenue] = await Promise.all([
        getDisciplinesUseCase(),
        getVenuesUseCase(),
      ]);

      disciplines.value = itemsDiscipline;
      venues.value = itemsVenue;
      await getCountry();
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
        Toastify({
          text: error,
          duration: 2000,
          gravity: "top",
          position: "right",
          style: {
            background: "red",
            borderRadius: "50px",
          },
        }).showToast();
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
        Toastify({
          text: error,
          duration: 2000,
          gravity: "top",
          position: "right",
          style: {
            background: "red",
            borderRadius: "50px",
          },
        }).showToast();
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
        Toastify({
          text: error,
          duration: 2000,
          gravity: "top",
          position: "right",
          style: {
            background: "red",
            borderRadius: "50px",
          },
        }).showToast();
      } finally {
        loading.value = false;
      }
    };

    const getCountry = async () => {
      try {
        loadingCountries.value = true;

        const { items, count } = await getCountriesUseCase();
        countries.value = items;
        totalItensCountry.value = count;
      } catch (error) {
        Toastify({
          text: error,
          duration: 2000,
          gravity: "top",
          position: "right",
          style: {
            background: "red",
            borderRadius: "50px",
          },
        }).showToast();
      } finally {
        loadingCountries.value = false;
      }
    };

    const getCompetitorColor = (position) => {
      const competitor = participant.value.find((c) => c.id === position);
      return competitor ? competitor.color : "primary";
    };

    const getCompetitorIcon = (position) => {
      const competitor = participant.value.find((c) => c.id === position);
      return competitor ? competitor.icon : "";
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
      totalItens,
      totalItensCountry,
      headers,
      tableFilter,
      participant,
      modelEvents,
      tableItems,
      countries,
      disciplines,
      venues,
      formFilter,
      loading,
      loadingCountries,
      dialogForm,
      dialogFilter,
      isMobile,
      getEvents,
      cleanFilters,
      details,
      filterRecords,
      getCompetitorColor,
      getCompetitorIcon,
      closeDialogForm,
      close,
      clear,
    };
  };

export { eventsController };
