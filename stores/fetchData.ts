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
    charector : {}
  }),
  actions: {
    async fetchData(url: string) {
      this.charectors = {};
      let data = await axios.get(url);
      // console.log(data.data.data.results);
      
      this.charectors = data.data.data.results;
    },
    async fetchSingleHero(url: string) {
      this.charector = {}
      let data = await axios.get(url);
      // console.log(data.data.data.results[0]);
      this.charector = data.data.data.results[0];
      console.log(this.charector);
      
    },
  },
});
