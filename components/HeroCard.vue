<template>
  <div class="card text-center">
    <img
      :src="hero.thumbnail.path + '.' + hero.thumbnail.extension"
      class="thumb"
    />
    <p class="font-bold text-gray-500 m-4 truncate">{{ hero.name }}</p>
    <NuxtLink :to="`/heros/${hero.id}`">
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup>
const { hero } = defineProps(["hero"]);
</script>

<style scoped>
.thumb {
  max-height: 320px;
  max-width: 78%;
  margin: 0 auto;
}
</style>
