import { useEffect, useRef, useState } from "react";
const axios = require("axios");
import emailjs from '@emailjs/browser';

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
      method: "GET",
      url: "https://car-data.p.rapidapi.com/cars/makes",
      headers: {
        "X-RapidAPI-Key": "8a23d0a514mshe967b025d67bacap17893cjsna0dd77ac4153",
        "X-RapidAPI-Host": "car-data.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const sortedCarBrand = response.data.sort((a, b) => {
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
        });
        setAllBrand(sortedCarBrand);
      })
      .catch(function (error) {
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
      method: "GET",
      // url: `https://car-api2.p.rapidapi.com/api/models?year=${year}&make=${brand}`,
      url: `https://car-api2.p.rapidapi.com/api/models?year=2020&make=${brand}`,
      params: { sort: "id", direction: "asc", verbose: "yes" },
      headers: {
        // 'content-type': 'application/octet-stream',
        "X-RapidAPI-Key": "cca3027ed2mshab6215589fddd89p1d62f6jsn5d3af0d08feb",
        "X-RapidAPI-Host": "car-api2.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setAllModel(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [brand]);

  const allModelName = allModel.map((item) => {
    return item.name;
  });
  const sortedCarModel = allModelName.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
  });
  // console.log(allModelName);

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     url: "https://car-data.p.rapidapi.com/cars/years",
  //     headers: {
  //       "X-RapidAPI-Key": "04d9b0852emshea0815ccd1d70f8p11dc8fjsne6687c7fc606",
  //       "X-RapidAPI-Host": "car-data.p.rapidapi.com",
  //     },
  //   };
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       setAllYear(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);
  
  useEffect(() => {
    let totalYear=[];
      for(let yr=2023;yr>1980;yr--){
        totalYear.push(yr);
      }
      setAllYear(totalYear);
    }, []);

  const sendEmail = (body) => {
    // e.preventDefault();
    console.log(body);
    const message=`
    Name: ${body.name}
    Email: ${body.email}
    Mobile: ${body.mobile}
    Address: ${body.address}
    Type: ${body.partType}
    Required Parts: ${body.requiredParts}
    Quantity: ${body.quantity}
    Brand: ${body.brand}
    Model: ${body.model}
    Year: ${body.year}
    `

    emailjs
      .send(
        "service_zv2e5ie",
        "template_h5oqdcn",
        {
          from_name: body.name,
          message: message
        },
        "user_BRbBMhU7EzvCNwfLmhtui"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [requiredParts, setRequiredParts] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  // const [savingStatus, setSavingStatus] = useState(false);

  // console.log(requiredParts);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
    // console.log(event.target[0].defaultValue);
    if (
      brand === "" ||
      year === "" ||
      model === "" ||
      requiredParts === "" ||
      partType === "" ||
      // quantity === "" ||
      name === "" ||
      email === "" ||
      mobile === "" ||
      address === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    const body = {
      brandName: brand,
      year: year,
      modelName: model,
      requiredParts: requiredParts,
      type: partType,
      // quantity: quantity,
      name: name,
      email: email,
      phone: mobile,
      deliveryAddress: address,
    };
    // console.log(event);
    fetch("http://localhost:4800/api/v1/entries", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Your request has been sent successfully, You will be contacted soon");
        sendEmail(body);
        console.log("Success:", data);
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
        alert(error);
        console.error("Error:", error);
      });
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // console.log(dropdownRef, event.target);
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setBrandSelected(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div>
      <div className="flex justify-center mt-16">
        <div className="w-11/12 ">
          <h1 className="text-xl text-black font-bold">Search by Vehicle</h1>
          <p className="text-slate-700 text-sm">Filter your result by entering your vehicle to ensure you find the parts that fit</p>
        </div>
      </div>
      <div className="flex justify-center home-input-field-area mt-6 mb-10">
        <div style={{backgroundColor: '#c8d8e6'}} className="w-11/12 car-form-bg-color rounded-lg shadow dark:border md:mt-0  xl:p-0 ">
          <div  className="p-6 md:pt-6  sm:pt-8 space-y-4 md:space-y-6 sm:p-8">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6 lg:space-y-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-4 pt-4"
              action="#"
            >
              <div className="md:mt-6  lg:mt-8 dd-parent">
                <input
                  autoComplete="off"
                  value={brand}
                  onFocus={() => setBrandSelected(true)}
                  onChange={onBrandChange}
                  type="text"
                  name="brand-name"
                  id="brand-name"
                  className="bg-white align-middle text-black border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 placeholder-black  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter brand name"
                  required=""
                />
                <div className={`dropdown ${brandSelected ? "" : "hidden"}`}>
                  {allBrand
                    .filter((item) => {
                      const searchTerm = brand.toLowerCase();
                      const fullName = item.toLowerCase();

                      return brandSelected
                        ? // searchTerm &&
                          fullName.startsWith(searchTerm) &&
                            fullName !== searchTerm
                        : searchTerm &&
                            fullName.startsWith(searchTerm) &&
                            fullName !== searchTerm;
                    })
                    .slice(0, 5)
                    .map((item, index) => (
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
                <input
                  autoComplete="off"
                  value={model}
                  onFocus={() => setModelSelected(true)}
                  onChange={onModelChange}
                  type="text"
                  name="model-name"
                  id="model-name"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 placeholder-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter model name"
                  required=""
                />
                <div className={`dropdown ${modelSelected ? "" : "hidden"}`}>
                  {allModelName
                    .filter((item) => {
                      const searchTerm = model.toLowerCase();
                      const fullName = item.toLowerCase();
                      // console.log(searchTerm,fullName)

                      return modelSelected
                        ? // searchTerm &&
                          fullName.startsWith(searchTerm) &&
                            fullName !== searchTerm
                        : searchTerm &&
                            fullName.startsWith(searchTerm) &&
                            fullName !== searchTerm;
                    })
                    .slice(0, 5)
                    .map((item, index) => (
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

              <div className="dd-parent">
                <input
                  autoComplete="off"
                  value={year}
                  onFocus={() => setYearSelected(true)}
                  onChange={onYearChange}
                  type="number"
                  name="year"
                  id="year"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 placeholder-black  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter year"
                  required=""
                />
                <div className={`dropdown ${yearSelected ? "" : "hidden"}`}>
                  {allYear
                    .filter((item) => {
                      const searchTerm = year.toString().toLowerCase();
                      const fullName = item.toString().toLowerCase();
                      // console.log(searchTerm,fullName)

                      return yearSelected
                        ? // searchTerm &&
                          fullName.startsWith(searchTerm) &&
                            fullName !== searchTerm
                        : searchTerm &&
                            fullName.startsWith(searchTerm) &&
                            fullName !== searchTerm;
                    })
                    .slice(0, 5)
                    .map((item, index) => (
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
              
              <div className="relative">
                <select
                  value={partType}
                  onChange={(e) => setPartType(e.target.value)}
                  id="part-type"
                  name="part-type"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pl-2 pr-3  dark:border-gray-600 placeholder-black  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="" disabled selected>
                    Select part type
                  </option>
                  <option value="gcc">GCC</option>
                  <option value="american">Electrical</option>
                  <option value="japanese">Japanese</option>
                  <option value="others">Others</option>
                </select>
              </div>


              <div>
                <input
                  value={requiredParts}
                  onChange={(e) => setRequiredParts(e.target.value)}
                  type="text"
                  name="parts-required"
                  id="parts-required"
                  className="bg-white border border-gray-800 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   placeholder-black  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Part No. / Part required"
                  required=""
                />
              </div>

              

              {/* <div>
                <input
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  type="number"
                  name="quantity"
                  id="quantity"
                  className="bg-white border border-gray-700  sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 placeholder-black  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Quantity"
                  required=""
                />
              </div> */}
              <div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 placeholder-black  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name"
                  required=""
                />
              </div>
              
              <div>
                <input
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  type="tel"
                  name="mobile"
                  id="mobile"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 placeholder-black  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Mobile"
                  required=""
                />
              </div>
              <div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 placeholder-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  required=""
                />
              </div>
              <div className="relative">
                <select
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  id="part-type"
                  name="part-type"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pl-2 pr-3  dark:border-gray-600 placeholder-black  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="" disabled selected>
                    City
                  </option>
                  <option value="Abu Dhabi">Abu Dhabi</option>
                  <option value="Ajman">Ajman</option>
                  <option value="Sharjah">Sharjah</option>
                  <option value="Ras Al Quwain">Ras Al Khaimah</option>
                  <option value="Umm Al Quwain">Umm Al Quwain</option>
                  <option value="Fujairah">Fujairah</option>
                </select>
              </div>
              {/* <div>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  name="address"
                  id="address"
                  rows="3"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Address"
                  required=""
                ></input>
              </div> */}
              <div>
                <button
                  type="submit"
                  className="home-car-form-btn w-full p-2 rounded"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarFormDocuments;
