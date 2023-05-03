import React, { useState } from "react";
import axios from "axios";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Sidebar from "../components/Sidebar";
import { BiSearch } from "react-icons/bi";

function AddPages() {
  const [pageRoute, setPageRoute] = useState("");
  const [pageTitle, setPageTitle] = useState("");
  const [pageContent, setPageContent] = useState("");
  const [subheader, setSubHeader] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      route: pageRoute,
      title: pageTitle,
      content: pageContent,
      subheader: subheader,
    };
    // console.log(data)
    try {
      const response = await axios.post(
        "http://localhost:4800/api/v1/pages",
        data
      );
      console.log(response.data);
      alert("Page added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Sidebar>
      <div className=" grid grid-cols-1">
        <div className="mx-5">
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
          <div
            style={{ height: "85vh" }}
            className="p-10 mt-5 bg-gray-100 h-screen px-4 rounded-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                  Add Pages
                </h1>
                <button
                  type="submit"
                  className=" border-2 mb-4 absolute right-10 text-black px-4 py-2 rounded-2xl hover:bg-gray-400"
                >
                  save
                </button>
              </div>
              <div>
                <label
                  htmlFor="page-title"
                  className="block text-sm font-medium text-black"
                >
                  Page Title
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="page-title"
                    id="page-title"
                    value={pageTitle}
                    onChange={(event) => setPageTitle(event.target.value)}
                    required
                    placeholder="New Page"
                    className="border-gray-300 px-2 border-2 focus:ring-indigo-500 py-2 text-black focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="text-black mr-20">
                  <label
                    htmlFor="page-route"
                    className="block text-sm font-medium text-black-300"
                  >
                    Url
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="page-route"
                      id="page-route"
                      value={pageRoute}
                      onChange={(event) => setPageRoute(event.target.value)}
                      required
                      placeholder="new-page"
                      className="border-gray-300 w-full px-2 border-2 focus:ring-indigo-500 py-2 text-black focus:border-indigo-500 block shadow-sm sm:text-sm  rounded-md"
                    />
                  </div>
                </div>

                <div className="text-black">
                  <label
                    htmlFor="page-route"
                    className="block text-sm font-medium text-black-300"
                  >
                    Parent
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="page-route"
                      id="page-route"
                      value={subheader}
                      placeholder="None"
                      onChange={(event) => setSubHeader(event.target.value)}
                      required
                      className="border-gray-300 px-2 border-2 focus:ring-indigo-500 py-2 text-black focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="page-content"
                  className="block text-sm font-medium text-black-300"
                >
                  Page Content
                </label>
                <div className="mt-1">
                  <textarea
                    name="page-content"
                    id="page-content"
                    value={pageContent}
                    onChange={(event) => setPageContent(event.target.value)}
                    required
                    placeholder="Space to write the content of the page"
                    rows="5"
                    // cols="100"
                    className="border-gray-300 h-96 px-2 border-2 focus:ring-indigo-500 py-2 text-black focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}

export default AddPages;

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
