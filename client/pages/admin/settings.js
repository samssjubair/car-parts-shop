import React, { useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Sidebar from "../components/Sidebar";
import { BiSearch } from "react-icons/bi";

function settings() {
  const [logoFile, setLogoFile] = useState(null);

  const handleLogoUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("logo", logoFile);

    try {
      const response = await axios.post(
        "http://localhost:4800/api/v1/logo/",
        formData
      );
      // console.log(response.data);
      alert("Logo uploaded successfully");
      setLogoFile(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Sidebar>
      <div className=" grid grid-cols-1">
        <div className="mx-5">
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
          <div
            style={{ height: "85vh" }}
            className="bg-gray-100 rounded-md mt-10 px-4 py-10"
          >
            <div className="">
              <div className="flex justify-between">
                <div>
                  <h1>Settings</h1>
                </div>
                <div>
                  <button className="leads-btn hover:bg-slate-300">save</button>
                </div>
              </div>
              <div>
                <label className="ml-4">Site Title</label>
                <input
                  type="text"
                  placeholder="CarPartz"
                  className="pr-3 pl-5 w-full rounded-md text-sm py-2"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10">
                <div className="">
                  <form onSubmit={handleLogoUpload} className="">
                    <label
                      htmlFor="logo-upload"
                      className="mb-2 text-xl font-medium"
                    >
                      logo upload
                    </label>
                    <div className="flex">
                      <label
                        htmlFor="logo-upload"
                        className="flex flex-col items-center px-4 py-2 bg-white border-2 border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm2 2v7h6V7H7z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="mt-2 text-black text-base leading-normal">
                          Select a file
                        </span>
                        <input
                          type="file"
                          id="logo-upload"
                          className="hidden"
                          onChange={(e) => setLogoFile(e.target.files[0])}
                        />
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      Upload Logo
                    </button>
                  </form>
                </div>
                <div className="">
                  <form onSubmit={handleLogoUpload} className="">
                    <label
                      htmlFor="logo-upload"
                      className="mb-4 text-xl font-medium"
                    >
                      Favicon logo upload
                    </label>
                    <div className="flex">
                      <label
                        htmlFor="logo-upload"
                        className="flex flex-col items-center px-4 py-2 bg-white border-2 border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm2 2v7h6V7H7z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="mt-2 text-black text-base leading-normal">
                          Select a file
                        </span>
                        <input
                          type="file"
                          id="logo-upload"
                          className="hidden"
                          onChange={(e) => setLogoFile(e.target.files[0])}
                        />
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      Upload Logo
                    </button>
                  </form>
                </div>
              </div>
              <div className="mt-7">
                <label className="ml-4">SEO Keywords</label>
                <input
                  type="text"
                  placeholder="SEO Keywords"
                  className="pr-3 pl-5 w-full rounded-md py-2 bg-white text-sm"
                />
              </div>
              <div className="mt-7">
                <label className="ml-4">SEO Description</label>
                <textarea
                  type="text"
                  placeholder="Here is the text space for seo description for the site where admin can write free text"
                  className="pr-3 pl-5 h-64 w-full rounded-md text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}

export default settings;

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
