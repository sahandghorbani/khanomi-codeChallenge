<template>
  <div class="card text-center flex flex-col justify-between">
    <img
      :src="hero.thumbnail.path + '.' + hero.thumbnail.extension"
      class="thumb rounded-md"
    />
    <p class="font-bold text-white m-4 truncate">{{ hero.name }}</p>
    <NuxtLink :to="`/heros/${hero.id}`">
      <p class="btn my-4 flex min-w-full">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { hero } = defineProps(["hero"]);
</script>

<style scoped>
.thumb {
  max-height: 320px;
  /* max-width: 78%; */
  margin: 0 auto;
}
</style>
