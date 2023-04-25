import { useEffect, useState } from "react";
const axios = require("axios");

const CarFormDocuments = () => {
  const [allBrand, setAllBrand] = useState([]);
  const [brand, setBrand] = useState("");
  const [brandSelected, setBrandSelected] = useState(false);
  const [modelSelected, setModelSelected] = useState(false);
  const [yearSelected, setYearSelected] = useState(false);
  const [partType, setPartType] = useState("");
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
      // url: `https://car-api2.p.rapidapi.com/api/models?year=${year}&make=${brand}`,
      url: `https://car-api2.p.rapidapi.com/api/models?year=2020&make=${brand}`,
      params: {sort: 'id', direction: 'asc', verbose: 'yes'},
      headers: {
        // 'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': 'cca3027ed2mshab6215589fddd89p1d62f6jsn5d3af0d08feb',
        'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      console.log(response.data)
      setAllModel(response.data.data);
    }).catch(function (error) {
      console.error(error);
    });
  },[brand]);

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
      type: partType,
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
      setPartType("");
      setQuantity(1);
      setName("");
      setEmail("");
      setMobile("");
      setAddress("");
      setBrandSelected(false);
      setModelSelected(false);
      setYearSelected(false);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };


  return (
    <div>
      <div className="flex justify-center home-input-field-area my-8">
      <div class="w-11/12 bg-white rounded-lg shadow dark:border md:mt-0  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

        <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6 lg:space-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" action="#">

          

      <div  className="md:mt-6 lg:mt-8 dd-parent">
        <label for="brand-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
        <input autocomplete="off" value={brand} onFocus={()=>setBrandSelected(true)} onChange={onBrandChange} type="text" name="brand-name" id="brand-name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter brand name" required=""/>
        <div className={`dropdown ${brandSelected? '':'hidden'}`}>
          {allBrand
            .filter((item) => {
              const searchTerm = brand.toLowerCase();
              const fullName = item.toLowerCase();

              return (
                brandSelected ? 
                // searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm 
                :
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 5)
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
      
      <div className="dd-parent">
        <label for="year" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
        <input autocomplete="off" value={year} onFocus={()=>setYearSelected(true)}  onChange={onYearChange} type="number" name="year" id="year" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter year" required=""/>
        <div className={`dropdown ${yearSelected? '':'hidden'}`} >
        {allYear.filter((item) => {
            const searchTerm = year.toString().toLowerCase();
            const fullName = item.toString().toLowerCase();
            // console.log(searchTerm,fullName)

            return (
              yearSelected ? 
                // searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm 
                :
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
      <div className="dd-parent">
        <label for="model-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Model</label>
        <input autocomplete="off" value={model} onFocus={()=>setModelSelected(true)} onChange={onModelChange} type="text"  name="model-name" id="model-name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter model name" required=""/>
        <div className={`dropdown ${modelSelected? '':'hidden'}`}>
        {allModelName.filter((item) => {
            const searchTerm = model.toLowerCase();
            const fullName = item.toLowerCase();
            // console.log(searchTerm,fullName)

            return (
              modelSelected ? 
                // searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm 
                :
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
      <div >
        <label for="parts-required" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Part Required</label>
          <input value={requiredParts} onChange={(e)=>setRequiredParts(e.target.value)} type="text" name="parts-required" id="parts-required" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter parts required" required=""/>
      </div>

      <div class="relative">
        <label for="part-type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Part Type</label>
        <select value={partType} onChange={(e)=>setPartType(e.target.value)} id="part-type" name="part-type" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pl-2 pr-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 focus:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="" disabled selected>Select part type</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Electrical">Electrical</option>
          <option value="AC">AC</option>
          <option value="Extras">Extras</option>
        </select>
        
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
          <input value={address} onChange={(e)=>setAddress(e.target.value)} name="address" id="address" rows="3" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123 Main St, Anytown USA" required=""></input>
      </div>
      <div>
        <button type="submit" class="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-7">Submit</button>
      </div>
      </form>
      </div>
      </div> 
       </div>
    </div>
  )
}

export default CarFormDocuments


