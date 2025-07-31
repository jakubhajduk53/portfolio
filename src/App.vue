<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "../src/components/Header.vue";
</script>

<template>
  <div class="font-tiktok-sans text-main-900 bg-main-100">
    <div>
      <Header />
      <RouterView v-slot="{ Component }">
        <!-- <Transition name="fade-slide" mode="in-out"> -->
        <component :is="Component" />
        <!-- </Transition> -->
      </RouterView>
    </div>
  </div>
</template>

<style scoped>
/* .fade-slide-enter-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
  transition-delay: 0.1s;
}

.fade-slide-enter-from {
  opacity: 0;
}
.fade-slide-leave-from {
  opacity: 1;
} */
</style>
