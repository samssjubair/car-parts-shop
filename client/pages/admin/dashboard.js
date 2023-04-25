import { unstable_getServerSession } from 'next-auth';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { authOptions } from '../../pages/api/auth/[...nextauth]';

const dashboard = () => {
    const [partEntries, setPartEntries] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4800/api/v1/entries?sort=-createdAt')
        .then(res => res.json())
        .then(data => setPartEntries(data.data));
    },[]);
    // console.log(partEntries)
    return (
        <div>
          
        <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
            <h1 className="text-3xl font-bold text-gray-900">
            Admin Dashboard
            </h1>
            <button className='text-black' onClick={_=>signOut()}>Log Out</button>
        </div>
        
        </header>


        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
            <Link href="/admin/addAdmin">
            Add Admin
            </Link>
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
            
            <Link href="/admin/changeLogo">
            Change Logo
            </Link>
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            
            <Link href="/admin/addPages">
            Add Page
            </Link>
            </button>
        </div>
        <div className="shadow overflow-hidden border-b border-gray-200 overflow-x-auto sm:rounded-lg">
            <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Request Time
                </th>

                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Brand Name
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Model Name
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Year
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Required Parts
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Required Parts
                </th>

                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Delivery Address
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {
                    partEntries.map(partEntry =>
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
                           { partEntry.modelName}
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
                    )
                }
                
            </tbody>
            </table>
            </div>
            </div>
        </div>
    );
};

export default dashboard;

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
  