import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import Sidebar from "../components/Sidebar";
import { BiSearch } from "react-icons/bi";
import { RiHandHeartFill } from "react-icons/ri";
import { AiOutlineRise } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";

const dashboard = ({ Children }) => {
  // console.log(partEntries)
  return (
    <Sidebar>
      <div className="mx-auto grid lg:grid-cols-3 gap-4">
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
          </div>
        </div>
        <div className="">
          <h3>Admin</h3>
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
