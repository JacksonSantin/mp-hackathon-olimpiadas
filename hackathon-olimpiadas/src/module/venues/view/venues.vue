<template>
  <venues-table :controller="controller" />
</template>

<script setup>
import { venuesControllerImpl } from "../di/di";
import VenuesTable from "../component/table.vue";
const controller = venuesControllerImpl();
</script>
