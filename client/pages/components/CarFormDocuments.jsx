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
  
  const [requiredParts, setRequiredParts] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  // const [savingStatus, setSavingStatus] = useState(false);

  console.log(requiredParts)

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
    console.log(event.target[0].defaultValue);
    const body={
      brandName: brand,
      year: year,
      modelName: model,
      requiredParts: requiredParts,
      quantity: quantity,
      name: name,
      email: email,
      phone: mobile,
      deliveryAddress: address,
    }
    console.log(event);
    fetch('http://localhost:4800/api/v1/entries', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      alert("Data Saved Successfully");
      console.log('Success:', data);
      setBrand("");
      setYear("");
      setModel("");
      setRequiredParts("");
      setQuantity(1);
      setName("");
      setEmail("");
      setMobile("");
      setAddress("");
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };


  return (
    <div>
      <div className="flex justify-center home-input-field-area my-8">
      <div class="w-1/2 bg-white rounded-lg shadow dark:border md:mt-0  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

    <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6" action="#">
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
        <input value={requiredParts} onChange={(e)=>setRequiredParts(e.target.value)} type="text" name="parts-required" id="parts-required" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter parts required" required=""/>
      </div>
      <div>
        <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
        <input value={quantity} onChange={(e)=>setQuantity(e.target.value)} type="number" name="quantity" id="quantity" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter quantity" required=""/>
      </div>
      <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required=""/>
      </div>
      <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
      </div>
      <div>
          <label for="mobile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile</label>
          <input value={mobile} onChange={(e)=>setMobile(e.target.value)} type="tel" name="mobile" id="mobile" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+1 555-555-5555" required=""/>
      </div>
      <div>
          <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
          <textarea value={address} onChange={(e)=>setAddress(e.target.value)} name="address" id="address" rows="3" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123 Main St, Anytown USA" required=""></textarea>
      </div>
      <div class="flex flex-col items-center">
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Submit</button>
      </div>
      </form>
      </div>
      </div> 
       </div>
    </div>
  )
}

export default CarFormDocuments


