import { useEffect, useState } from "react";
const axios = require("axios");

const CarFormDocuments = () => {
  const [allBrand, setAllBrand] = useState([]);
  const [brand, setBrand] = useState("");
  const onBrandChange = (event) => {
    setBrand(event.target.value);
  };
  useEffect(() => {
      const options = {
        method: 'GET',
        url: 'https://car-data.p.rapidapi.com/cars/makes',
        headers: {
          'X-RapidAPI-Key': '8a23d0a514mshe967b025d67bacap17893cjsna0dd77ac4153',
          'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        setAllBrand(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }, []);

    const [allYear, setAllYear] = useState([]);
    const [allModel, setAllModel] = useState([]);
    const [year, setYear] = useState("");
    const [model, setModel] = useState("");


    const onYearChange = (event) => {
      setYear(event.target.value);
    };
    const onModelChange = (event) => {
      setModel(event.target.value);
    };

    useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://car-api2.p.rapidapi.com/api/models?year=${year}&make=${brand}`,
      params: {sort: 'id', direction: 'asc', verbose: 'yes'},
      headers: {
        'X-RapidAPI-Key': '8a23d0a514mshe967b025d67bacap17893cjsna0dd77ac4153',
        'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setAllModel(response.data.data);
    }).catch(function (error) {
      console.error(error);
    });
  },[brand,year]);

  const allModelName= allModel.map((item) => {
    return item.name;
  });
  // console.log(allModelName);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://car-data.p.rapidapi.com/cars/years',
      headers: {
        'X-RapidAPI-Key': '04d9b0852emshea0815ccd1d70f8p11dc8fjsne6687c7fc606',
        'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      setAllYear(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  return (
    <div>
      <div className="flex justify-center home-input-field-area my-8">
          <div className="bg-gray-900 home-input-field">
            <form className="px-6 ">
              <div className="space-y-12 ">
                <div className="border-b border-gray-900/10 pb-12">

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Brand Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      value={brand} 
                      onChange={onBrandChange}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="dropdown">
                  {allBrand
                    .filter((item) => {
                      const searchTerm = brand.toLowerCase();
                      const fullName = item.toLowerCase();

                      return (
                        searchTerm &&
                        fullName.startsWith(searchTerm) &&
                        fullName !== searchTerm
                      );
                    })
                    .slice(0, 10)
                    .map((item,index) => (
                      <div
                        onClick={() => setBrand(item)}
                        className="dropdown-row"
                        key={index}
                      >
                        {item}
                      </div>
                    ))}
                </div>
                </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Year
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={year} 
                          onChange={onYearChange}
                          autoComplete="email"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div className="dropdown">
                      {allYear.filter((item) => {
                          const searchTerm = year.toString().toLowerCase();
                          const fullName = item.toString().toLowerCase();
                          // console.log(searchTerm,fullName)

                          return (
                            searchTerm &&
                            fullName.startsWith(searchTerm) &&
                            fullName !== searchTerm
                          );
                        })
                        .slice(0, 5)
                        .map((item,index) => (
                          <div
                            onClick={() => setYear(item)}
                            className="dropdown-row"
                            key={index}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Car Model
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="your-address"
                          id="your-address"
                          value={model} 
                          onChange={onModelChange}
                          autoComplete="address"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div className="dropdown">
                      {allModelName.filter((item) => {
                          const searchTerm = model.toLowerCase();
                          const fullName = item.toLowerCase();
                          // console.log(searchTerm,fullName)

                          return (
                            searchTerm &&
                            fullName.startsWith(searchTerm) &&
                            fullName !== searchTerm
                          );
                        })
                        .slice(0, 5)
                        .map((item,index) => (
                          <div
                            onClick={() => setModel(item)}
                            className="dropdown-row"
                            key={index}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Country
                      </label>
                      <div className="mt-2">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Street address
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        City
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="address-level2"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        State / Province
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="region"
                          id="region"
                          autoComplete="address-level1"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        ZIP / Postal code
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autoComplete="postal-code"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default CarFormDocuments


