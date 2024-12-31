const getCountriesByRegion = (region) => {
  return fetch(`https://restcountries.com/v2/region/${region}`);
};
export default getCountriesByRegion;
