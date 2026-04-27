<template>
  <events-table :controller="controller" />
  <dialog-form :controller="controller" />
</template>

<script setup>
import { eventsControllerImpl } from "../di/di";
import EventsTable from "../component/table.vue";
import DialogForm from "../component/dialog-form.vue"
const controller = eventsControllerImpl();
</script>
