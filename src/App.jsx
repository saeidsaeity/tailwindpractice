import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CiMenuBurger } from "react-icons/ci";
import { IoStarOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import homepageimage from './homepageimage.jpg'
import homepageimage2 from './homepageimage2.jpg'
import './App.css'
import UkFlag from './Ukflag.svg'
import down from './down.svg'
function App() {
  const [showRibbon, setShowRibbon] = useState(true);
  const [sideBar,setSideBar]=useState(false)
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowRibbon(false);
    } else {
      setShowRibbon(true);
    }
  };
  useEffect(() => {
    sideBar? document.body.style.overflow = 'hidden':document.body.style.overflow = 'auto';
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [sideBar]);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleClickOutside = (e) => {
    if (sideBar && e.target.id === 'overlay') {
      setSideBar(false);
    }
  };

  function sideBarDisplay() {
    const titles = ["What's New","What To Wear","Designers","Clothing","Shoes","Bags","Accessories","Watches","Sport","Home & Gifts","People & Planet","Sale"]
    return(
      <div onClick={handleClickOutside} id="overlay" className='bg-black fixed inset-0 bg-opacity-70 z-40'>
      
      <div className={`bg-white z-50 w-4/5 h-full flex flex-col overflow-y-auto`}>
      <div className='flex'><img  className='w-4 ml-8 mt-7 ' src={UkFlag}/> <img className='w-5 mt-6 pl-1 ' src={down} /></div>
      <button className='my-8 flex items-center  mx-8  bg-black text-white w-9/12 py-3 rounded-sm'><p className='mx-auto text-sm'>Sign In / Register</p></button>
      
      {titles.map((title)=>{
        return (<p className='ml-8 font-serif georgia font-normal mt-6 text-sm'>{title} </p>)
      })}
      </div>
      </div>
    )
  }
  return (
    <div className='h-full'>
      {sideBar===true?sideBarDisplay():null}
      {showRibbon && (<div className= "w-full bg-customGrey h-16 flex justify-center items-center  ">
        <div className=''>
          <h1 className='text-white font-serif georgia font-normal text-xs '>Guess what's just landed? Shop the latest arrivals now</h1>
        </div>
      </div>)}

      
      <div className='fixed w-full '>
      <div className='w-full flex flex-row py-3  bg-white '>
        <div className='basis-1/4  flex items-center  justify-evenly  pl-3 '>
        <CiMenuBurger onClick={()=>{setSideBar(true)}}/>
        <IoStarOutline className='' />
        </div>
        <div className='basis-1/2 flex items-center justify-center '>MR PORTER</div>
        <div className='basis-1/4 flex items-center justify-evenly '>
        <IoIosSearch />
        <IoBagOutline />
        </div>
        
      </div>
      <div className="w-full h-1 bg-black top-28"></div>
      </div>

      
      <img className="pb-8 h-4/6 w-auto object-cover pt-10" src={homepageimage}/>

      <div className='relative h-90vh w-full'>
      <img className="pb-8 h-90vh w-auto object-cover " src={homepageimage2}/>
      <div className=' w-full absolute flex flex-col justify-center inset-0 '>
        <div className="basis-4/6"></div>
        <div className='basis-2/6 '><p className="text-white text-medium font-serif georgia font-bold justify-center ml-4" >WHAT TO WEAR THIS WINTER</p>
        <p className='text-white ml-4 mr-4 text-base font-serif'>Heavy-duty outerwear, sumptuous knitwear and more cold-weather essentials from the world's best brands</p>
        <button className='bg-white ml-4 w-11/12 mr-4 h-12 rounded text-sm'>Shop now</button>
        </div>
      </div>
      </div>

    </div>
  )
}

export default App
