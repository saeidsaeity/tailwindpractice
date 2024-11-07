export default function SideBarDisplay({ sideBar, setSideBar }) {
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