<template>
  <v-card class="ma-2">
    <v-data-table
      height="calc(100vh - 300px)"
      fixed-header
      :headers="controller.headers.value"
      :items="controller.tableItems.value"
      :items-length="controller.totalItens.value"
      :loading="controller.loading.value"
      :mobile="controller.isMobile.value"
    >
      <template v-slot:[`item.url`]="{ item }">
        <v-chip
          prepend-icon="mdi-link"
          size="small"
          color="primary"
          variant="outlined"
          class="ma-2"
        >
          <a :href="item.url" target="_blank" rel="noopener noreferrer"
            >Acessar local do evento</a
          >
        </v-chip>
      </template>
    </v-data-table>
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

<style scoped>
a {
  text-decoration: none;
}
:deep(.v-data-table-footer__items-per-page) {
  display: none;
}
:deep(.v-data-table-headers--mobile) {
    display: none;
}
</style>
