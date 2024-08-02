<template>
  <v-card class="ma-2">
    <v-data-table-server
      height="calc(100vh - 235px)"
      fixed-header
      hide-default-footer
      :headers="controller.headers.value"
      :items="controller.tableItems.value"
      :items-length="controller.totalItens.value"
      :loading="controller.loading.value"
      :mobile="controller.isMobile.value"
    >
      <template v-slot:[`item.name`]="{ item }">
        <div class="d-inline-flex">
          <v-img
            class="mr-3"
            cover
            width="30"
            aspect-ratio="16/9"
            :src="controller.isDark.value ? item.pictogram_url_dark : item.pictogram_url"
          ></v-img>
          {{ item.name }}
        </div>
      </template>
    </v-data-table-server>
  </v-card>
</template>

<script setup>
const { controller } = defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>
