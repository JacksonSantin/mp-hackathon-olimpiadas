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
          <div class="d-flex flex-column flex-md-row justify-between">
            <div class="d-flex flex-column w-50">
              <h2 class="font-weight-bold mb-2">
                {{ controller.modelEvents.value.detailed_event_name }}
              </h2>
              <p class="text-h6 text-grey-darken-3 mb-2">
                <strong>Data:</strong>
                {{
                  dayjs(controller.modelEvents.value.day).format("DD/MM/YYYY")
                }}
              </p>
              <p class="text-h6 text-grey-darken-3 mb-2">
                <strong>Horário: </strong>
                <span>
                  {{
                    formatBrazilTime(controller.modelEvents.value.start_date)
                  }}
                </span>
              </p>
              <p class="text-h6 text-grey-darken-3 mb-2">
                <strong>Disciplina:</strong>
                {{ controller.modelEvents.value.discipline_name }}
              </p>
              <p
                v-if="controller.modelEvents.value.venue_name"
                class="text-h6 text-grey-darken-3 mb-2"
              >
                <strong>Local:</strong>
                {{ controller.modelEvents.value.venue_name }}
              </p>
              <p
                v-if="controller.modelEvents.value.status"
                class="text-h6 text-grey-darken-3 mb-2"
              >
                <strong>Status:</strong>
                <v-chip
                  size="small"
                  variant="outlined"
                  class="ma-2"
                  :prepend-icon="
                    controller.getChipIcon(controller.modelEvents.value.status)
                  "
                  :color="
                    controller.getChipColor(controller.modelEvents.value.status)
                  "
                >
                  {{ controller.modelEvents.value.status }}
                </v-chip>
              </p>
              <p class="text-h6 text-grey-darken-3 mb-2">
                <strong>Evento com Medalha:</strong>
                {{
                  controller.modelEvents.value.is_medal_event === 0
                    ? "Não"
                    : "Sim"
                }}
              </p>
              <p class="text-h6 text-grey-darken-3 mb-2">
                <strong>Evento ao Vivo:</strong>
                {{ controller.modelEvents.value.is_live === 0 ? "Não" : "Sim" }}
              </p>
            </div>
            <div
              class="d-flex flex-column align-start"
              v-if="controller.modelEvents.value.competitors.length"
            >
              <h3 class="font-weight-bold text-grey-darken-5 mt-4">
                Competidores:
              </h3>
              <div
                class="d-flex align-center my-2"
                v-for="(item, index) in controller.modelEvents.value
                  .competitors"
                :key="index"
              >
                <div v-if="item.result_winnerLoserTie">
                  <div class="image-container">
                    <v-img
                      class="mr-3"
                      width="40"
                      aspect-ratio="16/9"
                      style="border: 1px solid #e2e2e2"
                      cover
                      rounded
                      :src="item.country_flag_url"
                    ></v-img>
                    <v-chip
                      :prepend-icon="
                        item.result_winnerLoserTie === 'W'
                          ? 'mdi-crown-outline'
                          : ''
                      "
                      :color="
                        item.result_winnerLoserTie === 'W'
                          ? '#d3a01f'
                          : 'primary'
                      "
                      variant="outlined"
                      size="small"
                      >{{ item.competitor_name }} -
                      {{ item.result_mark }}</v-chip
                    >
                  </div>
                </div>
                <div v-else>
                  <div class="image-container">
                    <v-img
                      class="mr-3"
                      width="40"
                      aspect-ratio="16/9"
                      style="border: 1px solid #e2e2e2"
                      cover
                      rounded
                      :src="item.country_flag_url"
                    ></v-img>
                    <v-chip
                      :prepend-icon="
                        controller.getCompetitorIcon(item.position)
                      "
                      :color="controller.getCompetitorColor(item.position)"
                      variant="outlined"
                      size="small"
                      >{{ item.competitor_name }} -
                      {{ item.result_mark }}</v-chip
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
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
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const { controller } = defineProps({
  controller: { type: Object, required: true },
});

const formatBrazilTime = (date) => {
  return dayjs(date).tz("America/Sao_Paulo").format("HH:mm");
};
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
