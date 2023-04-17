<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img  :src="charector.thumbnail.path + '.' + charector.thumbnail.extension" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ charector.name }}</h2>
        <!-- <div v-for="(serie, i) in charector.series.items" :key="i">
          <p class="text-sm my-7">Series - ${{ serie.name }}</p>
        </div> -->
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
        <p class="mb-7">{{ charector.description }}</p>
        <button class="btn flex">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { charector } = defineProps(["charector"]);
console.log(charector);
</script>

<style scoped>
img {
  max-width: 400px;
}
</style>
