import { computed, onMounted, ref } from "vue";
import { columns } from "../const/columns";
import { useDisplay } from "vuetify/lib/framework.mjs";
import Toastify from "toastify-js";

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
