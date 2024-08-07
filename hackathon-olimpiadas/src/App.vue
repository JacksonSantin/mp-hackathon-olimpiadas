<template>
  <v-app>
    <v-card flat>
      <v-toolbar color="primary" dark extended prominent flat>
        <v-app-bar color="transparent" density="compact" flat>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

          <v-spacer></v-spacer>

          <v-btn
            v-if="isDark"
            icon="mdi-weather-sunny"
            variant="text"
            @click="toggleDark()"
          ></v-btn>
          <v-btn
            v-else
            icon="mdi-weather-night"
            variant="text"
            @click="toggleDark()"
          ></v-btn>
        </v-app-bar>

        <template v-slot:image>
          <v-img
            gradient="to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.4)"
            cover
            :src="OlimpiadasImg"
          ></v-img>
        </template>
      </v-toolbar>

      <v-navigation-drawer v-model="drawer" temporary mobile>
        <v-list density="compact" nav>
          <router-link
            v-for="item in menu"
            :key="item.nome"
            :to="item.path"
            :class="['router-link', { active: isActiveRoute(item.path) }]"
          >
            <v-list-item-title class="px-5 my-2">
              <v-icon left class="pr-10" size="small">{{ item.icone }}</v-icon
              >{{ item.nome }}
            </v-list-item-title>
            <v-divider></v-divider>
          </router-link>
        </v-list>
      </v-navigation-drawer>

      <v-card class="mx-auto" max-width="1500" style="margin-top: -64px">
        <v-toolbar color="black" flat>
          <v-toolbar-title class="text-white text-center">
            {{nomeTela}}
          </v-toolbar-title>
        </v-toolbar>

        <v-divider></v-divider>

        <v-card-text>
          <v-main class="pt-0">
            <router-view />
          </v-main>
        </v-card-text>
      </v-card>
    </v-card>
    <v-footer
      class="bg-black pa-4 d-flex flex-column flex-md-row justify-between align-center"
    >
      <div class="d-flex w-100 align-center">
        <p class="text-center">
          {{ new Date().getFullYear() }} — Feito com
          <v-icon color="red" size="small" class="icon-heart">mdi-heart</v-icon>
          por Jackson Dhanyel Santin
        </p>
      </div>
      <div class="d-flex justify-center">
        <v-btn
          v-for="(item, index) in icons"
          :key="index"
          class="mx-2"
          size="small"
          variant="plain"
          target="_blank"
          :icon="item.icon"
          :href="item.link"
        ></v-btn>
      </div>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref, watch } from "vue";
import { useTheme } from "vuetify";
import { icons } from "./const/icons";
import { navigation } from "./const/navigation";
import { useRoute } from "vue-router";
import OlimpiadasImg from "@/assets/olimpiadas_bg.jpg";

const route = useRoute();
const drawer = ref(null);
const nomeTela = ref("");
const menu = ref(navigation);
const theme = useTheme();
const isDark = ref(theme.global.current.value.dark);

const toggleDark = () => {
  const newTheme = theme.global.current.value.dark ? "light" : "dark";
  theme.global.name.value = newTheme;
  isDark.value = !isDark.value;
};

const isActiveRoute = (path) => {
  changeScreenName(path);
  return route.path === path;
};
const changeScreenName = () => {
  for (let i = 0; i < menu.value.length; i++) {
    return (nomeTela.value = route.name);
  }
};

watch(
  () => theme.global.current.value.dark,
  (newVal) => {
    isDark.value = newVal;
  }
);
</script>

<style>
:deep(.v-data-table-headers--mobile) {
    display: none;
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.router-link {
  text-decoration: none;
  color: inherit;
}
.icon-heart {
  animation: pulse 1s infinite;
}
::-webkit-scrollbar-track:horizontal {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
  border-radius: 10px;
}
::-webkit-scrollbar:horizontal {
  width: 4px;
  height: 4px;
  margin-right: -10px;
  background-color: #f5f5f5;
}
::-webkit-scrollbar-thumb:horizontal {
  border-radius: 10px;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0.44, rgb(38, 50, 80, 1)),
    color-stop(0.72, rgb(69, 96, 158, 1))
  );
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: white;
  border-radius: 0px;
}
</style>
