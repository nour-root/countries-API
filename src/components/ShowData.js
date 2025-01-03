const ShowData = (country) => {
  return `<a
            href="/details.html?country=${country.name}"
            id="${country.region}"
            class="bg-white dark:bg-dark_blue_Elements cursor-pointer hover:shadow-xl hover:-translate-y-1 duration-300 h-[90%] drop-shadow-md max-sm:mx-auto rounded-md overflow-hidden flex flex-col space-y-3"
          >
            <img src="${country.flags.png}" class="h-[52%]" alt="" />
            <div class="flex flex-col gap-2 px-6">
              <h2 class="font-bo  ld text-xl dark:text-white">${country.name}</h2>
              <div>
                <p class="dark:text-white">
                  Population:<span class="text-Dark_gray_LightMode_inputs_and_Text ml-1"
                    >${country.population}</span
                  >
                </p>
                <p class="dark:text-white">
                  Region:<span class="text-Dark_gray_LightMode_inputs_and_Text ml-1"
                    >${country.region}</span
                  >
                </p>
                <p class="dark:text-white">
                  Capital:<span class="text-Dark_gray_LightMode_inputs_and_Text ml-1"
                    >${country.capital}</span
                  >
                </p>
              </div>
            </div>
          </a>`;
};
export default ShowData;
