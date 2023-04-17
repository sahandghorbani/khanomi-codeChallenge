<template>
  <div class="content-app grid grid-cols-3 p-4 gap-4">
    <div class="content-app" v-for="(hero, i) in charectors" :key="i">
      <HeroCard :hero="hero" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useFetchStore } from "@/stores/fetchData";
import { storeToRefs } from "pinia";



const store = useFetchStore();
const { charectors } = storeToRefs(store);

onMounted(() => {
  store.fetchData(
    "https://gateway.marvel.com:443/v1/public/characters?apikey=7e11bd911194ddf46b9066239fcc160b"
  );
});
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
