import { useState, useEffect, useCallback } from "react";
import homepageimage from "./assets/homepageimage.jpg";
import homepageimage2 from "./assets/homepageimage2.jpg";
import "./App.css";
import { MdAccountCircle } from "react-icons/md";
import Header from "./componenets/Header";
import useEmblaCarousel from "embla-carousel-react";
import Footer from "./componenets/Footer";
function App() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [progress, setProgess] = useState(0);
  const progressBar = useCallback((emblaApi) => {
    setProgess(Math.ceil(emblaApi.scrollProgress() * 100));
    console.log(emblaApi.scrollProgress() * 100);
  }, []);
  useEffect(() => {
    if (emblaApi) emblaApi.on("slidesInView", progressBar);
  }, [emblaApi, progressBar]);
  return (
    <div>
      <Header />

      <div className="relative h-full">
        <img
          className="pb-8 inset-0 w-full  h-[50vh] sm:h-[75vh] "
          src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/25116998/fb2fd7511fbea82dd7d5cf6870f0b2c2/promobanner-mobile-data.jpg/w800_q80.jpg"
        />
      </div>

      <div className="relative">
        <img
          className=" h-[85vh] sm:h-1/3 md:h-1/3 lg:h-1/3 xl:h-4/5 2xl:h-4/5 2xl:pt-0 w-full object-cover      "
          src={homepageimage}
        />

        <div className="absolute inset-0 flex ">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className=" absolute bottom-48 flex">
            <h2 className="text-white text-base  ml-4 font-gothic ">
              NEW: BOTTEGA VENETA
            </h2>
          </div>
          <p className="bottom-28 absolute ml-4 mr-6 text-white font-georgia font-medium  ">
            Discover the Italian powerhouse's winter wardrobe - intrecciato
            jackets, statement bags and more
          </p>
          <button className="w-11/12 sm:w-[95vw] ml-4 absolute bottom-10 bg-white rounded-sm py-4 text-sm font-serif">
            Shop now
          </button>
        </div>
      </div>

      <div className="text-center mt-10 overflow-x-auto">
        <h2 className="text-lg font-gothic">WHAT'S NEW TODAY</h2>
        <h3 className="my-5 text-7xl font-georgia">744</h3>
        <p className="font-georgia ">Discover what just landed at MR PORTER</p>
      </div>

      <div
        className=" mx-5 my-10 flex overflow-hidden sm:gap-x-3 "
        ref={emblaRef}
      >
        <div className="flex gap-x-1">
          <div className="flex-shrink-0 embla__slide ">
            <img
              className=" h-[25vh]   sm:h-[22vh]"
              src="https://www.mrporter.com/variants/images/1647597356892903/in/w300_a3-4_ccrop.jpg"
            />
            <p className="text-center font-georgia text-sm mt-1">
              BOTTEGA VENETA
            </p>
          </div>
          <div className="flex-shrink-0 embla__slide">
            <img
              className="h-[25vh] sm:h-[22vh]"
              src="https://www.mrporter.com/variants/images/1647597356873413/in/w300_a3-4_ccrop.jpg"
            />
            <p className="text-center font-georgia text-sm mt-1">
              BOTTEGA VENETA
            </p>
          </div>
          <div className="flex-shrink-0 embla__slide">
            <img
              className="h-[25vh] sm:h-[22vh]"
              src="https://www.mrporter.com/variants/images/1647597356892911/in/w300_a3-4_ccrop.jpg"
            />
            <p className="text-center font-georgia text-sm mt-1">
              BOTTEGA VENETA
            </p>
          </div>
          <div className="sm:flex-shrink-0 sm:block embla__slide">
            <img
              className="h-[25vh] sm:h-[22vh]"
              src="https://www.mrporter.com/variants/images/1647597356892895/in/w300_a3-4_ccrop.jpg"
            />
            <p className="text-center font-georgia text-sm mt-1">
              BOTTEGA VENETA
            </p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="mx-auto flex">
          <div className="bg-gray-300 h-1 w-20 mb-8">
            {" "}
            <div
              className={` bg-black h-1 mb-8`}
              style={{
                width: "35%",
                marginLeft: `${
                  0 < progress && progress <= 65
                    ? progress
                    : progress >65?65
                    : progress<0?0
                    :null

                }%`,
              }}
            >
              {" "}
            </div>{" "}
          </div>
        </div>
      </div>

      <div className="w-full flex">
        <button className="bg-black rounded-sm text-white w-7/12  sm:w-[37vw] py-3 sm:py-3 mx-auto mb-16 font-georgia text-sm">
          Shop now
        </button>
      </div>
      <hr className="w-[90vw] bg-gray-900 mb-10 mx-auto"></hr>
      <img
        className="w-[90vw] sm:w-[95vw] mx-auto"
        src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/25114888/aba7c999c165da035ebdce5efbbd9edd/image-data.jpg/w800_q80.jpg"
      />
      <div className="w-[90vw] sm:w-[95vw] mx-auto">
        <p className="font-gothic text-xs mt-1">
          THE ART OF GIVING: FAIL-SAFE GIFT IDEAS
        </p>
        <p className="underline text-sm font-georgia mt-3">Shop now</p>
      </div>

      <img
        className="w-[90vw] sm:w-[95vw] mx-auto"
        src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/25114896/4d4d427edf282292db27e2f0d90ed519/image-data.jpg/w800_q80.jpg"
      />
      <div className="w-[90vw] sm:w-[95vw] mx-auto">
        <p className="font-gothic text-xs mt-1 ">
          SUITED AND BOOTED: WHAT TO WEAR TO EVERY PARTY
        </p>
        <p className="underline  text-sm font-georgia mt-3 mb-5">Shop now</p>
      </div>

      <hr className="w-[90vw] bg-gray-900 mb-10 mx-auto"></hr>
      <div className="relative">
        <img
          className="h-[80vh] sm:w-[100vw] sm:h-[95vh] object-cover"
          src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/25114926/8da973740740458b2eea06121434f5f6/image-mobile-data.jpg/w800_q80.jpg"
        />
        <div className="absolute inset-0 flex ">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className=" absolute bottom-40 sm:bottom-36">
            <h2 className="text-white   ml-4 font-gothic py-2 ">
              SWEATER WEATHER
            </h2>
          </div>
          <p className="bottom-28 absolute ml-4 mr-6 text-white font-georgia font-medium  ">
            Soft cashmere sweaters, fine merino cardigans and more knitwear
          </p>
          <button className="w-11/12 ml-4 absolute bottom-10 bg-white rounded-sm py-4 text-sm font-serif sm:w-[95vw]">
            Shop now
          </button>
        </div>
      </div>
      <div className="gap-x-1 mx-5 my-10 flex overflow-hidden">
        <div className="flex-shrink-0">
          <img
            className=" h-[23vh]"
            src="https://www.mrporter.com/variants/images/1647597343168596/in/w300_a3-4_ccrop.jpg"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            className="h-[23vh]"
            src="https://www.mrporter.com/variants/images/1647597356892895/in/w300_a3-4_ccrop.jpg"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            className="h-[23vh]"
            src="https://www.mrporter.com/variants/images/1647597356892919/in/w300_a3-4_ccrop.jpg"
          />
        </div>
      </div>
      <div className="flex">
        <button className="bg-black rounded-sm text-white w-[90vw] py-4 mx-auto mb-40 font-georgia text-sm">
          Shop now
        </button>
      </div>
      <hr className="w-[90vw] bg-gray-950 mb-10 mx-auto"></hr>
      <img
        className="w-[90vw] mx-auto"
        src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/25114904/580b2b86d365e8bb98ca264008d1e8e1/image-data.png/w800_q80.jpg"
      />
      <div className="w-[90vw] sm:w-[95vw] mx-auto">
        <p className="font-gothic text-xs mt-1">
          FINE JEWELLERY: DAVID YURMAN AND MORE
        </p>
        <p className="underlinetext-sm font-georgia text-sm mt-3 underline">
          Shop now
        </p>
      </div>
      <img
        className="w-[90vw] mx-auto"
        src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/25114912/f28b1c2878d4858f0a11c924210c3e02/image-data.jpg/w800_q80.jpg"
      />
      <div className="w-[90vw] sm:w-[95vw] mx-auto">
        <p className="font-gothic text-xs mt-1">
          BALENCIAGA: DISCOVER THE NEW COLLECTION
        </p>
        <p className="underlinetext-sm font-georgia text-sm mt-3 underline">
          Shop now
        </p>
      </div>
      <hr className="w-[90vw] bg-gray-950 mb-10 mx-auto mt-16"></hr>

      <img
        className="w-[90vw] mx-auto mb-10 "
        src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/25086696/c519a0b7d36c249f092cc4f937afb1a4/5-4-jpg-1--data.jpg/w800_q80.jpg"
      />
      <div className="w-[90vw] mx-auto ">
        <h4 className="font-gothic text-xs">THE JOURNAL</h4>
        <h3 className="text-[1.9rem] leading-9  text-left font-georgia pr-[15%]">
          A Guide To Every Coat You’ll Need This Winter
        </h3>
        <p className="font-georgia text-sm mt-1">
          From overcoats and peacoats to shearling and down jackets or puffers –
          what you need to know about outerwear this season. Read more in The
          Journal{" "}
        </p>
        <p className="underlinetext-sm font-georgia text-sm mt-3 underline mb-20">
          Read more
        </p>
      </div>
      <hr className="w-[90vw] bg-gray-950 mb-10 mx-auto mt-16"></hr>
      <div className="w-[90vw] mx-auto">
        <h2 className="font-gothic text-xs mb-10">MORE STORIES</h2>
      </div>
      <div className="gap-x-1 mx-5 my-10 mb-20 flex overflow-hidden sm:gap-x-3">
        <div className="flex-shrink-0">
          <img
            className=" h-[23vh] sm:h-[22vh]"
            src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/24501770/2cae2d80c68564cecc6b25dae87ae4c3/story-1-asset-data.jpg/w800_q65.jpg"
          />
          <p className="text-left text-xs mt-1 font-gothic w-[30vw] font-semibold">
            THE SNEAKER DROP
          </p>
          <p className="w-[35vw] text-sm font-georgia mt-1">
            New shoes from adidas Originals and New...
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            className="h-[23vh] sm:h-[22vh]"
            src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/24501772/43675aaef337ac96f16195407a0bc220/story-2-asset-data.jpg/w800_q65.jpg"
          />
          <p className="text-left text-xs font-gothic  mt-1 font-semibold">
            BEST DRESSED
          </p>
          <p className="w-[35vw] text-sm font-georgia mt-1">
            Our lineup of the men who wore it well this...
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            className="h-[23vh] sm:h-[22vh]"
            src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/24501774/40f3e8c19fba0da51c92f099193f3870/story-3-asset-data.jpg/w800_q65.jpg"
          />
          <p className="text-left font-gothic text-xs font-semibold mt-1">
            THE GIFT GUIDE
          </p>
          <p className="w-[35vw] text-sm font-georgia mt-1">
            What gives? Only everything they coul
          </p>
        </div>
        <div className="hidden sm:flex-shrink-0 sm:block">
          <img
            className="h-[23vh] sm:h-[22vh]"
            src="https://www.mrporter.com/variants/images/1647597356892895/in/w300_a3-4_ccrop.jpg"
          />
          <p className="text-center font-georgia text-sm mt-1">
            BOTTEGA VENETA
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
