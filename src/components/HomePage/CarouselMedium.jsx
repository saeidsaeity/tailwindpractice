import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";
function CarousMedium() {
    const [emblaRef, emblaApi] = useEmblaCarousel();
    const items = [
        {
          imgSrc:
            "https://www.mrporter.com/variants/images/1647597356892903/in/w300_a3-4_ccrop.jpg",
          text: "BOTTEGA VENETA",
        },
        {
          imgSrc:
            "https://www.mrporter.com/variants/images/1647597356873413/in/w300_a3-4_ccrop.jpg",
          text: "BOTTEGA VENETA",
        },
        {
          imgSrc:
            "https://www.mrporter.com/variants/images/1647597356892911/in/w300_a3-4_ccrop.jpg",
          text: "BOTTEGA VENETA",
        },
        {
          imgSrc:
            "https://www.mrporter.com/variants/images/1647597356892895/in/w300_a3-4_ccrop.jpg",
          text: "BOTTEGA VENETA",
        },
      ];
    return(
        <div className="overflow-hidden mr-10 hidden md:flex " ref={emblaRef}>

        <div className="my-10  hidden md:flex">
          <div className="flex">
          <div className=" hidden md:block mx-auto md:ml-7 lg:ml-10 md:mr-0 w-[50vw] lg:w-[30vw]">
            <h2 className="text-lg font-gothic">WHAT'S NEW TODAY</h2>
            <h3 className="my-5 text-7xl font-georgia">744</h3>
            <p className="font-georgia ">
              Discover what just landed at MR PORTER
            </p>
            <button className="bg-black rounded-sm hidden md:block text-white w-6/12 py-2.5 mt-8 mb-16 font-georgia text-sm lg:w-8/12">
              Shop now
            </button>
          </div>

          </div>

          <div className="flex w-[45vw] lg:w-[50vw] ">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex-grow-0  ml-8 min-w-0 "
              >
                <img
                  className="h-[25vh] sm:h-[20vh] md:h-[21vh]"
                  src={item.imgSrc}
                  alt={item.text}
                />
                <p className="font-georgia text-sm mt-2 ml-2 p-0 ">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
    
}
export default CarousMedium