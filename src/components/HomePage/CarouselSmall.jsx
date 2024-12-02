import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";

export default function CarouselSmall(params) {
    const [emblaRef1, emblaApi1] = useEmblaCarousel();
    const [progress, setProgess] = useState(0);
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
    const progressBar = useCallback((emblaApi1) => {
        setProgess(Math.ceil(emblaApi1.scrollProgress() * 100));
        
        console.log(emblaApi1.scrollProgress() * 100);
      }, []);

    useEffect(() => {
        if (emblaApi1) emblaApi1.on("slidesInView", progressBar);
      }, [emblaApi1, progressBar]);
    return (
        <>
        <div
        className=" mx-5 my-10 flex overflow-hidden sm:gap-x-3 md:hidden"
        ref={emblaRef1}
      >
        <div className="flex gap-x-1">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex-grow-0 basis-2/5 min-w-0 sm:basis-1/4"
            >
              <img
                className="h-[25vh] sm:h-[22vh]"
                src={item.imgSrc}
                alt={item.text}
              />
              <p className="text-center font-georgia text-sm mt-1">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex md:hidden ">
        <div className="mx-auto flex">
          <div className="bg-gray-300 h-1 w-20 mb-8">
            <div
              className={` bg-black h-1 mb-8`}
              style={{
                width: "35%",
                marginLeft: `${
                  0 < progress && progress <= 65
                    ? progress
                    : progress > 65
                    ? 65
                    : progress < 0
                    ? 0
                    : null
                }%`,
              }}
            ></div>
          </div>
        </div>
      </div>
        </>
      
    )
    
}
