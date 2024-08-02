import { createRouter, createWebHistory } from "vue-router";
import Medals from "../module/medals/view/medals.vue";
import Venues from "../module/venues/view/venues.vue";
import Disciplines from "../module/disciplines/view/disciplines.vue";
import Events from "../module/events/view/events.vue";

const routes = [
  {
    path: "/",
    name: "Quadro de Medalhas",
    component: Medals,
  },
  {
    path: "/venues",
    name: "Locais dos Eventos",
    component: Venues,
  },
  {
    path: "/disciplines",
    name: "Esportes",
    component: Disciplines,
  },
  {
    path: "/events",
    name: "Jogos/Eventos",
    component: Events,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
