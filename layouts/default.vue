<template>
  <div>
    <header class="shadow-sm bg-gray-800">
      <nav class="container p-4">
        <div class="mb-6 lg:w-8/12 mx-auto sm:w-full">
       
          <input
            type="text"
            id="default-input"
            class="bg-gray-40 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            @keyup="searchCharecter"
            v-model="query"
          />
        </div>
      </nav>
    </header>
    <div class="container p-4 mx-auto">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetchStore } from "@/stores/fetchData";
const timeout = <any>ref(null);
const router = useRouter();

const store = useFetchStore();
let query = ref("");

let searchCharecter = () => {
  clearTimeout(timeout.value);
  timeout.value = setTimeout(async function () {
    await store.searchingCharector(query.value);
    router.push("/");
  }, 600);
};
</script>

<style scoped></style>
