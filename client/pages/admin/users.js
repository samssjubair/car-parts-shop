import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { BiSearch } from "react-icons/bi";
import axios from "axios";
import Link from "next/link";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

const users = () => {
  const [admins, setAdmins] = useState([]);

  const handleDelete=(id)=>{
    axios.delete(`${process.env.api}/admin/deleteAdmin/${id}`)
    .then((res)=>{
    //   console.log(res);
      alert("Admin deleted successfully");
      window.location.reload();
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  useEffect(() => {
    axios
      .get(`${process.env.api}/admin/`)
      .then((res) => {
        setAdmins(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Sidebar>
      <div style={{ width: "85vw" }} className="px-8">
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

        <div className="bg-gray-200 shadow-md rounded my-6">
  <div className="flex justify-between px-4 items-center mb-4">
    <h2 className="text-2xl font-bold">Users</h2>
    <button className="px-4 py-2 text-black border-2 mt-2 border-gray-300 rounded-3xl  hover:bg-gray-300">
      <Link href="/admin/addAdmin">Add Admin</Link>
    </button>
  </div>
  <div>
    <table className="w-full table-auto">
      <thead>
        <tr className="text-gray-600 uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-left">Name</th>
          <th className="py-3 px-6 text-left">Email</th>
          <th className="py-3 px-6 text-left">Role</th>
          <th className="py-3 px-6 text-center">Status</th>
          <th className="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light">
        {admins.map((admin) => (
          <tr
            key={admin._id}
            className="border-b border-gray-200 hover:bg-gray-100"
          >
            <td className="py-3 px-6 text-left whitespace-nowrap">
              {admin.username}
            </td>
            <td className="py-3 px-6 text-left">{admin.email}</td>
            <td className="py-3 px-6 text-left">{admin.role}</td>
            <td className="py-3 px-6 text-center">
              <span className="rounded-full py-1 px-3 text-xs font-bold bg-green-200 text-green-800">
                Active
              </span>
            </td>
            <td className="py-3 px-6 text-center">
              <div className="flex justify-center items-center space-x-2">
                <button className="text-black hover:bg-gray-300 font-bold py-2 px-4 rounded">
                  <Link href={`/admin/editUser/${admin._id}`}>Edit</Link>
                </button>
                <button
                  onClick={() => handleDelete(admin._id)}
                  className="text-black hover:bg-gray-300 font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

      </div>
    </Sidebar>
  );
};

export default users;

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
