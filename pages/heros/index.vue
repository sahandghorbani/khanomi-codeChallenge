<template>
  <div class="grid grid-cols-3 p-4 gap-4">
    <div v-for="(hero, i) in charectors" :key="i">
      <HeroCard :hero="hero" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useFetchStore } from "@/stores/fetchData";
import { storeToRefs } from "pinia";

definePageMeta({
  layout: "products",
});

const store = useFetchStore();
const { charectors } = storeToRefs(store);

onMounted(() => {
  store.fetchData(
    "https://gateway.marvel.com:443/v1/public/characters?apikey=7e11bd911194ddf46b9066239fcc160b"
  );
});
</script>

<style scoped></style>
