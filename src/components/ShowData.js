const ShowData = (country) => {
  return `<div
            id="box"
            class="bg-White h-full drop-shadow-md max-sm:w-5/6 max-sm:mx-auto rounded-md overflow-hidden flex flex-col space-y-3"
          >
            <img src="${country.flags.png}" class="h-[55%]" alt="" />
            <div class="flex flex-col gap-2 px-6">
              <h2 class="font-bold text-xl">${country.name}</h2>
              <div>
                <p>
                  Population:<span class="text-Dark_gray_LightMode_inputs ml-1"
                    >${country.population}</span
                  >
                </p>
                <p>
                  Region:<span class="text-Dark_gray_LightMode_inputs ml-1"
                    >${country.region}</span
                  >
                </p>
                <p>
                  Capital:<span class="text-Dark_gray_LightMode_inputs ml-1"
                    >${country.capital}</span
                  >
                </p>
              </div>
            </div>
          </div>`;
};
export default ShowData;