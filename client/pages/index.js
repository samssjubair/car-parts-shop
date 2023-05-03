import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import CarFromDocuments from "./components/CarFormDocuments";
import HomeSlider from "./components/HomeSlider";
import Image from "next/image";
import serviceIcon1 from "../pages/asset/service-icon-1.png";
import serviceIcon2 from "../pages/asset/service-icon-2.png";
import serviceIcon3 from "../pages/asset/service-icon-3.png";
import serviceIcon4 from "../pages/asset/service-icon-4.png";

// import { authOptions } from './api/auth/[...nextauth]'
// import { unstable_getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-white">
      <div>
        <Navigation />
      </div>
      <div>
        <HomeSlider />
      </div>
      <div className="flex text-black justify-center">
        <div className=" w-11/12 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-9 pb-4">
            <div className="flex ">
              <div>
                <Image src={serviceIcon1} alt="" className="mr-4" />
              </div>
              <div>
                <h4 className="text-md font-bold">Original Products</h4>
                <p className="text-slate-500 text-sm">
                  Only parts from trusted brands
                </p>
              </div>
            </div>
            <div className="flex">
              <div>
                <Image src={serviceIcon2} alt="" className="mr-4" />
              </div>
              <div>
                <h4 className="text-md font-bold">Fast Delivery</h4>
                <p className="text-slate-500 text-sm">
                  Free shipping over AED299
                </p>
              </div>
            </div>
            <div className="flex">
              <div>
                <Image src={serviceIcon3} alt="" className="mr-4" />
              </div>
              <div>
                <h4 className="text-md font-bold">3 Days Return</h4>
                <p className="text-slate-500 text-sm">3 days open purchase</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <Image src={serviceIcon4} alt="" className="mr-4" />
              </div>
              <div>
                <h4 className="text-md font-bold">Dedicated Support</h4>
                <p className="text-slate-500 text-sm">Available support 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr />
      </div>
      <div>
        <CarFromDocuments />
      </div>
      <div className=" bg-slate-200 flex justify-center mt-16">
        <div className=" w-11/12">
          <div className="pt-16 pb-7">
            <div className=" ">
              <h1 className="text-lg text-black font-bold">
                CarPartz – #1 Online Marketplace for car spares OEM &
                Aftermarket
              </h1>
              <p className="text-slate-700 text-sm mt-2 text-justify">
                Using your own car gives you an independence from external
                circumstances and the opportunity to plan your day exactly how
                you want. No rush to miss urban transport and even be late for
                work, because of outside factors. With an own car, you feel
                free, have the ability to address business and pleasure travel,
                as you want. All these reasons have a huge influence on the
                number of vehicles, on the road. Among them are passenger cars,
                lorries, buses, etc. Bringing this into focus: in 1986 there
                were only 500 million cars in the whole world. And in 2010 the
                number increased to 1 billion vehicles. Researchers with the
                International Energy Agency suggest that by the year 2035 nearly
                25 percent of the world population will own a car. According to
                research, the current number is going to increase to 1,7
                billion. That’s why auto car spare parts are in demand among car
                owners. brator.com is a car parts marketplace in US, which
                pursues the aim to organise the replacement parts market and
                make the shopping process easier and more convenient.
              </p>
            </div>

            <div className="mt-4">
              <h1 className="text-lg text-slate-800 font-bold">
                The offer from CarPartz
              </h1>
              <p className="text-slate-700 text-sm mt-2 text-justify">
                Our project was established in 2015. Over this time we have been
                working on our goal – to help customers and suppliers in auto
                car spare parts sales and communication. This advertising
                platform was created to make online shopping easier for both
                automobile owners and parts dealers. Customers get an
                opportunity to buy car parts online, which are branded and
                original.
              </p>
              <p className="text-slate-700 text-sm mt-2 text-justify">
                Nothing can dramatically affect a vehicle’s appearance and
                performance as much as a set of customwheels and performance
                tires. Most cars and trucks are available with just a few
                optional wheel choices, so if you drive a popular model you
                probably see the mirror image of your ride everywhere you go.
                Customwheels will give your car or truck a unique, distinctive
                look that will make it stand out from the rolling masses,
                especially if you opt for larger diameter rims. Factory tires
                are designed for the “average” driver, but that’s not you, and
                if you want more traction and better looks, on the street or in
                the dirt, we can set you up with the rubber that will do the job
                and go perfectly with yourwheels.
              </p>
              <p className="text-slate-700 text-sm mt-2 text-justify">
                If you’re ready to transform your ride, you won’t find a better
                selection of customwheels anywhere. We have everything from
                one-piece castwheels to high-tech multi-piecewheels in styles to
                suit every taste, in sizes for every application, and at prices
                for every wallet
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
