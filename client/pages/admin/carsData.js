import React from "react";
import Sidebar from "../components/Sidebar";
import { BiSearch } from "react-icons/bi";

const carsData = () => {
  return (
    <Sidebar>
      <div>
        {/* Search bar */}
        <div className="mt-6">
          <form>
            <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
              <BiSearch className="w-5 h-5 absolute ml-3" />
              <input
                type="text"
                name="search"
                placeholder="Search..."
                autoComplete="off"
                aria-label="Search..."
                className="pr-3 pl-10 w-screen py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none right-2 ring-gray-300 focus:ring-gray-500 bg-gray-100 focus:ring-2"
              />
            </div>
          </form>
        </div>
        {/* Search bar end */}

        <div className="mt-5 bg-gray-100 h-screen px-4 rounded-xl">
          <div className=" flex pt-6 justify-between">
            <div>
              <h1 className="text-xl mb-4">Cars Data</h1>
            </div>
            <div>
              <button className="leads-btn">Add Cars Data</button>
            </div>
          </div>
          <div className="">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-3 text-left">Brand</th>
                  <th className="py-3 text-left">Model</th>
                  <th className="py-3 text-left">Year from</th>
                  <th className="py-3 text-left">Category</th>
                  <th className="py-3 text-left">Regional Specs</th>
                  <th className="py-3 text-left"></th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="cursor-pointer">
                  <td className="py-3 text-left">772</td>
                  <td className="py-3  text-left">Mackbook</td>
                  <td className="py-3  text-left">18 June</td>
                  <td className="py-3  text-left">$1.05</td>
                  <td className="py-3  text-left">$1.05</td>
                  <td className="py-3 text-right">Edit</td>
                </tr>
                <tr className="cursor-pointer">
                  <td className="py-3  text-left">772</td>
                  <td className="py-3  text-left">Mackbook</td>
                  <td className="py-3  text-left">18 June</td>
                  <td className="py-3  text-left">$1.05</td>
                  <td className="py-3  text-left">$1.05</td>
                  <td className="py-3 text-right">Edit</td>
                </tr>
                <tr className="cursor-pointer">
                  <td className="py-3  text-left">772</td>
                  <td className="py-3  text-left">Mackbook</td>
                  <td className="py-3  text-left">18 June</td>
                  <td className="py-3  text-left">$1.05</td>
                  <td className="py-3  text-left">$1.05</td>
                  <td className="py-3 text-right">Edit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default carsData;
