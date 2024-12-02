import { useState, useEffect, useCallback } from "react";
import homepageimage from "./assets/homepageimage.jpg";
import homepageimage2 from "./assets/homepageimage2.jpg";
import "./App.css";
import { MdAccountCircle } from "react-icons/md";
import Header from "./components/Header";
import useEmblaCarousel from "embla-carousel-react";
import Footer from "./components/Footer";
import CarouselSmall from "./components/HomePage/CarouselSmall";
import articles from "./data/articles";
import sections from "./data/sections";
import CarousMedium from "./components/HomePage/CarouselMedium";
function App() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [emblaRef2, emblaApi2] = useEmblaCarousel();
  const [emblaRef3, emblaApi3] = useEmblaCarousel();
  const [emblaRef1, emblaApi1] = useEmblaCarousel();
  const [progress, setProgess] = useState(0);
  const [progress2, setProgress2] = useState(0);
  // const progressBar = useCallback((emblaApi) => {
  //   setProgess(Math.ceil(emblaApi.scrollProgress() * 100));

  //   console.log(emblaApi.scrollProgress() * 100);
  // }, []);

  const progressBar2 = () => {
    setProgress2(Math.ceil(emblaApi2.scrollProgress() * 100));
  };
  // useEffect(() => {
  //   if (emblaApi) emblaApi.on("slidesInView", progressBar);
  // }, [emblaApi, progressBar]);

  useEffect(() => {
    if (emblaApi2) emblaApi2.on("slidesInView", progressBar2);
  }, [emblaApi2, progressBar2]);

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
  const shopItems = [
    "https://www.mrporter.com/variants/images/1647597343168596/in/w300_a3-4_ccrop.jpg",
    "https://www.mrporter.com/variants/images/1647597356892895/in/w300_a3-4_ccrop.jpg",
    "https://www.mrporter.com/variants/images/1647597356892919/in/w300_a3-4_ccrop.jpg",
    "https://www.mrporter.com/variants/images/1647597339819577/in/w300_a3-4_ccrop.jpg",
    "https://www.mrporter.com/variants/images/1647597343168596/in/w300_a3-4_ccrop.jpg",
    "https://www.mrporter.com/variants/images/1647597356892895/in/w300_a3-4_ccrop.jpg",
    "https://www.mrporter.com/variants/images/1647597356892919/in/w300_a3-4_ccrop.jpg",
    "https://www.mrporter.com/variants/images/1647597339819577/in/w300_a3-4_ccrop.jpg",
    "https://www.mrporter.com/variants/images/1647597343168596/in/w300_a3-4_ccrop.jpg",
    "https://www.mrporter.com/variants/images/1647597356892895/in/w300_a3-4_ccrop.jpg",
    "https://www.mrporter.com/variants/images/1647597356892919/in/w300_a3-4_ccrop.jpg",
    "https://www.mrporter.com/variants/images/1647597339819577/in/w300_a3-4_ccrop.jpg",
  ];

  return (
    <div className="">
      <Header />
      <div className="overflow-hidden">
        <div className="relative h-full ">
          <img
            className="pb-8 inset-0 w-full  h-[50vh] sm:h-[75vh]  md:hidden :"
            src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/25120852/6708132732f2d9781a9419c047f5dca4/promobanner-mobile-gifts--data.jpg/w800_q80.jpg"
          />
          <img
            className="mb-4 hidden md:block h-[30vh]"
            src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/25128366/b98cb04a944231dda576968e05ae62cf/image-desktop-data.jpg/w1000_q80.jpg"
          />
        </div>

        <div className="relative">
          <img
            className=" h-[85vh] sm:h-1/3 md:h-1/3 lg:h-1/3 xl:h-4/5 2xl:h-4/5 2xl:pt-0 w-full md:hidden  object-cover   "
            src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/25128552/b53ecf535569e70a43540c8b4fd71853/hp-banner-desktop-3440x483-data.png/w800_q80.jpg"
          />
          <img
            className="hidden md:block md:h-[90vh] object-cover"
            src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/25128552/b53ecf535569e70a43540c8b4fd71853/hp-banner-desktop-3440x483-data.png/w1500_q80.jpg"
          />

          <div className="absolute inset-0 flex ">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className=" absolute bottom-[5%] w-full ml-4 md:ml-7">
              <h2 className="text-white text-base  font-gothic mb-2 md:text-3xl">
                MR P.S WINTER WARDROBE
              </h2>
              <p className="  mr-6 text-white font-georgia font-medium ">
                Impeccable tailoring, eveningwear and more new arrivals, only at
                MR PORTER
              </p>
              <button className="w-11/12 sm:w-[95vw] lg:w-3/12 lg:py-3 mt-6 bg-white rounded-sm py-4 text-sm font-serif">
                Shop now
              </button>
            </div>
          </div>
        </div>
        <CarousMedium />

        <div className="text-center mt-10 overflow-x-auto md:hidden">
          <h2 className="text-lg font-gothic">WHAT'S NEW TODAY</h2>
          <h3 className="my-5 text-7xl font-georgia">643</h3>
          <p className="font-georgia ">
            Discover what just landed at MR PORTER
          </p>
        </div>
        <CarouselSmall />
        <div className="w-full flex md:hidden">
          <button className="bg-black rounded-sm text-white w-7/12  sm:w-[37vw] py-3 sm:py-3 mx-auto mb-16 font-georgia text-sm">
            Shop now
          </button>
        </div>

        <hr className="w-[90vw] bg-gray-900 mb-10 mx-auto"></hr>
        <div className="md:flex md:w-[95vw] overflow-hidden md:mx-auto md:gap-x-5">
          {sections.slice(0, 2).map((section, index) => (
            <div
              key={index}
              className="w-[90vw] sm:w-[95vw] mx-auto md:w-[45vw]"
            >
              <img
                className="w-[90vw] sm:w-[95vw] mx-auto"
                src={section.imgSrc}
                alt={section.title}
              />
              <div className="w-[90vw] sm:w-[95vw] mx-auto">
                <p className="font-gothic text-xs mt-1 md:w-[45vw]">
                  {section.title}
                </p>
                <p className="underline text-sm font-georgia mt-3 mb-5">
                  {section.linkText}
                </p>
              </div>
            </div>
          ))}
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
        <div className=" ml-5 my-10 flex overflow-hidden " ref={emblaRef2}>
          <div className="flex gap-x-2 sm:gap-x-1">
            {shopItems.map((item) => {
              return (
                <div className="flex-shrink-0 flex-grow-0 basis-2/5 min-w-0 sm:basis-1/4 lg:basis-1/6">
                  <img
                    className="h-[23vh] sm:h-[23vh] sm:w-[23vw] md:w-[15vw] md:h-[17vh]"
                    src={item}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="hidden lg:flex ">
          <div className="mx-auto flex">
            <div className="bg-gray-300 h-1 w-80 mb-8 lg:h-[1.5px]">
              <div
                className={` bg-black h-1 mb-8 lg:h-[1.5px]`}
                style={{
                  width: "20%",
                  marginLeft: `${
                    0 < progress2 && progress2 <= 80
                      ? progress2
                      : progress2 > 80
                      ? 80
                      : progress2 < 0
                      ? 0
                      : null
                  }%`,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex">
          <button className="bg-black rounded-sm text-white w-[90vw] sm:w-[95vw] py-4 mx-auto mb-36 font-georgia text-sm md:hidden">
            Shop now
          </button>
        </div>

        <hr className="w-[90vw] bg-gray-950 mb-10 mx-auto "></hr>

        <img
          className="w-[90vw] mx-auto mb-10 sm:w-[95vw] "
          src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/25113506/10f32dac1b10609e2f37d8abb3ede884/5x4-jpg-data.jpg/w800_q80.jpg"
        />
        <div className="w-[90vw] sm:w-[95vw] mb-20 mx-auto ">
          <h4 className="font-gothic text-xs mb-5">THE JOURNAL</h4>
          <div className="md:flex">
            <div className="md:w-[50vw]">
              <h3 className="text-[2rem] leading-9  text-left font-georgia pr-[15%]">
                The Unshakeable Realness Of Mr Dan Levy
              </h3>
            </div>
            <div className="md:w-[50vw]">
              <p className="font-georgia text-sm mt-1">
                The actor, writer and director on Hollywood “pinch me” moments,
                the family dynamics of creating Schitt’s Creek and his
                commitment to making the stories that he wants to see
              </p>
              <p className="underlinetext-sm font-georgia text-sm mt-3 underline ">
                Read more
              </p>
            </div>
          </div>
        </div>
        <hr className="w-[90vw] bg-gray-950 mb-10 mx-auto mt-16"></hr>
        <div className="w-[90vw] sm:w-[95vw] mx-auto">
          <h2 className="font-gothic text-xs ">MORE STORIES</h2>
        </div>
        <div
          className="mt-5 mb-20 flex overflow-hidden sm:gap-x-3"
          ref={emblaRef3}
        >
          <div className=" flex  ml-4 md:gap-x-3 ">
            {articles.map((article) => {
              return (
                <div className="flex-shrink-0 flex-grow-0 min-w-0  ">
                  <img
                    className="mb-2 h-[20vh] sm:h-[22vh] md:h-[30vh]"
                    src={article.imgSrc}
                  />
                  <p className="text-left text-xs mt-1 font-gothic w-[32vw] sm:w-[25vw] font-semibold">
                    {article.title}
                  </p>
                  <p className="w-[36vw]  sm:w-[25vw] text-sm font-georgia mt-1">
                    {article.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <hr className="w-[90vw] bg-gray-950 mb-10 mx-auto"></hr>
        <div className="md:flex md:overflow-hidden ">
          {sections.slice(2).map((section, index) => (
            <div
              key={index}
              className="w-[90vw] sm:w-[95vw] mx-auto md:ml-0 md:mr-0 md:w-[35vw] "
            >
              <img
                className="w-[90vw] sm:w-[95vw] mx-auto md:w-[35vw] md:h-4/6 md:object-scale-down flex px-0 md:mx-0"
                src={section.imgSrc}
                alt={section.title}
              />
              <div className="w-[90vw] sm:w-[95vw] mx-auto md:w-[33vw] md:ml-7 md:mr-0 md:mt-2">
                <p className="font-gothic text-xs mt-1">{section.title}</p>
                <p className="text-sm font-georgia mt-3 underline">
                  {section.linkText}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
