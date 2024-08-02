<template>
  <v-card class="ma-2">
    <v-data-table-server
      height="calc(100vh - 300px)"
      fixed-header
      v-model:items-per-page="controller.itemsPerPage.value"
      :headers="controller.headers.value"
      :items="controller.tableItems.value"
      :items-length="controller.totalItens.value"
      :loading="controller.loading.value"
      :mobile="controller.isMobile.value"
      @update:options="controller.getEvents"
    >
      <template v-slot:top>
        <v-toolbar density="compact" color="transparent" flat>
          <v-toolbar-title>
            <div class="d-flex flex-column">
              <div>Filtro</div>
            </div>
          </v-toolbar-title>

          <div class="ml-3 mr-3">
            <v-menu
              v-model="controller.dialogFilter.value"
              :close-on-content-click="false"
              :close-on-click="false"
              :nudge-width="200"
              offset-x
              offset-y
            >
              <template v-slot:activator="{ props: menu }">
                <v-tooltip location="bottom" text="Filtrar registro">
                  <template v-slot:activator="{ props: tooltip }">
                    <v-btn
                      size="small"
                      variant="text"
                      v-bind="mergeProps(menu, tooltip)"
                      :disabled="controller.loading.value"
                      :loading="controller.loading.value"
                    >
                      <v-icon start color="primary">mdi-filter</v-icon> filtro
                    </v-btn>
                  </template>
                </v-tooltip>
              </template>

              <table-filter :controller="controller" />
            </v-menu>
          </div>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-tooltip location="bottom" text="Visualizar registro">
          <template v-slot:activator="{ props }">
            <v-btn
              size="x-small"
              variant="text"
              color="green"
              icon="mdi-eye"
              v-bind="props"
              @click="controller.details(item)"
            ></v-btn>
          </template>
        </v-tooltip>
      </template>

      <template v-slot:[`item.day`]="{ item }">
        {{ dayjs(item.day).format("DD/MM/YYYY") }}
      </template>
      <template v-slot:[`item.discipline_name`]="{ item }">
        <div class="d-inline-flex">
          <v-img
            class="mr-3"
            width="30"
            aspect-ratio="16/9"
            style="background-color: white;"
            cover
            :src="item.discipline_pictogram"
          ></v-img>
          {{ item.discipline_name }}
        </div>
      </template>
    </v-data-table-server>
  </v-card>
</template>

<script setup>
import { mergeProps } from "vue";
import dayjs from "dayjs";
import TableFilter from "./filter.vue";

const { controller } = defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
:deep(.v-data-table-footer__items-per-page) {
  display: none;
}
</style>
