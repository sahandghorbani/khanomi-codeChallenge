/* export default defineEventHandler(async (event) => {
  // api call with pubic key
   const { name } = useQuery(event);
   console.log(name);
  const { PUBLIC_KEY } = useRuntimeConfig()
  const { data } = await $fetch(
    `https://gateway.marvel.com:443/v1/public/characters/${name}?apikey=${PUBLIC_KEY}`
  );

  return data;
});
 */