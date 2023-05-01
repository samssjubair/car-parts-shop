
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { GrTableAdd } from "react-icons/gr";
import { TiMessages } from "react-icons/ti";
import { FaUsers } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { useRouter } from "next/router";

const Sidebar = ({children}) => {
  const router = useRouter();
  return (
    <div style={{overflowX: 'hidden'}} className="flex bg-white text-black">
      <div className="h-screen w-72 max-w-7xl px-6">
        <div className="">
          <h3 className="pt-6 text-2xl text-slate-500">CarPartz</h3>
        </div>
        <div className="mt-32">
          <div className={`${router.pathname === "/admin/dashboard" ? 'bg-gray-100': ''} flex items-center hover:bg-gray-100 w-70 h-10 pl-5 pr-3 rounded-lg`} >
            <MdDashboard className=" mr-1 w-5 h-5 " />
            <Link href="/admin/dashboard" className= "text-slate-500" >Dashboard</Link>
          </div>
          <div className={`${router.pathname === "/admin/leads" ? 'bg-gray-100': ''} flex items-center hover:bg-gray-100 w-70 h-10 pl-5 pr-3 rounded-lg mt-3`}>
            <GrTableAdd className=" mr-1 w-6" />
            <Link href="/admin/leads" className="text-slate-500">Leads</Link>
          </div>
          <div className={`${router.pathname === "/admin/carsData" ? 'bg-gray-100': ''} flex items-center hover:bg-gray-100 w-70 h-10 pl-5 pr-3 rounded-lg mt-3`}>
            <TiMessages className=" mr-1 w-6" />
            <Link href="/admin/carsData" className="text-slate-500">Cars Data</Link>
          </div>
          <div className={`${router.pathname === "/admin/addAdmin" ? 'bg-gray-100': ''} flex items-center hover:bg-gray-100 w-70 h-10 pl-5 pr-3 rounded-lg mt-3`}>
            <FaUsers className=" mr-1 w-6" />
            <Link href="/admin/addAdmin" className="text-slate-500">User</Link>
          </div>
          <div className={`${router.pathname === "/admin/addPages" ? 'bg-gray-100': ''} flex items-center hover:bg-gray-100 w-70 h-10 pl-5 pr-3 rounded-lg mt-3`}>
            <FaUsers className=" mr-1 w-6 stroke-slate-500" />
            <Link href="/admin/addPages" className="text-slate-500">Pages</Link>
          </div>
          <div className={`${router.pathname === "/admin/settings" ? 'bg-gray-100': ''} flex items-center hover:bg-gray-100 w-70 h-10 pl-5 pr-3 rounded-lg mt-3`}>
            <IoMdSettings className=" mr-1 w-6" />
            <Link href="/admin/settings" className="text-slate-500">
              Settings
              </Link>
          </div>
        </div>
        <div className="dashboard-sidebar-menu  h-10 pl-5 pr-3 rounded-lg">
          <button className="flex items-center  text-slate-500" onClick={(_) => signOut()}>
            <AiOutlineLogout className=" mr-1 w-6" />
            Log Out
          </button>
        </div>
      </div>
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}

export default Sidebar
