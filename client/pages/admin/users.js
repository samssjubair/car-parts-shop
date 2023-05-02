import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { BiSearch } from 'react-icons/bi'
import axios from 'axios'
import Link from 'next/link'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]'

const users = () => {
    const [admins,setAdmins]= useState([])

    useEffect(() => {
        axios   
          .get("http://localhost:4800/api/v1/admin/")
          .then((res) => {
            setAdmins(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
  return (
    <Sidebar>
    <div style={{width: '85vw'}} className='px-8'>
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

      <div className='bg-gray-100  rounded-md mt-12 '>
      <div className="flex justify-between px-4 items-center mb-4">
        <h2 className="text-2xl font-bold">Users</h2>
        <button className="px-4 py-2 text-black border-2 mt-2 border-gray-300 rounded-3xl  hover:bg-gray-300">
            <Link href="/admin/addAdmin">Add Admin</Link>
        </button>
    </div>



        <table className="w-full divide-y divide-gray-200">
        <thead>
            <tr className="">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Role</th>
            <th className="px-4 py-2 text-left">Status</th>
            </tr>
        </thead>
        <tbody>
            {
                admins.map((admin)=>(
                    <tr key={admin._id} className="bg-white border-2 border-gray-200">
                    <td className="px-4 py-2">{admin.username}</td>
                    <td className="px-4 py-2">{admin.email}</td>
                    <td className="px-4 py-2">{admin.role}</td>
                    <td className="px-4 py-2">
                        Active
                    </td>
                    </tr>
                ))
            }
            
        </tbody>
        </table>

      </div>
      </div>
    </Sidebar>
    
  )
}

export default users

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
  