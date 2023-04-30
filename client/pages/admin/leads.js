import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { BiSearch } from "react-icons/bi";

const leads = () => {
  const [partEntries, setPartEntries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4800/api/v1/entries?sort=-createdAt")
      .then((res) => res.json())
      .then((data) => setPartEntries(data.data));
  }, []);
  return (
    <Sidebar className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
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
      <div className="shadow overflow-hidden border-b border-gray-200 overflow-x-auto sm:rounded-lg mt-10 bg-gray-100 h-screen ">
        <div className=" flex pt-6 pl-4 justify-between">
          <div>
            <h1 className="text-xl mb-4">Leads</h1>
          </div>
          <div>
            <button className="leads-btn">
              Eport
            </button>
          </div>
        </div>
        <table className="w-full divide-y divide-gray-200">
          <thead className="">
            <tr>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>

              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Brand
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Model
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Year
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Parts Required
              </th>

              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Condition
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>

              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Phone
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {partEntries.map((partEntry) => (
              <tr>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {new Date(partEntry.createdAt).toLocaleString()}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {partEntry.brandName}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {partEntry.modelName}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {partEntry.year}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {partEntry.type}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {partEntry.requiredParts}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {partEntry.quantity}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {partEntry.name}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {partEntry.email}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {partEntry.deliveryAddress}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {partEntry.phone}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Sidebar>
  );
};

export default leads;
