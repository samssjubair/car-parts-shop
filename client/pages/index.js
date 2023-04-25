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
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4 text-gray-300">Find the Right Car Parts From Carpartz</h1>
        <p class="text-lg mb-8 text-gray-200">Shop our wide selection of high-quality car parts and accessories at affordable prices.</p>
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

