import React, { useState } from "react";
import axios from "axios";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import Link from "next/link";
import { signOut } from "next-auth/react";

function AddPages() {
  const [pageRoute, setPageRoute] = useState("");
  const [pageTitle, setPageTitle] = useState("");
  const [pageContent, setPageContent] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      route: pageRoute,
      title: pageTitle,
      content: pageContent,
    };
    console.log(data)
    try {
      const response = await axios.post(
        "http://localhost:4800/api/v1/pages",
        data
      );
    //   console.log(response.data);
    alert("Page added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div><header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
        <h1 class="text-3xl font-bold text-gray-900">
        {/* <h1 className="text-3xl font-bold text-gray-900"> */}
            <Link href="/admin/dashboard">Admin Dashboard</Link>
        {/* </h1> */}
        </h1>
        <button className='text-black' onClick={_=>signOut()}>Log Out</button>
    </div>
    </header>
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl mt-20 font-bold mb-4">Add New Page</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="page-route" className="block text-sm font-medium text-gray-300">
            Page Route
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="page-route"
              id="page-route"
              value={pageRoute}
              onChange={(event) => setPageRoute(event.target.value)}
              required
              className="focus:ring-indigo-500 py-2 text-black focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <label htmlFor="page-title" className="block text-sm font-medium text-gray-300">
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
              className="focus:ring-indigo-500 py-2 text-black focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <label htmlFor="page-content" className="block text-sm font-medium text-gray-300">
            Page Content
          </label>
          <div className="mt-1">
            <textarea
              name="page-content"
              id="page-content"
              value={pageContent}
              onChange={(event) => setPageContent(event.target.value)}
              required
              rows="5"
              className="focus:ring-indigo-500 py-2 text-black focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Page
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default AddPages;

export async function getServerSideProps(context) {
    const session = await unstable_getServerSession(context.req, context.res, authOptions)
    if(!session) {
      return {
        redirect: {
          destination: "/login",
          permanent: false
        }
      }
    }
  
    return {
      props: {
  
      }
    }
  }
  
