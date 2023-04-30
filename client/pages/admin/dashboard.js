import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import Sidebar from "../components/Sidebar";

const dashboard = ({ Children }) => {
  // console.log(partEntries)
  return (
    <Sidebar>
      <div className="mx-auto grid lg:grid-cols-3 gap-4">
        <div className="col-span-2 bg-red-400">
          <h3>Search bar</h3>
        </div>
        <div className="bg-red-400">
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
