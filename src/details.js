import "./style.css";
import moon from "./Helper/moon";
import sun from "./Helper/Sun";
import getDetailsCountry from "./services/getDetailsCountryByName.service";
import loader from "./Helper/loading";
//
const switchMode = document.getElementById("icon_toggle");
const detailsContent = document.querySelector(".card");
const countryName = new URLSearchParams(location.search).get("name");
const flagimage = document.getElementById("flagImage");
const countryNameH1 = document.querySelector("#nameH1");
const nativeName = document.querySelector("#native-name");
const population = document.querySelector("#population");
const region = document.querySelector("#region");
const subRegion = document.querySelector("#sub-region");
const capital = document.querySelector("#capital");
const topLevelDomain = document.querySelector("#level-domain");
const currencies = document.querySelector("#currenies");
const languages = document.querySelector("#languages");
const borderCountries = document.querySelector("#bordersCountry");
//
const iconMode = document.querySelector(".iconMode");
const TextMode = document.querySelector(".TextMode");
//

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
    iconMode.innerHTML = sun();
    TextMode.textContent = " Light Mode"; // Update text
  } else {
    iconMode.innerHTML = moon();
    TextMode.textContent = " Dark Mode"; // Resett
  }
});
//
switchMode.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", isDarkMode);
  if (document.body.classList.contains("dark")) {
    iconMode.innerHTML = sun();
    TextMode.textContent = " Light Mode"; // Update text
  } else {
    localStorage.removeItem("darkMode");
    iconMode.innerHTML = moon();
    TextMode.textContent = " Dark Mode"; // Resett
  }
});
getDetailsCountry(countryName).then(async (response) => {
  const details = await response.json();
  details.forEach((country) => {
    flagimage.src = country.flags.png;
    countryNameH1.textContent = country.name;
    nativeName.textContent = ` ${country.nativeName}`;
    population.textContent = ` ${parseInt(
      country.population
    ).toLocaleString()}`;
    region.textContent = ` ${country.region}`;
    subRegion.textContent = ` ${country.subregion}`;
    capital.textContent = ` ${country.capital}`;
    topLevelDomain.textContent = ` ${country.topLevelDomain}`;
    currencies.innerText = ` ${Object.values(country.currencies)
      .map((currency) => currency.name)
      .join(", ")}`;
    languages.innerText = ` ${Object.values(country.languages)
      .map((language) => language.name)
      .join(", ")}`;
    if (country.borders) {
      country.borders.forEach((border) => {
        fetch(`https://restcountries.com/v2/alpha/${border}`).then(
          async (respons) => {
            const b = await respons.json();
            const borderCountry = document.createElement("a");
            borderCountry.href = `details.html?name=${b.name}`;
            borderCountry.innerHTML = `<span
                class="border border-slate-300 hover:bg-slate-200 duration-150 px-5 py-1 text-center h-fit text-Dark_gray_LightMode_inputs_and_Text"
                >${b.name}</span
              >`;
            borderCountries.appendChild(borderCountry);
          }
        );
      });
    } else {
      borderCountries.innerHTML = `<span
                class="duration-150 px-5 py-1 text-center h-fit text-Dark_gray_LightMode_inputs_and_Text"
                >There are no border countries</span
              >`;
    }
  });
});
