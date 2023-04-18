<template>
  <div>
    <HeroDetails :charecter="charector.data.results[0]" />
  </div>
</template>

<script setup lang="ts">
import { useFetchStore } from "@/stores/fetchData";
import { storeToRefs } from "pinia";
const { id } = useRoute().params;

// first approach: call method by built-in nuxt composable :
const publicKey = useRuntimeConfig().public.PUBLIC_KEY; // accessing environment variables
const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${publicKey}`;
let { data: charector }: any = await useFetch(url);
console.log(charector.value);

if (!charector.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Hero charrector not found",
  });
}

// second approach: call method from store :
/* const store = useFetchStore();
store.fetchSingleHero(url.value);
const { charector } = storeToRefs(store); */
</script>

<style lang="scss" scoped></style>
