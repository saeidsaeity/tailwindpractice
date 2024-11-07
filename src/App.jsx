import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { CiMenuBurger } from "react-icons/ci";
import { IoStarOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import homepageimage from "./homepageimage.jpg";
import homepageimage2 from "./homepageimage2.jpg";
import "./App.css";
import UkFlag from "./Ukflag.svg";
import down from "./down.svg";
import { MdAccountCircle } from "react-icons/md";
function SideBarDisplay({sideBar,setSideBar,titles}) {
  console.log(sideBar);
  
  
  
  const handleClickOutside = (e) => {
    if (sideBar && e.target.id === "overlay") {
      setSideBar(false);
    }
  };
  return (
    <div
      onClick={handleClickOutside}
      id="overlay"
      className="bg-black fixed inset-0 bg-opacity-70 z-40"
    >
      <div
        className={`bg-white z-50 w-4/5 h-full flex flex-col overflow-y-auto`}
      >
        <div className="flex">
          <img className="w-4 ml-8 mt-7 " src={UkFlag} />{" "}
          <img className="w-5 mt-6 pl-1 " src={down} />
        </div>
        <button className="my-8 flex items-center  mx-8  bg-black text-white w-9/12 py-3 rounded-sm">
          <p className="mx-auto text-sm">Sign In / Register</p>
        </button>

        {titles.map((title) => {
          return (
            <p className="ml-8 font-serif georgia font-normal mt-6 text-sm">
              {title}{" "}
            </p>
          );
        })}
      </div>
    </div>
  );
}
function App() {
  const [showRibbon, setShowRibbon] = useState(true);
  const [sideBar, setSideBar] = useState(false);
  const titles = [
    "What's New",
    "What To Wear",
    "Designers",
    "Clothing",
    "Shoes",
    "Bags",
    "Accessories",
    "Watches",
    "Sport",
    "Home & Gifts",
    "People & Planet",
    "Sale",
  ];
  const handleScroll = () => {
    if (window.scrollY > 50)  {
      setShowRibbon(false);
    } else {
      setShowRibbon(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  

  return (
    <div className="h-screen">
      {sideBar === true ? <SideBarDisplay  sideBar={sideBar} setSideBar={setSideBar} titles={titles} /> : null}
      {showRibbon && (
        <div className=" w-full bg-customGrey h-7/100 lg:h-1/30  flex justify-center items-center  ">
          <div className="">
            <h1 className="text-white font-serif georgia font-normal text-xs ">
              Guess what's just landed? Shop the latest arrivals now
            </h1>
          </div>
        </div>
      )}

      <div className="fixed w-full lg:relative xl:relative 2xl:relative">
        <div className="w-full flex flex-row py-3  bg-white ">
          <div className="basis-1/4  flex items-center  gap-x-4  pl-3 ">
            <CiMenuBurger className="2xl:hidden lg:hidden"
              onClick={() => {
                setSideBar(true);
              }}
            />
            <IoStarOutline className="2xl:hidden xl:hidden lg:hidden md:hidden" />
          </div>
          <div className="basis-1/2 flex items-center justify-center  lg:text-4xl lg:tracking-widest lg:font-semibold lg:georgia">
            MR PORTER
          </div>
          <div className="basis-1/4 flex items-center gap-x-10 md:justify-end sm:justify-end lg:gap-x-5 xl:justify-end 2xl:justify-start 2xl:gap-x-5">
            <div className=" md:flex md:flex-row md:items-center md:gap-x-2 ">
            <IoIosSearch className="" />
            <span className="hidden md:block  text-gray-600">Search</span>
            </div>
            <MdAccountCircle className="hidden 2xl:block lg:block " />
            <IoStarOutline className="hidden 2xl:block lg:block" />
            <IoBagOutline className="sm:mr-4 md:mr-4" />
          </div>
        </div>
        <div className="w-full h-1 bg-black top-28 lg:h-2"></div>
      </div>
      <div className="hidden lg:flex lg:flex-row lg:justify-center">
      
      <div className=" lg:flex-none flex gap-x-2  ">
      {titles.map((title) => {
          return (
            <p className="font-serif georgia font-normal mt-4 text-sm">
              {title}
            </p>
          );
        })}
        </div>
       
      </div>      
      
      <img
        className="pb-8 h-4/6 sm:h-1/3 md:h-1/3 lg:h-1/3 xl:h-4/5 2xl:h-4/5 2xl:pt-0 w-full object-cover   pt-10   "
        src={homepageimage}
      />

      <div className="relative h-90vh sm:h-1/3 md:h-1/3 lg:h-2/3 xl:h-2/3 2xl:h-full  w-full ">
        <img
          className="pb-8 h-90vh sm:h-2/3 md:h-2/3 lg:h-2/3 xl:h-2/3 2xl:h-full 2xl:object-fill w-full object-cover 2xl:pt-10"
          src={homepageimage2}
        />
        <div className=" w-full absolute flex flex-col justify-center inset-0 ">
          <div className="basis-4/6"></div>
          <div className="basis-2/6 ">
            <p className="text-white text-medium font-serif georgia font-bold justify-center ml-4">
              WHAT TO WEAR THIS WINTER
            </p>
            <p className="text-white ml-4 mr-4 text-base font-serif">
              Heavy-duty outerwear, sumptuous knitwear and more cold-weather
              essentials from the world's best brands
            </p>
            <button className="bg-white ml-4 w-11/12 mr-4 h-12 rounded text-sm">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
