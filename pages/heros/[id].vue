<template>
  <div>
    <HeroDetails :charector="charector.data.results[0]" />
  </div>
</template>

<script setup>
import { useFetchStore } from "@/stores/fetchData";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const store = useFetchStore();
// const { charector } = storeToRefs(store);
const { id } = useRoute().params;
const url = ref(
  `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=7e11bd911194ddf46b9066239fcc160b`
);
// store.fetchSingleHero(url.value);
let { data: charector , refresh } = await useFetch(url.value);
// if (!charector.value) {
//   throw createError({ statusCode: 404, statusMessage: "Product not found" });
// }
</script>

<style lang="scss" scoped></style>
