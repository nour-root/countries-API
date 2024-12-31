import "./style.css";
import getData from "./services/getData.service";
import ShowData from "./components/ShowData";
import moonIcon from "./icons/moon";
import sunIcon from "./icons/sun";

const themeToggle = document.getElementById("icon_toggle");
themeToggle.innerHTML = `${moonIcon()} Dark Mode`;

themeToggle.addEventListener("click", () => {
	const isDark = document
		.getElementsByTagName("body")[0]
		.classList.toggle("dark");

	if (isDark) {
		themeToggle.innerHTML = `${sunIcon()} Light Mode`;
	} else {
		themeToggle.innerHTML = `${moonIcon()} Dark Mode`;
	}
});

// Toggle Dropdown Menu Visibility
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");
//
// display
const content = document.getElementById("features");
//
//filter
const dropMenu = document.getElementById("dropdownMenu");
const menu = document.getElementsByClassName("py-1");
//
dropdownButton.addEventListener("click", () => {
	dropdownMenu.classList.toggle("hidden");
});

// Close the dropdown when clicking outside
document.addEventListener("click", (event) => {
	if (
		!dropdownButton.contains(event.target) &&
		!dropdownMenu.contains(event.target)
	) {
		dropdownMenu.classList.add("hidden");
	}
});

const main = () => {
	getData().then(async (res) => {
		let data = await res.json();
		data.forEach((country) => {
			const structuredData = ShowData(country);
			const div = document.createElement("div");
			div.innerHTML = `${structuredData}`;
			content.appendChild(div);
		});
	});
};
main();
