import "./style.css";
import getData from "./services/getData.service";
import ShowData from "./components/ShowData";
import loader from "./Helper/loading";
import getCountriesByRegion from "./services/getCountriesByRegion.service";
import searchCountriesByName from "./services/searchCountriesByName.service";

// Toggle Dropdown Menu Visibility
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");
//
// display
const content = document.getElementById("features");
//
//filter
const select = document.getElementById("dropdown");
const searchForm = document.getElementById("input-search");

//

const toggleInputs = (disabled = true) => {
  select.disabled = disabled;
  searchForm.disabled = disabled;
};

select.addEventListener("change", (e) => {
  content.innerHTML = loader();
  toggleInputs(true);
  getCountriesByRegion(e.target.value)
    .then(async (res) => {
      const region = await res.json();
      content.innerHTML = "";
      region.forEach((country) => {
        const structuredData = ShowData(country);
        const div = document.createElement("div");
        div.innerHTML = structuredData;
        content.appendChild(div);
      });
    })
    .finally(() => toggleInputs(false));
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = document.getElementById("search").value;
  if (searchValue && searchValue.length > 3) {
    content.innerHTML = loader();
    toggleInputs(true);
    searchCountriesByName(searchValue)
      .then(async (res) => {
        const data = await res.json();
        content.innerHTML = "";
        data.forEach((country) => {
          const structuredData = ShowData(country);
          const div = document.createElement("div");
          div.innerHTML = structuredData;
          content.appendChild(div);
        });
      })
      .finally(() => toggleInputs(false));
  }
});

content.innerHTML = loader();
const main = () => {
  toggleInputs(true);
  getData()
    .then(async (res) => {
      let data = await res.json();
      content.innerHTML = "";
      data.forEach((country) => {
        const structuredData = ShowData(country);
        const div = document.createElement("div");
        div.innerHTML = structuredData;
        content.appendChild(div);
      });
    })
    .finally(() => toggleInputs(false));
};
main();
