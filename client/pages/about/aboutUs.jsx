import Image from "next/image"
import about1 from "../asset/about-us-1.jpeg"
import about2 from "../asset/about-us-2.jpeg"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"


const aboutUs = () => {
  return (
    <div className="mx-auto max-w-7xl ">
      <div>
        <Navigation/>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-20 my-14">
            <div className="my-4">
              <Image src={about1} alt=""/>
            </div>
            <div className="my-4">
              <h1 className="text-2xl text-black mb-4"> WELCOME TO THE <span className="text-amber-400">MOTORS</span></h1>
              <p>Before we get ahead of ourselves, we want to welcome you to Loeber Motors. While nothing can replace thing on-the-lot experience.</p>
              <p>We appreciate you taking the time today to visit our web site. Our goal is to give you an interactive tour of our new and used inventory, as well as allow you to conveniently get a quote, schedule a service appointment, or apply for financing. The search for a luxury car is filled with high expectations. Undoubtedly, that has a lot to do with the vehicles you are considering, but at Motors, we think you should also have pretty high expectations for your dealership.</p>
              <p> — MIKEY DIOKLES, President of Motors</p>
            </div>
            <div>
              <h1 className="text-2xl text-black">CORE VALUES</h1>
              <hr className="border-current my-2.5"/>
              <p>We go through extensive factory training so that we may provide you with the knowledge you need to make an educated decision in choosing the vehicle that is right for your lifestyle.</p>
              <p>- Stress-free finance department.</p>
              <p>- Robust selection of popular vehicles.</p>
              <p>- 350 offers on site, trusted by a community.</p>
              <p>- Maintain your car to stay safe on the road</p>
              <p>- We know how to handle a wide range of car services.</p>
            </div>
            <div>
            <Image src={about2} alt=""/>
            </div>
        </div>

        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default aboutUs
