
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { GrTableAdd } from "react-icons/gr";
import { TiMessages } from "react-icons/ti";
import { FaUsers } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";

const Sidebar = ({children}) => {
  return (
    <div className="flex">
      <div className="h-screen bg-slate-400 w-44 max-w-7xl px-6">
        <div className="">
          <h3 className="">CarPartz</h3>
        </div>
        <div className="mt-32">
          <div className="flex items-center ">
            <MdDashboard className=" mr-1 w-6" />
            <Link href="/admin/dashboard">Dashboard</Link>
          </div>
          <div className="flex items-center mt-8">
            <GrTableAdd className=" mr-1 w-6" />
            <Link href="/admin/leads">Leads</Link>
          </div>
          <div className="flex items-center mt-8">
            <TiMessages className=" mr-1 w-6" />
            <Link href="/admin/carsData">Cars Data</Link>
          </div>
          <div className="flex items-center mt-8">
            <FaUsers className=" mr-1 w-6" />
            <Link href="/admin/addAdmin">User</Link>
          </div>
          <div className="flex items-center mt-8">
            <FaUsers className=" mr-1 w-6" />
            <Link href="/admin/addPages">Pages</Link>
          </div>
          <div className="flex items-center mt-8">
            <FaUsers className=" mr-1 w-6" />
            <Link href="/admin/changeLogo">ChangeLogo</Link>
          </div>
          <div className="flex items-center mt-8">
            <IoMdSettings className=" mr-1 w-6" />
            <Link href="/admin/settings">Settings</Link>
          </div>
        </div>
        <div className="dashboard-sidebar-menu">
          <button className="flex items-center" onClick={(_) => signOut()}>
            <AiOutlineLogout className=" mr-1 w-6" />
            Log Out
          </button>
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Sidebar
