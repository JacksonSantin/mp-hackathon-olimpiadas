<template>
  <v-dialog
    width="1000"
    scrollable
    persistent
    v-model="controller.dialogForm.value"
  >
    <v-card>
      <v-card-title class="pa-0 ma-0">
        <v-toolbar
          flat
          color="black"
          density="compact"
          title="Detalhes do Evento"
        >
        </v-toolbar>
      </v-card-title>

      <v-card-text class="pa-5">
        <v-container fluid class="pa-0">
          <v-row align="center" justify="center" dense>
            <v-col cols="12" sm="6">
              <h2 class="font-weight-bold mb-2">
                {{ controller.modelEvents.value.detailed_event_name }}
              </h2>
              <p class="text-h6 text-grey-darken-3 mb-2">
                <b>Data:</b> {{ controller.modelEvents.value.day }}
              </p>
              <p class="text-h6 text-grey-darken-3 mb-2">
                <b>Horário:</b>
                <span
                  >{{ controller.modelEvents.value.start_date }} -
                  {{ controller.modelEvents.value.end_date }}</span
                >
              </p>
              <p class="text-h6 text-grey-darken-3 mb-2">
                <b>Disciplina:</b>
                {{ controller.modelEvents.value.discipline_name }}
              </p>
              <p class="text-h6 text-grey-darken-3 mb-2">
                <b>Disciplina:</b>
                {{ controller.modelEvents.value.discipline_name }}
              </p>
              <p class="text-h6 text-grey-darken-3 mb-2">
                <b>Local:</b> {{ controller.modelEvents.value.venue_name }}
              </p>
              <p class="text-h6 text-grey-darken-3 mb-2">
                <b>Status:</b> {{ controller.modelEvents.value.status }}
              </p>
              <p class="text-h6 text-grey-darken-3 mb-2">
                <b>Evento com Medalha:</b>
                {{
                  controller.modelEvents.value.is_medal_event === 0
                    ? "Não"
                    : "Sim"
                }}
              </p>
              <p class="text-h6 text-grey-darken-3 mb-2">
                <b>Evento ao Vivo:</b>
                {{ controller.modelEvents.value.is_live === 0 ? "Não" : "Sim" }}
              </p>
            </v-col>
            <v-col cols="12" sm="6">
              <div class="d-flex flex-column align-start">
                <h3 class="font-weight-bold text-grey-darken-5 mt-4">
                  Competidores:
                </h3>
                <div
                  class="d-flex align-center my-2"
                  v-for="(item, index) in controller.modelEvents.value
                    .competitors"
                  :key="index"
                >
                  <div class="image-container">
                    <v-img
                      class="mr-3"
                      width="30"
                      aspect-ratio="16/9"
                      style="border: 1px solid #e2e2e2"
                      cover
                      :src="item.country_flag_url"
                    ></v-img>
                    <p class="text-grey-darken-3">
                      {{ item.competitor_name }} ({{
                        item.result_winnerLoserTie
                      }})
                    </p>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider />

      <v-card-actions class="d-flex align-center justify-space-between">
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
              @click="controller.closeDialogForm"
            >
              Cancelar
            </v-btn>
          </template>
        </v-tooltip>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import dayjs from "dayjs";

const { controller } = defineProps({
  controller: { type: Object, required: true },
});
</script>

<style scoped>
.image-container {
  display: flex;
}

.image-container v-img {
  width: 100%;
  height: auto;
}
</style>
