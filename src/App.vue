<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "../src/components/Header.vue";
</script>

<template>
  <div class="font-tiktok-sans text-main-900 bg-main-100">
    <div>
      <Header />
      <RouterView v-slot="{ Component }">
        <Transition name="fade-slide" mode="out-in" appear>
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
}

.fade-slide-leave-from,
.fade-slide-enter-to {
  opacity: 1;
}
</style>
