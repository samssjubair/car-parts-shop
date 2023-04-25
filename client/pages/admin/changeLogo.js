import React, { useState } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth';
import Link from 'next/link';

function LogoUpload() {
  const [logoFile, setLogoFile] = useState(null);

  const handleLogoUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('logo', logoFile);

    try {
      const response = await axios.post('http://localhost:4800/api/v1/logo/', formData);
        // console.log(response.data);
        alert("Logo uploaded successfully");
        setLogoFile(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
            <h1 class="text-3xl font-bold text-gray-900">
            {/* <h1 className="text-3xl font-bold text-gray-900"> */}
                <Link href="/admin/dashboard">Admin Dashboard</Link>
            {/* </h1> */}
            </h1>
            <button className='text-black' onClick={_=>signOut()}>Log Out</button>
        </div>
        </header>
        {/* <Navigation/> */}
        <form onSubmit={handleLogoUpload} className="flex py-20 items-center justify-center flex-col">
        <label htmlFor="logo-upload" className="mb-2 text-3xl font-medium">Choose a logo to upload:</label>
        <div className="flex items-center justify-center w-full">
            <label htmlFor="logo-upload" className="flex flex-col items-center px-4 py-2 bg-white border-2 border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm2 2v7h6V7H7z" clipRule="evenodd" />
            </svg>
            <span className="mt-2 text-black text-base leading-normal">Select a file</span>
            <input type="file" id="logo-upload" className="hidden" onChange={(e) => setLogoFile(e.target.files[0])} />
            </label>
        </div>
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Upload Logo</button>
        </form>

        {/* <Footer/> */}
    </div>
  );
}

export default LogoUpload;

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
  
