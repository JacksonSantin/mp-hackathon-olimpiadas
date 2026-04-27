// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { pt } from "vuetify/locale";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  locale: {
    locale: "pt",
    fallback: "pt",
    messages: { pt },
  },
});
