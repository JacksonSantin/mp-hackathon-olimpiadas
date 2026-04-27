<template>
  <v-form :ref="controller.formFilter" :disabled="controller.loading.value">
    <v-card class="mx-auto" max-width="600" min-width="600" title="Filtro">
      <v-card-text>
        <v-container fluid class="pa-0">
          <v-row>
            <v-col cols="12" md="6">
              <v-autocomplete
                label="País"
                variant="underlined"
                density="compact"
                clearable
                :loading="controller.loadingCountries.value"
                :items="controller.countries.value"
                v-model="controller.tableFilter.value.country"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" md="6">
              <v-autocomplete
                label="Esporte"
                variant="underlined"
                density="compact"
                clearable
                :items="controller.disciplines.value"
                v-model="controller.tableFilter.value.discipline"
              ></v-autocomplete>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-autocomplete
                label="Local"
                variant="underlined"
                density="compact"
                clearable
                :items="controller.venues.value"
                v-model="controller.tableFilter.value.venue"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Data"
                type="date"
                variant="underlined"
                density="compact"
                v-model="controller.tableFilter.value.date"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-tooltip location="bottom" text="Cancelar">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              size="small"
              variant="outlined"
              color="red"
              prepend-icon="mdi-close"
              :disabled="controller.loading.value"
              :loading="controller.loading.value"
              @click="controller.close"
            >
              Cancelar
            </v-btn>
          </template>
        </v-tooltip>
        <v-spacer></v-spacer>
        <v-tooltip location="bottom" text="Limpar">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              size="small"
              variant="outlined"
              color="primary"
              prepend-icon="mdi-broom"
              :disabled="controller.loading.value"
              :loading="controller.loading.value"
              @click="controller.clear"
            >
              Limpar
            </v-btn>
          </template>
        </v-tooltip>
        <v-spacer></v-spacer>
        <v-tooltip location="bottom" text="Salvar">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              size="small"
              variant="elevated"
              color="primary"
              prepend-icon="mdi-content-save"
              :disabled="controller.loading.value"
              :loading="controller.loading.value"
              @click="controller.filterRecords(controller.tableFilter.value)"
            >
              Salvar
            </v-btn>
          </template>
        </v-tooltip>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script setup>
const { controller } = defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>
