import axios from "axios";

import React, { useEffect, useState } from "react";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Sidebar from "../components/Sidebar";
import { BiSearch } from "react-icons/bi";

const addAdmin = () => {
  const [adminEmail, setAdminEmail] = useState("");
    const [adminName, setAdminName] = useState("");
    const [adminPassword, setAdminPassword] = useState("");
    const [adminRole, setAdminRole] = useState("");
    const [adminStatus, setAdminStatus] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post(
            "http://localhost:4800/api/v1/admin/",
            JSON.stringify({ email: adminEmail }),
            {
            headers: {
                "Content-Type": "application/json",
            },
            }
        );
        // console.log(response);
        setAdminEmail("");
        alert("Admin added successfully");
        } catch (error) {
        console.error(error);
        }
   

  };



  return (
    <Sidebar>
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
      <div className="flex p-10">
      <form autoComplete="off"  onSubmit={handleSubmit} className="bg-white p-8 rounded-lg">
        <div className="flex justify-between">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Add Admin
            </h1>
            <button
                type="submit"
                className=" border-2 mb-4 absolute right-10 text-black px-4 py-2 rounded-2xl hover:bg-gray-400"
                >
                
                Add User
            </button>
        </div>
        <div className="mb-4  flex">
            <label htmlFor="name" className=" w-32 text-gray-500 mt-2 font-bold mb-2">
            Name
            </label>
            <input
            type="text"
            id="name"
            name="name"
            value={adminName}
            placeholder="Enter name"
            className="w-full border-b-2 border-gray-400  text-gray-800 p-2  focus:outline-none focus:border-blue-500"
            required
            onChange={(e) => setAdminName(e.target.value)}
            />
        </div>
        <div className="mb-4 flex">
            <label htmlFor="email" className="block w-32 text-gray-500 font-bold mb-2">
            Email
            </label>
            <input
            type="email"
            id="email"
            name="email"
            value={adminEmail}
            placeholder="Enter email"
            className="w-full bg-white border-gray-400 text-gray-800 p-2 border-b-2 focus:outline-none focus:border-blue-500"
            required
            onChange={(e) => setAdminEmail(e.target.value)}
            />
        </div>
        <div className="mb-4 flex">
            <label htmlFor="password" className="block w-32 text-gray-500 font-bold mb-2">
            Password
            </label>
            <input
            type="password"
            id="password"
            name="password"
            value={adminPassword}
            
            placeholder="Enter password"
            className="w-full  border-gray-400  text-gray-800 p-2 border-b-2 focus:outline-none focus:border-blue-500 bg-white"
            required
            onChange={(e) => setAdminPassword(e.target.value)}
            />
        </div>
        <div className="mb-4 flex">
            <label htmlFor="role" className="block w-32 text-gray-500 font-bold mb-2">
            Role
            </label>
            <select
            id="role"
            name="role"
            value={adminRole}
            className="w-full  border-gray-400  text-gray-800 p-2 border-b-2 focus:outline-none focus:border-blue-500"
            required
            onChange={(e) => setAdminRole(e.target.value)}
            >
            <option value="">Select role</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="supervisor">Supervisor</option>
            </select>
        </div>
        <div className="mb-4 flex">
            <label htmlFor="status" className="block w-32 text-gray-500 font-bold mb-2">
            Status
            </label>
            <select
            id="status"
            name="status"
            value={adminStatus}
            className="w-full  border-gray-400  text-gray-800 p-2 border-b-2 focus:outline-none focus:border-blue-500"
            required
            onChange={(e) => setAdminStatus(e.target.value)}
            >
            <option value="">Select status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            </select>
        </div>
        {/* <div className="flex justify-center"> */}
            

        {/* </div> */}
        </form>
      </div>

      
    </Sidebar>
  );
};

export default addAdmin;

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
