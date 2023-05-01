import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import Sidebar from "../components/Sidebar";
import { BiSearch } from "react-icons/bi";
import { RiHandHeartFill } from "react-icons/ri";
import { AiOutlineRise } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import Image from "next/image";

const dashboard = ({ Children }) => {
  // console.log(partEntries)
  return (
    <Sidebar >
      <div className="mx-auto grid lg:grid-cols-3 gap-4" >
        <div className="col-span-2">
          {/* Search bar */}
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
          {/* Search bar end */}
          <div className="bg-gray-200 mt-10 px-5 py-5 rounded-lg">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex bg-gray-100 rounded-lg justify-between px-5 py-5">
                <div>
                  <p>Total Search</p>
                  <span>1234</span>
                  <p>+ 45% this week</p>
                </div>
                <div>
                  <RiHandHeartFill className="border-slate-200 rounded-3xl bg-gray-200 py-1.5 px-1.5 w-10 h-10" />
                </div>
              </div>
              <div className="flex bg-gray-100 rounded-lg justify-between px-5 py-5">
                <div>
                  <p>Total Leads</p>
                  <span>120</span>
                  <p>+ 15% this week</p>
                </div>
                <div>
                  <AiOutlineRise className="border-slate-200 rounded-3xl bg-gray-200 py-1.5 px-1.5 w-10 h-10" />
                </div>
              </div>
              <div className="flex bg-gray-100 rounded-lg justify-between px-5 py-5">
                <div>
                  <p>Total Visitors</p>
                  <span>2,20</span>
                  <p>+ 20% this week</p>
                </div>
                <div>
                  <FaUsers className="border-slate-200 rounded-3xl bg-gray-200 py-1.5 px-1.5 w-10 h-10" />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div>
                <h3 className="text-slate-950 text-lg">Recent</h3>
              </div>
              <div className="">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="py-3 text-left text-slate-500">ID</th>
                      <th className="py-3 text-left text-slate-500">Name</th>
                      <th className="py-3 text-left text-slate-500" >Date</th>
                      <th className="py-3 text-left text-slate-500">Amount</th>
                      <th className="py-3 text-left"></th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className="cursor-pointer">
                      <td className="py-3 text-left">772</td>
                      <td className="py-3  text-left">Toyota</td>
                      <td className="py-3  text-left">18 June</td>
                      <td className="py-3  text-left">$1.05</td>
                      <td className="py-3 text-right">
                        <BiDotsVerticalRounded />
                      </td>
                    </tr>
                    <tr className="cursor-pointer">
                      <td className="py-3  text-left">772</td>
                      <td className="py-3  text-left">Toyota</td>
                      <td className="py-3  text-left">18 June</td>
                      <td className="py-3  text-left">$1.05</td>
                      <td className="py-3 text-right">
                        <BiDotsVerticalRounded />
                      </td>
                    </tr>
                    <tr className="cursor-pointer">
                      <td className="py-3  text-left">772</td>
                      <td className="py-3  text-left">Toyota</td>
                      <td className="py-3  text-left">18 June</td>
                      <td className="py-3  text-left">$1.05</td>
                      <td className="py-3 text-right">
                        <BiDotsVerticalRounded />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="pe-4">
          <div className="mt-6 bg-gray-100 rounded-lg">
            <div className=" px-5 py-10">
              <div className="flex place-items-center justify-end">
                <h1 className="mr-2">Admin</h1>
                <div className="bg-gray-400 h-8 w-8 rounded-full">

                </div>

                {/* <Image
                  src=""
                  alt=""
                  className="border-slate-200 rounded-full w-10 h-10 bg-gray-400 py-1.5 px-1.5 mr-1.5"
                /> */}

                <BiChevronDown />
              </div>

              <div  className="mt-10">
                <div className="flex justify-between mb-5">
                  <div>
                    <h2>Top Brands</h2>
                  </div>
                  <div>
                    <BiDotsVerticalRounded />
                  </div>
                </div>
                <div>
                  <div className="flex place-items-center mb-3.5">
                    <span className="border-slate-200 rounded-full w-3 h-3 bg-gray-400 mr-1.5"></span>
                    <p className="">BMW</p>
                  </div>
                  <div className="flex place-items-center mb-3.5">
                    <span className="border-slate-200 rounded-full w-3 h-3 bg-gray-400 mr-1.5"></span>
                    <p className="">Toyota</p>
                  </div>
                  <div className="flex place-items-center mb-3.5">
                    <span className="border-slate-200 rounded-full w-3 h-3 bg-gray-400 mr-1.5"></span>
                    <p className="">Honda</p>
                  </div>
                  <div className="flex place-items-center mb-3.5">
                    <span className="border-slate-200 rounded-full w-3 h-3 bg-gray-400 mr-1.5"></span>
                    <p className="">Mercedes</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div className="flex justify-between mb-5">
                  <div>
                    <h2>Top Location</h2>
                  </div>
                  <div>
                    <BiDotsVerticalRounded />
                  </div>
                </div>
                <div>
                  <div className="flex place-items-center mb-3.5">
                    <span className="border-slate-200 rounded-full w-3 h-3 bg-gray-400 mr-1.5"></span>
                    <p className="">Dubai</p>
                  </div>
                  <div className="flex place-items-center mb-3.5">
                    <span className="border-slate-200 rounded-full w-3 h-3 bg-gray-400 mr-1.5"></span>
                    <p className="">Abu Dubai</p>
                  </div>
                  <div className="flex place-items-center mb-3.5">
                    <span className="border-slate-200 rounded-full w-3 h-3 bg-gray-400 mr-1.5"></span>
                    <p className="">Ajman</p>
                  </div>
                  <div className="flex place-items-center mb-3.5">
                    <span className="border-slate-200 rounded-full w-3 h-3 bg-gray-400 mr-1.5"></span>
                    <p className="">Sharjah</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default dashboard;

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
