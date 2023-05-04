// import { Alert, Button, Grid, TextField } from '@mui/material'
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Login() {
  const router = useRouter();
  const [authState, setAuthState] = useState({
    email: "",
    password: "",
  });
  const [pageState, setPageState] = useState({
    error: "",
    processing: false,
  });

  const handleFieldChange = (e) => {
    setAuthState((old) => ({ ...old, [e.target.id]: e.target.value }));
  };

  const simplifyError = (error) => {
    const errorMap = {
      CredentialsSignin: "Invalid email or password",
    };
    return errorMap[error] ?? "Unknown error occurred";
  };

  const handleAuth = async () => {
    setPageState((old) => ({ ...old, processing: true, error: "" }));
    signIn("credentials", {
      ...authState,
      redirect: false,
    })
      .then((response) => {
        // console.log(response);
        if (response.ok) {
          // Authenticate user
          router.push("/admin/dashboard");
        } else {
          setPageState((old) => ({
            ...old,
            processing: false,
            error: response.error,
          }));
        }
      })
      .catch((error) => {
        // console.log(error);
        setPageState((old) => ({
          ...old,
          processing: false,
          error: error.message ?? "Something went wrong!",
        }));
      });
  };



    return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">CarPartz</h1>
          {/* <button className='text-black' onClick={_=>signOut()}>Log Out</button> */}
        </div>
        
        </header>
        <div className="flex flex-col h-screen justify-center items-center text-black    bg-white">
            <h1 className="text-4xl font-bold mb-8">Admin Login</h1>
            <div className="bg-white shadow-lg rounded-lg w-1/3 p-8">
                {
                    pageState.error !== '' && <span className='text-red-800'>{(simplifyError(pageState.error))}</span>
                }
                <input className="w-full px-4 py-2 border rounded-lg text-black mb-4" onChange={handleFieldChange} value={authState.email} placeholder="Email" id='email' type='email' />
                <input className="w-full px-4 py-2 border rounded-lg text-black mb-4" onChange={handleFieldChange} value={authState.password} placeholder="Password" type='password' id='password' />
                <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg disabled:opacity-50" disabled={pageState.processing} onClick={handleAuth}>Login</button>
            </div>
        </div>
      </div>
    // </div>
  );
}
