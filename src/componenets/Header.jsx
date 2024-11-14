import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoStarOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import logo from "../assets/logo.svg";
import SideBarDisplay from "./SideBarDisplay";

export default function Header() {
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

  return (
    <>
      {sideBar === true ? (
        <SideBarDisplay sideBar={sideBar} setSideBar={setSideBar} />
      ) : null}

      <div className=" w-full bg-customGrey   flex  justify-center items-center lg:justify-between px-[7vw]">
        <h1 className="text-white font-serif georgia font-normal py-5 lg:py-1 flex text-xs  lg:text-sm  ">
          Guess what's just landed? Shop the latest arrivals now!
        </h1>
        <h1 className="hidden  text-white font-serif georgia font-normal py-5 lg:py-1  text-xs  lg:text-sm  lg:flex ">
          Womeswear on NET-A-PORTER
        </h1>
      </div>

      <div className=" w-full  sticky top-0 z-50">
        <div className="w-full flex flex-row py-3 lg:py-5  bg-white ">
          <div className="basis-1/4  flex items-center  gap-x-4  pl-3 ">
            <button
              onClick={() => {
                setSideBar(true);
              }}
            >
              <CiMenuBurger className="lg:hidden" />
            </button>

            <div className=" hidden md:basis-1/3"></div>
            <div className="hidden basis-1/3 gap-x-1  justify-end  lg:flex">
              <img
                className="h-5 my-auto"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTEiIGZpbGw9IiNGMEYwRjAiLz48cGF0aCBkPSJNMy4yNzQgNS4zMDNhMTAuOTYgMTAuOTYgMCAwMC0xLjg5NSAzLjgyOEg3LjFMMy4yNzQgNS4zMDN6TTIyLjYyIDkuMTNhMTAuOTYgMTAuOTYgMCAwMC0xLjg5NC0zLjgyN0wxNi44OTggOS4xM2g1LjcyM3pNMS4zNzkgMTQuODdhMTAuOTYxIDEwLjk2MSAwIDAwMS44OTUgMy44MjdMNy4xIDE0Ljg3SDEuMzh6TTE4LjY5NyAzLjI3NGExMC45NiAxMC45NiAwIDAwLTMuODI4LTEuODk1VjcuMWwzLjgyOC0zLjgyN3pNNS4zMDMgMjAuNzI2YTEwLjk2MiAxMC45NjIgMCAwMDMuODI3IDEuODk1VjE2LjlsLTMuODI3IDMuODI3ek05LjEzIDEuMzc5YTEwLjk2MSAxMC45NjEgMCAwMC0zLjgyNyAxLjg5NUw5LjEzIDcuMVYxLjM4ek0xNC44NyAyMi42MjFhMTAuOTYyIDEwLjk2MiAwIDAwMy44MjctMS44OTVMMTQuODY5IDE2Ljl2NS43MjJ6TTE2Ljg5OCAxNC44N2wzLjgyOCAzLjgyN2ExMC45NTkgMTAuOTU5IDAgMDAxLjg5NS0zLjgyN2gtNS43MjN6IiBmaWxsPSIjMDA1MkI0Ii8+PHBhdGggZD0iTTIyLjkwNyAxMC41NjVoLTkuNDcyVjEuMDkzYTExLjExIDExLjExIDAgMDAtMi44NyAwdjkuNDcySDEuMDkzYTExLjExIDExLjExIDAgMDAwIDIuODdoOS40NzJ2OS40NzJhMTEuMTE2IDExLjExNiAwIDAwMi44NyAwdi05LjQ3Mmg5LjQ3MmExMS4xMTYgMTEuMTE2IDAgMDAwLTIuODd6IiBmaWxsPSIjRDgwMDI3Ii8+PHBhdGggZD0iTTE0Ljg3IDE0Ljg3bDQuOTA4IDQuOTA4Yy4yMjYtLjIyNS40NC0uNDYxLjY0Ni0uNzA2bC00LjIwMi00LjIwMmgtMS4zNTN6TTkuMTMgMTQuODdsLTQuOTA4IDQuOTA4Yy4yMjUuMjI2LjQ2MS40NDEuNzA2LjY0N2w0LjIwMi00LjIwM1YxNC44N3pNOS4xMyA5LjEzTDQuMjIyIDQuMjIyYy0uMjI2LjIyNS0uNDQxLjQ2MS0uNjQ3LjcwNkw3Ljc3OCA5LjEzSDkuMTN6TTE0Ljg3IDkuMTNsNC45MDgtNC45MDhhMTEuMDQxIDExLjA0MSAwIDAwLS43MDYtLjY0N2wtNC4yMDMgNC4yMDNWOS4xM3oiIGZpbGw9IiNEODAwMjciLz48L3N2Zz4="
              />
              <img
                className="h-4 my-auto"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAxNlYwaDE2djE2eiIvPjxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTggMTIuMjA3TC42NDYgNC44NTNsLjcwOC0uNzA2TDggMTAuNzkzbDYuNjQ2LTYuNjQ2LjcwOC43MDZ6Ii8+PC9nPjwvc3ZnPg=="
              />
            </div>
            <div className="md:basis-1/3 hidden"></div>

            <IoStarOutline className=" md:hidden" />
          </div>
          <div className="basis-1/2 flex shrink items-center justify-center  lg:text-4xl lg:tracking-widest lg:font-semibold lg:georgia">
            <img src={logo} className="h-4 lg:h-7 justify-center "></img>
          </div>
          <div className="basis-1/4 flex items-center gap-x-5 justify-end mr-5 lg:justify-center lg:gap-x-5 ">
            <div className=" md:flex md:flex-row md:items-center md:gap-x-2 ">
              <IoIosSearch className="" />
              <span className="hidden md:block  text-gray-600">Search</span>
            </div>

            <img
              className="h-4 hidden  lg:block"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTE2IDB2MTZIMFYweiIvPjxwYXRoIGQ9Ik04LjQ3MiA4LjQ1bC45ODUtLjU5MmEzLjc3IDMuNzcgMCAwMDEuNzI5LTIuMzM4IDMuNzcyIDMuNzcyIDAgMDAtLjQzLTIuODc2QTMuNzcgMy43NyAwIDAwNy41MDIuOEg3LjVhMy43NzMgMy43NzMgMCAwMC0zLjI1NSAxLjg0NCAzLjgwNCAzLjgwNCAwIDAwMS4zIDUuMjE0bC45ODUuNTkyTDEgMTEuNzcyVjE1aDEzdi0zLjIyOUw4LjQ3MiA4LjQ1ek02LjA2IDcuMDAxYTIuODA1IDIuODA1IDAgMDEtLjk1OC0zLjg0M0EyLjc4NCAyLjc4NCAwIDAxNy41MDEgMS44Yy45OTIuMDAyIDEuODg4LjUxIDIuMzk4IDEuMzU4YTIuODA0IDIuODA0IDAgMDEtLjk1OCAzLjg0M2wtMS40NC44NjUtMS40NDEtLjg2NXpNMTMgMTRIMnYtMS42NjJsNS41MDEtMy4zMDVMMTMgMTIuMzM3VjE0eiIvPjwvc3ZnPg=="
            ></img>
            <IoStarOutline className="hidden  lg:block" />
            <IoBagOutline className="sm:mr-4" />
          </div>
        </div>
        <div className="w-full h-1 bg-black top-26 lg:h-2"></div>
      </div>
      <div className="hidden lg:flex lg:flex-row lg:justify-center">
        <div className=" lg:flex-none flex gap-x-4 sm:pb-3  ">
          {titles.map((title) => {
            return (
              <p className="font-serif georgia font-normal mt-4 text-sm  ">
                {title}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}
