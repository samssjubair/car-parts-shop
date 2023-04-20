import { useRouter } from 'next/router'
import React from 'react'

const dashboard = () => {
  const router = useRouter();

  const logOut = () => {
    Cookies.remove("login");
    router.push("user/login");
  }
  return (
    <div>
      <h3>Dashboard</h3>

      <button
        type= "submit"
        onClick= {() => logOut()}
      >LogOut</button>
    </div>
  )
}

export default dashboard
