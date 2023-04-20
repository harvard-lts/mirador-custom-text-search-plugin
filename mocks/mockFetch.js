export default async function mockFetch(bool) {
  return {
    json: () => {
      return {
        hasOcr: bool,
      };
    },
  };
}
