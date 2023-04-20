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

  const [brandName, setBrandName] = useState("");
  const [productionYear, setProductionYear] = useState("");
  const [modelName, setModelName] = useState("");
  const [requiredParts, setRequiredParts] = useState("");
  const [quantity, setQuantity] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
    console.log(event);
  };


  return (
    <div>
      <div className="flex justify-center home-input-field-area my-8">
      <div class="w-1/2 bg-white rounded-lg shadow dark:border md:mt-0  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

    <form class="space-y-4 md:space-y-6" action="#">
      <div>
        <label for="brand-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Name</label>
        <input value={brand} onChange={onBrandChange} type="text" name="brand-name" id="brand-name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter brand name" required=""/>
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
      
      <div>
        <label for="year" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
        <input value={year} onChange={onYearChange} type="number" name="year" id="year" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter year" required=""/>
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
      <div>
        <label for="model-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Model Name</label>
        <input value={model} onChange={onModelChange} type="text"  name="model-name" id="model-name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter model name" required=""/>
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
      <div>
        <label for="parts-required" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parts Required</label>
        <input type="text" name="parts-required" id="parts-required" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter parts required" required=""/>
      </div>
      <div>
        <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
        <input type="number" name="quantity" id="quantity" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter quantity" required=""/>
      </div>
      <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required=""/>
      </div>
      <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
      </div>
      <div>
          <label for="mobile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile</label>
          <input type="tel" name="mobile" id="mobile" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+1 555-555-5555" required=""/>
      </div>
      <div>
          <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
          <textarea name="address" id="address" rows="3" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123 Main St, Anytown USA" required=""></textarea>
      </div>
      <div class="flex flex-col items-center">
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Submit</button>
      </div>
      </form>
      </div>
      </div>
          {/* <div className="bg-gray-900 home-input-field">
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
          </div> */}
        </div>
    </div>
  )
}

export default CarFormDocuments


