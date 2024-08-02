import { computed, ref } from "vue";
import { columns } from "../const/columns";
import { useDisplay } from "vuetify/lib/framework.mjs";

const olympicsController = (getCountriesUseCase) => () => {
  const display = useDisplay();
  const itemsPerPage = ref(50);
  const headers = ref(columns);
  const tableItems = ref([]);
  const totalItens = ref(0);
  const loading = ref(false);
  const isMobile = computed(() => {
    return display.smAndDown.value;
  });

  const getMedals = async (options) => {
    try {
      loading.value = true;

      const { items, count } = await getCountriesUseCase(options.page);

      tableItems.value = items;
      totalItens.value = count;
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  return {
    itemsPerPage,
    headers,
    tableItems,
    totalItens,
    loading,
    isMobile,
    getMedals
  };
};

export { olympicsController };
