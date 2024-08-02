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
      @update:options="controller.getMedals"
    >
      <template v-slot:[`item.rank`]="{ item }">
        <span class="text-green font-weight-bold">{{ item.rank }}</span>
      </template>

      <template v-slot:[`item.name`]="{ item }">
        <div class="d-inline-flex">
          <v-img
            class="mr-3"
            style="border: 1px solid #e2e2e2"
            width="30"
            aspect-ratio="16/9"
            cover
            :src="item.flag_url"
          ></v-img>
          {{ item.name }}
        </div>
      </template>

      <template v-slot:[`item.gold_medals`]="{ item }">
        <div class="d-inline-flex">
          <v-img
            class="mr-3"
            width="20"
            aspect-ratio="16/9"
            :src="MedalGold"
          ></v-img>
          <strong>{{ item.gold_medals }}</strong>
        </div>
      </template>

      <template v-slot:[`item.silver_medals`]="{ item }">
        <div class="d-inline-flex">
          <v-img
            class="mr-3"
            width="20"
            aspect-ratio="16/9"
            :src="SilverGold"
          ></v-img>
          <strong>{{ item.silver_medals }}</strong>
        </div>
      </template>

      <template v-slot:[`item.bronze_medals`]="{ item }">
        <div class="d-inline-flex">
          <v-img
            class="mr-3"
            width="20"
            aspect-ratio="16/9"
            :src="BronzeGold"
          ></v-img>
          <strong>{{ item.bronze_medals }}</strong>
        </div>
      </template>

      <template v-slot:[`item.total_medals`]="{ item }">
        <div class="d-inline-flex">
          <v-img
            class="mr-3"
            width="20"
            aspect-ratio="16/9"
            :src="MedalAll"
          ></v-img>
          <strong>{{ item.total_medals }}</strong>
        </div>
      </template>
    </v-data-table-server>
  </v-card>
</template>

<script setup>
import MedalGold from "@/assets/medalGold.svg"
import SilverGold from "@/assets/medalSilver.svg"
import BronzeGold from "@/assets/medalBronze.svg"
import MedalAll from "@/assets/medalAll.svg"

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
