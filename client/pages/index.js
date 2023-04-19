import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import CarFromDocuments from "./components/CarFormDocuments";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div>
        <Navigation />
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
