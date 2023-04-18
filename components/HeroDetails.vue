<template>
  <div class="card text-white">
    <div class="grid lg:grid-cols-2 gap-10 md:grid-cols-1">
      <div class="p-7">
        <img
          :src="charecter.thumbnail.path + '.' + charecter.thumbnail.extension"
          class="mx-auto my-7 rounded-md"
        />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ charecter.name }}</h2>
        <h3 class="font-bold border-t-2 mb-4 pt-2">Series:</h3>
        <div v-for="(serie, i) in charecter.series.items" :key="i">
          <p class="text-sm my-7">{{ i + 1 }} - {{ serie.name }}</p>
        </div>
        <h3 class="font-bold border-t-2 mb-4 pt-2">Commics:</h3>
        <div v-for="(comic, i) in charecter.comics.items" :key="i">
          <p class="text-sm my-7">{{ i + 1 }} -{{ comic.name }}</p>
        </div>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Hero description:</h3>
        <p class="mb-7">{{ charecter.description }}</p>
        <button class="btn flex">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>watch</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "heros",
});
const { charecter } = defineProps(["charecter"]);
</script>

<style scoped>
img {
  max-width: 400px;
}
</style>
