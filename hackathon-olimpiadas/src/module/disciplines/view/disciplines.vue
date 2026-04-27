<template>
  <disciplines-table :controller="controller" />
</template>

<script setup>
import { disciplinesControllerImpl } from "../di/di";
import DisciplinesTable from "../component/table.vue";
const controller = disciplinesControllerImpl();
</script>
