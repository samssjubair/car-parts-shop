import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import CarFromDocuments from "./components/CarFormDocuments";
import HomeSlider from "./components/HomeSlider";
// import { authOptions } from './api/auth/[...nextauth]'
// import { unstable_getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>
        <HomeSlider/>
      </div>
      <div>
        <CarFromDocuments />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

