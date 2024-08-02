import { computed, onMounted, ref } from "vue";
import { columns } from "../const/columns";
import { useDisplay } from "vuetify/lib/framework.mjs";

const venuesController = (getVenuesUseCase) => () => {
  const display = useDisplay();
  const headers = ref(columns);
  const tableItems = ref([]);
  const totalItens = ref(0);
  const loading = ref(false);
  const isMobile = computed(() => {
    return display.smAndDown.value;
  });

  onMounted(async () => {
    await getVenues()
  })

  const getVenues = async () => {
    try {
      loading.value = true;

      const { items, count } = await getVenuesUseCase();

      tableItems.value = items;
      totalItens.value = count;
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  return {
    headers,
    tableItems,
    totalItens,
    loading,
    isMobile,
    getVenues
  };
};

export { venuesController };
