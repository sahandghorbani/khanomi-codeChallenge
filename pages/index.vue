<template>
  <div class="content-app grid grid-cols-3 p-4 gap-4">
    <div class="content-app" v-for="(hero, i) in charectors" :key="i">
      <HeroCard :hero="hero" />
    </div>
  </div>
      <div v-if="charectors.length == 0">
        <h2 class="text-white text-center text-2xl"> no hero found</h2>
      </div>
</template>

<script setup lang="ts">
import { useFetchStore } from "@/stores/fetchData";
import { storeToRefs } from "pinia";

const store = useFetchStore();
const { charectors } = storeToRefs(store);


const publicKey :string = useRuntimeConfig().public.PUBLIC_KEY;
const baseUrl :string = useRuntimeConfig().public.BASE_URL;

store.fetchData(`${baseUrl}?apikey=${publicKey}`);
</script>

<style scoped>
.content-app {
  animation: fadein 1s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
