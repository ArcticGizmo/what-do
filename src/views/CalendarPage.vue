<template>
  <BasePage title="Calendar">
    <IonDatetime :value="selectedDate" presentation="date" @ion-change="onChange" />
    <!-- item preview -->
  </BasePage>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IonDatetime } from '@ionic/vue'
import BasePage from "./BasePage.vue";

const selectedDate = ref(new Date().toISOString().slice(0, 10));

const onChange = (event: CustomEvent) => {
  const date = event.detail.value.slice(0, 10);
  selectedDate.value = date;
}
</script>
