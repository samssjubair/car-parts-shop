import { unstable_getServerSession } from "next-auth";
import React, { useEffect, useState } from "react";
import { authOptions } from "../api/auth/[...nextauth]";
import axios from "axios";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import { BiSearch } from "react-icons/bi";

const pages = () => {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4800/api/v1/pages").then((response) => {
      setPages(response.data.data);
    });
  }, []);

  return (
    <Sidebar>
      <div className=" grid grid-cols-1 mt-10">
        <div className="mx-5">
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
          <div className="bg-gray-200 shadow-md rounded my-6">
            <div className="flex justify-between px-4 items-center mb-4">
              <h2 className="text-2xl font-bold">Pages</h2>
              <button className="px-4 py-2 text-black border-2 mt-2 border-gray-300 rounded-3xl  hover:bg-gray-300">
                <Link href="/admin/addPages">Add Page</Link>
              </button>
            </div>
            <div>
              <table className="w-full table-auto">
                <thead>
                  <tr className=" text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Title</th>
                    <th className="py-3 px-6 text-left">URL</th>
                    <th className="py-3 px-6 text-center">Status</th>
                    <th className="py-3 px-6 text-center">Created On</th>
                    <th className="py-3 px-6 text-center">Modified On</th>
                    <th className="py-3 px-6 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {pages.map((page) => (
                    <tr
                      key={page.id}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {page.title}
                      </td>
                      <td className="py-3 px-6 text-left">
                        {window.location.host}/{page.route}
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span
                          className={`rounded-full py-1 px-3 text-xs font-bold ${
                            page.status === "Published"
                              ? "bg-green-200 text-green-800"
                              : "bg-gray-200 text-gray-800"
                          }`}
                        >
                          Active
                        </span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        {page.createdAt}
                      </td>
                      <td className="py-3 px-6 text-center">
                        {page.updatedAt}
                      </td>
                      <td className="py-3 px-6 text-center">
                        <button
                          className="text-black hover:bg-gray-300  font-bold py-2 px-4 rounded"
                        //   onClick={() => handleEdit(page.id)}
                        >
                          <Link href={`/admin/editpage/${page._id}`}>
                            Edit 
                          </Link>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default pages;

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
