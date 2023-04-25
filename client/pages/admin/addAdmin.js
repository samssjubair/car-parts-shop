import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth';
import Link from 'next/link';
import { signOut } from 'next-auth/react';


const addAdmin = () => {
    const [adminEmail, setAdminEmail] = useState("");
    const [admins, setAdmins] = useState([]);

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
        console.log(response);
        setAdminEmail("");
        alert("Admin added successfully");
        } catch (error) {
        console.error(error);
        }
    };
    
    useEffect(() => {
        axios.get("http://localhost:4800/api/v1/admin/").then((res) => {
        setAdmins(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        }
        );
    }, []);
    
    return (
        <div>
            <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
                <h1 className="text-3xl font-bold text-gray-900">
                <Link href="/admin/dashboard">Admin Dashboard</Link>
                </h1>
                <button className='text-black' onClick={_=>signOut()}>Log Out</button>
            </div>
            </header>


            <div className="flex justify-center  mt-20 bg-black">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Add Admin Email</h1>
                <div className="mb-4">
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={adminEmail}
                    placeholder="Enter email"
                    className="w-full border border-gray-400 text-gray-800 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                    onChange={(e) => setAdminEmail(e.target.value)}
                />
                </div>
                <div className="flex justify-center">
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                    Add Admin
                </button>
                </div>
            </form>
            </div>

            <div className="shadow w-1/2 mt-20 mx-auto overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full  divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Admin List
                </th>

                {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                </th> */}
                
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {
                    admins.map(admin =>
                        <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                            {admin.email}
                            </div>
                        </td>
                        {/* <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                            {partEntry.brandName}
                            </div>
                        </td> */}
                        
                    </tr>
                    )
                }
                
            </tbody>
            </table>
            </div>

        </div>
    );
};

export default addAdmin;

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
  