import axios from "axios";
const PUBLIC_KEY = useRuntimeConfig().public.PUBLIC_KEY;
const BASE_URL = useRuntimeConfig().public.BASE_URL;


export const useFetchStore = defineStore("fetch", {
  state: () => ({
    charectors: {},
    charector: {},
    searchResult: [],
  }),
  actions: {
    async fetchData(url?: string): Promise<void> {
      this.charectors = {};
      let data = await axios.get(url);
      this.charectors = data.data.data.results;
    },
    async fetchSingleHero(url: string): Promise<void> {
      this.charector = {};
      let data = await axios.get(url);
      this.charector = data.data.data.results[0];
    },

    async searchingCharector(query: string): Promise<void> {
      let url = `${BASE_URL}?nameStartsWith=${query}&apikey=${PUBLIC_KEY}`;
      await this.fetchData(url);
    },
  },
});
