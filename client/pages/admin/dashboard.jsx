import { useRouter } from 'next/router';
import React from 'react'


const axios = require("axios");

const dashboard = () => {

    const router = useRouter();


    const handleLogOut = async () => {
        const admin = await axios.get("/api/auth/logout");

        console.log(admin);

    };

  return (
    <div>
      <h3>Admin Dashboard</h3>

      <button onClick={() => handleLogOut()}>Log Out</button>
    </div>
  )
}

export default dashboard
