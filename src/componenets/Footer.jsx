import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";

export default function Footer() {
    const [emblaRef, emblaApi] = useEmblaCarousel();
    const [selectedIndex, setSelectedIndex] = useState(0); 
    const [slidesCount, setSlidesCount] = useState(0); 

    const onSelect = useCallback(() => {
      if (!emblaApi) return;
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);
    useEffect(() => {
      if (!emblaApi) return;
  
      setSlidesCount(emblaApi.slideNodes().length); 
      emblaApi.on('select', onSelect); 
      onSelect(); 
    }, [emblaApi, onSelect]);

      const scrollTo = (index) => {
        if (emblaApi) emblaApi.scrollTo(index);
      };
  return (
    <>
      <hr className="bg-gray-950 w-[90vw] mx-auto"></hr>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          <div class="flex-shrink-0 flex-grow-0 min-w-0 basis-[100%]">
            <div className="flex">
              <img
                className="w-[40vw] my-auto"
                src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/23570086/09e68647cd135d31d62eb16fb6e9f0d3/download-the-app-image-data.jpg/w300_q80.jpg"
              />
              <div className="my-auto">
                <h4 className="font-gothic text-xs mb-2">THE MR PORTER APP</h4>
                <p className="mb-8 w-[40vw] text-sm text-georgia font-medium ">Seamless on-the-go shopping</p>
                <p className="underline text-georgia text-sm">Download now</p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 flex-grow-0 min-w-0 basis-[100%]">
            <div className="flex gap-x-5">
              <img
                className="w-[40vw] my-auto"
                src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/23570168/d285c4f97a8a2aa0c41e1c4ed7418a27/him-service-banner-300x334-v2-10--data.jpg/w300_q80.jpg"
              />
              <div className="my-auto">
                <h4 className="font-gothic text-xs mb-1">FOR HIM</h4>
                <p className="font-georgia w-2/3 text-sm mb-6">Discover MR PORTER’s Health In Mind
                </p>
                <p className="underline font-georgia">Discover more</p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 flex-grow-0 min-w-0 basis-[100%]">
            <div className="flex gap-x-5">
              <img
                className="w-[40vw] my-auto"
                src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/23570148/b32c21f08e09342ef903db9406af6d04/unknown-jpeg-data.png/w300_q80.png"
              />
              <div className="my-auto">
                <h4 className="font-gothic text-xs mb-1">MR PORTER RESELL</h4>
                <p className="font-georgia text-sm mb-8">Give your clothes a new life
                </p>
                <p className="underline font-georgia text-xs">Resell now</p>
              </div>
            </div>
          </div>


        </div>
      </div>
      <div className="flex mb-32">
        
        <div className="mx-auto gap-x-3 flex">
        {Array.from({ length: slidesCount }).map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === selectedIndex ? 'bg-gray-500' : 'bg-gray-300'}`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
     
        
      </div>
      <div className="bg-gray-100 flex">
        <div className="w-[90vw] mx-auto ">
        <h3 className="font-gothic text-xs mb-2 ">10% OFF WHEN YOU SIGN UP</h3>
        <p className="text-xs text-gray-600">Stay in the loop with the latest style news and get an exclusive 10% off when you subscribe to our emails. Learn more about our Privacy Policy here. Terms and conditions apply.</p>
        <p className="text-gray-600">Email Address</p>

        </div>
        
      </div>
    </>
  );
}
