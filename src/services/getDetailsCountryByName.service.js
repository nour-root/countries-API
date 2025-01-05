const getDetailsCountry = (name) => {
  return fetch(`https://restcountries.com/v2/name/${name}?fullText=true`);
};
export default getDetailsCountry;
