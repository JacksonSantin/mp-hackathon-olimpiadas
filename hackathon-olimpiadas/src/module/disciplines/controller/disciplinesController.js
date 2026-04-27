import { computed, onMounted, ref } from "vue";
import { columns } from "../const/columns";
import { useDisplay } from "vuetify/lib/framework.mjs";
import { useTheme } from "vuetify";
import Toastify from "toastify-js";

const disciplinesController = (getDisciplinesUseCase) => () => {
  const display = useDisplay();
  const theme = useTheme();
  const headers = ref(columns);
  const tableItems = ref([]);
  const totalItens = ref(0);
  const loading = ref(false);
  const isDark = computed(() => theme.global.current.value.dark);
  const isMobile = computed(() => {
    return display.smAndDown.value;
  });

  onMounted(async () => {
    await getDisciplines();
  });

  const getDisciplines = async () => {
    try {
      loading.value = true;

      const { items, count } = await getDisciplinesUseCase();

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
    isDark,
    isMobile,
    getDisciplines,
  };
};

export { disciplinesController };
