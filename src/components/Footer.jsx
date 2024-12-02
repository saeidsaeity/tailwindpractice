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
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = (index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };
  return (
    <>
      <hr className="bg-gray-950 w-[90vw] mx-auto"></hr>
      <div ref={emblaRef} className="overflow-hidden sm:hidden">
        <div className="flex">
          <div class="flex-shrink-0 flex-grow-0 min-w-0 basis-[100%]">
            <div className="flex">
              <img
                className="w-[40vw] my-auto"
                src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/23570086/09e68647cd135d31d62eb16fb6e9f0d3/download-the-app-image-data.jpg/w300_q80.jpg"
              />
              <div className="my-auto">
                <h4 className="font-gothic text-xs mb-2">THE MR PORTER APP</h4>
                <p className="mb-8 w-[40vw] text-sm text-georgia font-medium ">
                  Seamless on-the-go shopping
                </p>
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
                <p className="font-georgia w-2/3 text-sm mb-6">
                  Discover MR PORTER’s Health In Mind
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
                <p className="font-georgia text-sm mb-8">
                  Give your clothes a new life
                </p>
                <p className="underline font-georgia text-xs">Resell now</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden w-[100vw] mt-10 mb-16  sm:flex">
        <div className=" ml-5 flex">
          <img
            className="h-[6vh]  lg:h-[10vh] "
            src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/23570086/09e68647cd135d31d62eb16fb6e9f0d3/download-the-app-image-data.jpg/w300_q80.jpg"
          />
       
        <div className=" w-[18vw]">
          <h4 className="font-gothic text-xs mb-2">THE MR PORTER APP</h4>
          <p className=" text-sm font-georgia mb-2 ">
            Seamless on-the-go shopping
          </p>
          <p className="underline font-georgia text-sm ">Download now</p>
        </div>
        </div>
        <div className=" flex ">
          <img
            className="h-[8vh] lg:h-[14vh] mr-5 "
            src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/23570168/d285c4f97a8a2aa0c41e1c4ed7418a27/him-service-banner-300x334-v2-10--data.jpg/w300_q80.jpg"
          />
          <div className="">
          <h4 className="font-gothic text-xs mb-2">FOR HIM</h4>
          <p className="font-georgia text-sm mb-1 w-[20vw]">
            Discover MR PORTER’s Health In Mind
          </p>
          <p className="underline font-georgia text-sm">Discover more</p>

          </div>
        </div>
        <div className="flex">
          <img
            className="h-[6vh] lg:h-[10vh]"
            src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/23570148/b32c21f08e09342ef903db9406af6d04/unknown-jpeg-data.png/w300_q80.png"
          />
        
        <div className=" w-[20vw] px-2">
          <h4 className="font-gothic text-xs mb-2 ">MR PORTER RESELL</h4>
          <p className="font-georgia text-sm w-[18vw] mb-2">
            Give your clothes a new life
          </p>
          <p className="underline font-georgia text-sm">Resell now</p>
        </div>
        </div>
      </div>

      <div className="flex mb-32 sm:hidden">
        <div className="mx-auto gap-x-3 flex sm:hidden">
          {Array.from({ length: slidesCount }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === selectedIndex ? "bg-gray-500" : "bg-gray-300"
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>

      <div className="bg-gray-100 flex">
        <div className="w-[90vw] sm:w-[95vw] mx-auto  ">
          <h3 className="font-gothic text-xs my-2 ">
            10% OFF WHEN YOU SIGN UP
          </h3>
          <p className="text-xs text-gray-600 w-[50vw] mb-5">
            Stay in the loop with the latest style news and get an exclusive 10%
            off when you subscribe to our emails. Learn more about our Privacy
            Policy here. Terms and conditions apply.
          </p>
          <label
            for="input"
            class="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
          >
            Email Address
          </label>
          <div className="flex mb-10">
            <input
              type="text"
              id="input"
              className="block p-2 h-10 text-gray-900 border  bg-gray-50 text-xs border-gray-700 w-[50vw] rounded-sm"
              placeholder="your@address.com"
              required
            />
            <button
              type="submit"
              className="bg-white border border-gray-700 rounded-sm ml-2 flex w-16 "
            >
              <div className="mx-auto my-auto text-gray-500">Submit </div>
            </button>
          </div>
          <hr className=" border-gray-300 w-[10vw] mx-auto mb-10"></hr>
          <div className="flex justify-center  gap-x-6 mb-10">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAxNmgxNlYwSDB6Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTYuNCAxMC40VjUuNkwxMC41NTYgOCA2LjQgMTAuNHptOS4yNjYtNi4yNWEyLjAwNiAyLjAwNiAwIDAwLTEuNDE1LTEuNDE2QzEzLjAwMyAyLjQgOCAyLjQgOCAyLjRzLTUuMDAzIDAtNi4yNTEuMzM0QTIuMDAzIDIuMDAzIDAgMDAuMzM0IDQuMTVDMCA1LjM5NiAwIDggMCA4czAgMi42MDMuMzM0IDMuODUxYTIuMDAyIDIuMDAyIDAgMDAxLjQxNSAxLjQxNEMyLjk5NyAxMy42IDggMTMuNiA4IDEzLjZzNS4wMDMgMCA2LjI1MS0uMzM0YTIuMDA1IDIuMDA1IDAgMDAxLjQxNS0xLjQxNEMxNiAxMC42MDMgMTYgOC4wMDEgMTYgOC4wMDFzMC0yLjYwNS0uMzM0LTMuODUyeiIvPjwvZz48L3N2Zz4="></img>
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAxNmgxNlYwSDB6Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTggMWE3IDcgMCAwMC0xLjA5NCAxMy45MTV2LTQuODkySDUuMTI5VjhoMS43NzdWNi40NThjMC0xLjc1NCAxLjA0NS0yLjcyNCAyLjY0NC0yLjcyNC43NjYgMCAxLjU2Ny4xMzcgMS41NjcuMTM3djEuNzIzaC0uODgzYy0uODY5IDAtMS4xNC41MzktMS4xNCAxLjA5M1Y4aDEuOTQxbC0uMzEgMi4wMjNIOS4wOTR2NC44OTJBNy4wMDIgNy4wMDIgMCAwMDggMSIvPjwvZz48L3N2Zz4=" />
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAxNmgxNlYwSDB6Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTE0LjEyMiAzLjU0MWEzLjI5MyAzLjI5MyAwIDAwMS40MzgtMS43OTMgNi41NTYgNi41NTYgMCAwMS0yLjA4My43OTMgMy4yNzIgMy4yNzIgMCAwMC0zLjkzOC0uNjU0QTMuMjgyIDMuMjgyIDAgMDA3Ljg5MyA1LjUzIDkuMjg0IDkuMjg0IDAgMDExLjE3NCAyLjFhMy4yODUgMy4yODUgMCAwMC45NzcgNC4zOCAzLjI1NSAzLjI1NSAwIDAxLTEuNDg2LS40MTJBMy4yOCAzLjI4IDAgMDAzLjI4NiA5LjMzYTMuMjU4IDMuMjU4IDAgMDEtMS40NzYuMDU4IDMuMjc1IDMuMjc1IDAgMDAzLjA4IDIuMjc0IDYuNTczIDYuNTczIDAgMDEtNC44NDUgMS4zNjUgOS4zIDkuMyAwIDAwOS42NzguMjIzIDkuMzM0IDkuMzM0IDAgMDA0LjY0NC04LjUxNUE2LjYwOCA2LjYwOCAwIDAwMTYgMy4wMjFhNi41NTggNi41NTggMCAwMS0xLjg3OC41MnoiLz48L2c+PC9zdmc+" />
            <img src="https://www.mrporter.com/assets/images/instagram-a3ece2e5..svg" />
          </div>
        </div>
      </div>
      <div className="w-[90vw] sm:w-[95vw] mx-auto">
        <h3 className="font-georgia text-xs mb-2 mt-2">NEED HELP?</h3>
        <div className="flex text-gray-400">
          <p className="text-xs">For any enquiries please visit MR PORTER</p>
          <p className="underline text-xs ml-1"> Customer Care.</p>
        </div>
        <hr className="border-gray-300 mt-10"></hr>
        <h3 className="text-[0.6rem] mt-5 font-gothic ">CHANGE LOCATION</h3>
        <div className="mt-2 flex">
          <img
            className="w-5 h-5 my-auto"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTEiIGZpbGw9IiNGMEYwRjAiLz48cGF0aCBkPSJNMy4yNzQgNS4zMDNhMTAuOTYgMTAuOTYgMCAwMC0xLjg5NSAzLjgyOEg3LjFMMy4yNzQgNS4zMDN6TTIyLjYyIDkuMTNhMTAuOTYgMTAuOTYgMCAwMC0xLjg5NC0zLjgyN0wxNi44OTggOS4xM2g1LjcyM3pNMS4zNzkgMTQuODdhMTAuOTYxIDEwLjk2MSAwIDAwMS44OTUgMy44MjdMNy4xIDE0Ljg3SDEuMzh6TTE4LjY5NyAzLjI3NGExMC45NiAxMC45NiAwIDAwLTMuODI4LTEuODk1VjcuMWwzLjgyOC0zLjgyN3pNNS4zMDMgMjAuNzI2YTEwLjk2MiAxMC45NjIgMCAwMDMuODI3IDEuODk1VjE2LjlsLTMuODI3IDMuODI3ek05LjEzIDEuMzc5YTEwLjk2MSAxMC45NjEgMCAwMC0zLjgyNyAxLjg5NUw5LjEzIDcuMVYxLjM4ek0xNC44NyAyMi42MjFhMTAuOTYyIDEwLjk2MiAwIDAwMy44MjctMS44OTVMMTQuODY5IDE2Ljl2NS43MjJ6TTE2Ljg5OCAxNC44N2wzLjgyOCAzLjgyN2ExMC45NTkgMTAuOTU5IDAgMDAxLjg5NS0zLjgyN2gtNS43MjN6IiBmaWxsPSIjMDA1MkI0Ii8+PHBhdGggZD0iTTIyLjkwNyAxMC41NjVoLTkuNDcyVjEuMDkzYTExLjExIDExLjExIDAgMDAtMi44NyAwdjkuNDcySDEuMDkzYTExLjExIDExLjExIDAgMDAwIDIuODdoOS40NzJ2OS40NzJhMTEuMTE2IDExLjExNiAwIDAwMi44NyAwdi05LjQ3Mmg5LjQ3MmExMS4xMTYgMTEuMTE2IDAgMDAwLTIuODd6IiBmaWxsPSIjRDgwMDI3Ii8+PHBhdGggZD0iTTE0Ljg3IDE0Ljg3bDQuOTA4IDQuOTA4Yy4yMjYtLjIyNS40NC0uNDYxLjY0Ni0uNzA2bC00LjIwMi00LjIwMmgtMS4zNTN6TTkuMTMgMTQuODdsLTQuOTA4IDQuOTA4Yy4yMjUuMjI2LjQ2MS40NDEuNzA2LjY0N2w0LjIwMi00LjIwM1YxNC44N3pNOS4xMyA5LjEzTDQuMjIyIDQuMjIyYy0uMjI2LjIyNS0uNDQxLjQ2MS0uNjQ3LjcwNkw3Ljc3OCA5LjEzSDkuMTN6TTE0Ljg3IDkuMTNsNC45MDgtNC45MDhhMTEuMDQxIDExLjA0MSAwIDAwLS43MDYtLjY0N2wtNC4yMDMgNC4yMDNWOS4xM3oiIGZpbGw9IiNEODAwMjciLz48L3N2Zz4="
          />
          <p className="text-xs text-gray-500 underline my-auto ml-1">
            United Kingdom
          </p>
        </div>
        <hr className="border-gray-300 mt-10 mb-8"></hr>
        <div className="flex mb-8">
          <div className="flex basis-1/2">
            <h3 className="text-[0.6rem] font-gothic">CUSTOMER CARE</h3>
          </div>
          <div  className="flex basis-1/2 justify-end">
            <img
             className="h-4 my-auto"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAxNlYwaDE2djE2eiIvPjxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTggMTIuMjA3TC42NDYgNC44NTNsLjcwOC0uNzA2TDggMTAuNzkzbDYuNjQ2LTYuNjQ2LjcwOC43MDZ6Ii8+PC9nPjwvc3ZnPg=="
            />
          </div>
        </div>
        <hr className="border-gray-300  mb-8"></hr>
        <div className="flex mb-8">
          <div className="flex basis-1/2">
            <h3 className="text-[0.6rem] font-gothic">ABOUT US</h3>
          </div>
          <div  className="flex basis-1/2 justify-end">
            <img
             className="h-4 my-auto"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAxNlYwaDE2djE2eiIvPjxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTggMTIuMjA3TC42NDYgNC44NTNsLjcwOC0uNzA2TDggMTAuNzkzbDYuNjQ2LTYuNjQ2LjcwOC43MDZ6Ii8+PC9nPjwvc3ZnPg=="
            />
          </div>
        </div>
        <hr className="border-gray-300  mb-8"></hr>
        <div>
        <h3 className="text-[0.6rem] font-gothic">GET THE MR PORTER APP</h3>
        <p className="text-xs mt-2 text-gray-500">Download and enjoy our app, anytime, anywhere for iOS and Android devices</p>
        <div className="flex mb-10">
        <img className="w-[22vw] object-scale-down" src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/25020188/af24c1d5d6e5a6895e1140efb125439a/apple-app-store-data.png"/>
        <img className="w-[22vw]  ml-2" src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/25020190/e53ac38ce964d3435a02d7db5190b5af/google-play-store-data.png"/> 
        </div>
        </div>
        <hr className="border-gray-300  mb-8"></hr>
        <h3 className="font-gothic text-[0.6rem] text-gray-400 ">MR PORTER ACCEPTS</h3>
        <div className="flex">
        <img className="w-[10vw]" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCAzMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cmVjdCB3aWR0aD0iNDciIGhlaWdodD0iMzEiIHg9Ii41IiB5PSIuNSIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjQ0JDQkNCIiBzdHJva2Utb3BhY2l0eT0iLjUiIHJ4PSIyIi8+PHBhdGggZmlsbD0iIzFBMjA3MCIgZD0iTTE5LjQzNSAxMGwtNS4wNTMgMTEuOTk1aC0zLjI4bC0yLjQ4NC05LjU3NGMwLS40NDMtLjM1NC0uODg3LS43MDgtMS4wNjQtLjk3NS0uNDQyLTIuMDQtLjc5Ny0zLjAxNS0uOTc1bC4wOS0uMzgyaDUuMjNjLjcwOCAwIDEuMzMuNTYgMS40MTggMS4yNjhsMS4zMyA2LjkxNkwxNi4xNTUgMTBoMy4yOHptMTIuNzY2IDguMDk1YzAtMy4xOTItNC4zNDQtMy4zNjktNC4zNDQtNC42OTkgMC0uNDQzLjQ0Mi0uODg3IDEuMzMtLjk3NSAxLjA2Mi0uMDg4IDIuMTI3LjA4OCAzLjAxNC41MzJsLjUzMS0yLjU3MWMtLjg4Ni0uMzU1LTEuOTUtLjUzMi0yLjkyNS0uNTMyLTMuMDE1IDAtNS4yMyAxLjU5Ni01LjIzIDMuOTg5IDAgMS42ODUgMS41MDYgMi42NiAyLjc0OCAzLjI4MSAxLjI0LjYxOSAxLjU5NS45NzUgMS41OTUgMS41MDcgMCAuNzk3LS45NzUgMS4xNTItMS44NiAxLjE1Mi0xLjA2NiAwLTIuMjE4LS4yNjYtMy4xOTMtLjcxbC0uNTMyIDIuNjZjMS4wNjMuNDQ0IDIuMzA1LjYyMSAzLjQ1Ny42MjEgMy4yODEtLjE3NyA1LjQxLTEuNzczIDUuNDEtNC4yNTV6bTguMDY3IDMuOWgyLjgzNkw0MC42MjIgMTBoLTIuNjU5Yy0uNjIgMC0xLjA2NS4zODItMS4zMy45MTVsLTQuNjEgMTEuMDhoMy4yOGwuNjIxLTEuNzczaDMuOTlsLjM1NCAxLjc3M3ptLTMuNDU4LTQuMjU2bDEuNTk3LTQuNTIuOTc0IDQuNTJoLTIuNTd6TTIzLjg2NyAxMGwtMi41NyAxMS45OTVoLTMuMTA0TDIwLjc2NCAxMGgzLjEwM3oiLz48L2c+PC9zdmc+"/>
        
        </div>
      </div>
    </>
  );
}
