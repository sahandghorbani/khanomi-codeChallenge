import axios from "axios";
export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export const useFetchStore = defineStore("fetch", {
  state: () => ({
    charectors: {},
    charector: {},
    searchResult: [],
  }),
  actions: {
    async fetchData(url: string) {
      this.charectors = {};
      let data = await axios.get(url);

      this.charectors = data.data.data.results;
    },
    async fetchSingleHero(url: string) {
      this.charector = {};
      let data = await axios.get(url);
      this.charector = data.data.data.results[0];
    },

    async searchingCharector(query: string) {
      let url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&apikey=7e11bd911194ddf46b9066239fcc160b`;
      await this.fetchData(url);

    },
  },
});
