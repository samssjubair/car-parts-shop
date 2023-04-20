import Image from "next/image"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from "../asset/slider-1.jpg"
import slider2 from "../asset/slider-2.jpg"
import slider3 from "../asset/slider-3.jpg"


const HomeSlider = () => {
  return (
    <Carousel>
                <div>
                    <Image src={slider1} alt="" className="slider-img"/>
                </div>
                <div>
                    <Image src={slider2} alt="" className="slider-img"/>
                </div>
                <div>
                    <Image src={slider3} alt="" className="slider-img"/>
                </div>
    </Carousel>
  )
}

export default HomeSlider
