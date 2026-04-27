<template>
  <medal-table :controller="controller" />
</template>

<script setup>
import { olympicsControllerImpl } from "../di/di";
import MedalTable from "../component/table.vue";
const controller = olympicsControllerImpl();
</script>
