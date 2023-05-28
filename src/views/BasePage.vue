<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content  class="page-content" :fullscreen="fullscreen">
      <slot></slot>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonToolbar, IonHeader, IonTitle } from '@ionic/vue';

defineProps<{ title?: string, fullscreen?: boolean }>();
</script>

<style>
ion-content {
  --padding-top: 1rem;
  --padding-start: 1rem;
  --padding-end: rem;
}
</style>
