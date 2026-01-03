import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";

import logo from "../assets/logo/Urban RWA Token/Urban RWA Token logo 3.png";
import { MdDashboard, MdNotificationsNone } from "react-icons/md";

import icon from "../assets/logo/Urban RWA Token/favicon.png"
import { Link } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { GiDiamonds, GiTakeMyMoney } from "react-icons/gi";
import { LiaShareAltSolid } from "react-icons/lia";
import { GrTransaction } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuUserRound } from "react-icons/lu";
 import walletIcon from  "../assets/images/sidenavbt.png"





const SideNav = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [openTransaction, setOpenTransaction] = useState(false);
    // Toggle the sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);

        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const closeSidebar = () => {
        if (isMobile) {
            setIsSidebarOpen(false);
        }

    };

    return (
        <>
            <div className=" Gregular   ">
                <div className="   neoCard   py-1   fixed w-full z-[10] flex gap-5">
                    <button
                        aria-controls="default-sidebar"
                        type="button"
                        onClick={toggleSidebar} // Toggle sidebar visibility on click
                        className="tablet:inline-flex items-center p-2 mt-2 ms-3 text-sm rounded-lg   h-fit hidden focus:outline-none focus:ring-2 text-gray-400   focus:ring-gray-600"
                    >
                        <span className="sr-only">Open sidebar</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                clipRule="evenodd"
                                fillRule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                            />
                        </svg>
                    </button>

                    <div className="   flex  justify-end w-full   px-2 sm:px-8 py-1 tablet:ml-0">
                        <div className="flex   items-center gap-10">

                             <div className="rounded-full p-[5px] neoCard ">
                                <img src={icon} className="w-8 h-fit " alt="" />
                            </div>
                            <div className="flex text-right flex-col">
                                <p className="sm:text-base text-sm text-[#000000] font-[500]" >  Name</p>
                                {/* <p className="font-light text-sm  text-gray-400 ">Admin number 2</p> */}
                            </div>

                           

                            {/* <div className=" relative rounded-full p-[5px] hovNeoCard   ">
                                <MdNotificationsNone className="  text-2xl text-[var(----text-secondry)]" />
                                <span className=" absolute top-0 right-0 rounded-full w-2 h-2 bg-red-600"></span>
                            </div> */}
                            <div className=" relative rounded-full p-[5px] hovNeoCard ">
                                <IoMdLogOut className="  text-2xl text-red-600" />
                            </div>
                        </div>
                    </div>
                </div>




                <div
                    onClick={closeSidebar}
                    className={` ${isSidebarOpen
                        ? "w-screen h-screen mt-14   fixed z-[10] "
                        : ""
                        }`}
                >
                    <aside
                        id="default-sidebar"
                        className={`fixed   neoCard    top-0 left-0 z-40 w-64 p-1 h-screen transition-transform ${isSidebarOpen
                            ? "translate-x-0  "
                            : "tablet:-translate-x-full tablet:shadow-none"
                            } translate-x-0`} // Dynamically apply translate-x-0 or -translate-x-full
                        aria-label="Sidebar"
                    >
                        <div
                            onClick={toggleSidebar}
                            className={`absolute ${isSidebarOpen ? "block" : "hidden"
                                } left-[96%] p-1 bg-gray-200 text-black rounded-lg text-sm top-20`}
                        >
                            {" "}
                            <BiArrowBack />{" "}
                        </div>

                        <div className="h-full    hide-scrollbar bg-[#FFFFFF]">
                            <div className="  rounded-br-2xl mb-10 py-3 neoCard">
                                <img className="w-[10rem] mx-auto" src={logo} alt="" />
                            </div>
                            <ul className="space-y-6 px-7 py-4 font-medium">
                                <li className=" ">
                                    <Link
                                        to="/"
                                        onClick={closeSidebar}
                                        className="flex items-center p-2  hovNeoCard rounded-lg text-[var(--text-primary)]  space-x-3  group  ]"
                                    >
                                        <MdDashboard className="text-2xl text-[var(--golden-txt1)]  " />
                                        <span className=" Gregular  text-lg text-gradient font-bold  ">
                                            Home
                                        </span>
                                    </Link>
                                </li>
                                <li className=" ">
                                    <Link
                                        to="/buytoken"
                                        onClick={closeSidebar}
                                        className="flex items-center p-2  hovNeoCard rounded-lg text-[var(--text-primary)]  space-x-3  group ]"
                                    >
                                        <GiTakeMyMoney className="text-2xl text-[var(--golden-txt1)]  " />
                                        <span className=" Gregular  text-lg text-gradient font-bold ">
                                            Buy Now
                                        </span>
                                    </Link>
                                </li>
                                <li className=" ">
                                    <Link
                                        to="/referral"
                                        onClick={closeSidebar}
                                        className="flex items-center p-2  hovNeoCard rounded-lg text-[var(--text-primary)]  space-x-3  group ]"
                                    >
                                        <LiaShareAltSolid className="text-2xl text-[var(--golden-txt1)]  " />
                                        <span className=" Gregular  text-lg text-gradient font-bold ">
                                            Referral
                                        </span>
                                    </Link>
                                </li>
                                <li className=" ">
                                    <div
                                        onClick={(e) => {
                                            e.stopPropagation(); // 🛑 prevent parent from closing sidebar
                                            setOpenTransaction(!openTransaction);
                                          }}
                                        className="flex items-center p-2  hovNeoCard rounded-lg text-[var(--text-primary)]  space-x-3  group ]"
                                    >
                                        <GrTransaction className="text-2xl text-[var(--golden-txt1)]  " />
                                        <span className=" Gregular  text-lg text-gradient font-bold ">
                                            Transaction
                                        </span>
                                    </div>
                                    {/* Animated dropdown */}
                                    <div
                                        className={`ml-5 overflow-hidden transition-all duration-100 ease-in-out ${openTransaction
                                            ? "max-h-40 opacity-100"
                                            : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <div className="flex ml-1 gap-3 my-5">
                                            <div className="relative border-2 border-dashed border-[var(--border-color2)]">
                                                <GiDiamonds className="text-[var(--golden-txt1)] absolute bottom-full left-1/2 transform -translate-x-1/2" />
                                                <GiDiamonds className="text-[var(--golden-txt1)] absolute top-full left-1/2 transform -translate-x-1/2" />
                                            </div>

                                            <div className="flex flex-col gap-3">


                                                <Link
                                                    to="/mytransactions"
                                                    onClick={closeSidebar}
                                                    className=" rounded-md px-2 py-1 relative inline-block group cursor-pointer text-[var(--text-primary)]"
                                                >
                                                    <span className="relative z-10 font-bold text-gradient text-lg">My Transaction</span>

                                                    <span
                                                        className="absolute left-0 bottom-0 w-0 h-[2px] bg-[var(--golden-txt1)] transition-all duration-300 group-hover:w-full"

                                                    ></span>
                                                </Link>
                                                <Link
                                                    to="/livetransactions"
                                                    onClick={closeSidebar}
                                                    className=" rounded-md px-2 py-1 relative inline-block group cursor-pointer text-[var(--text-primary)]"
                                                >
                                                    <span className="relative z-10 font-bold text-gradient text-lg">Live Transaction</span>

                                                    <span
                                                        className="absolute left-0 bottom-0 w-0 h-[2px] bg-[var(--golden-txt1)] transition-all duration-300 group-hover:w-full"

                                                    ></span>
                                                </Link>


                                            </div>
                                        </div>
                                    </div>
                                </li>


                              
                                <li className=" ">
                                    <Link
                                        to="/profile"
                                        onClick={closeSidebar}
                                        className="flex items-center p-2  hovNeoCard rounded-lg text-[var(--text-primary)]  space-x-3  group ]"
                                    >
                                        <FaRegCircleUser className="text-2xl text-[var(--golden-txt1)]  " />
                                        <span className=" Gregular  text-lg text-gradient font-bold ">
                                            Profile
                                        </span>
                                    </Link>
                                </li>
                              

                                <li>
  <Link
    to="/"
    onClick={closeSidebar}
    className="flex flex-col items-center text-center p-4 mt-28 hovNeoCard rounded-lg"
  >
    {/* Wallet Image */}
    <div className="p-3 mb-2 bg-[#2659F2] flex items-center justify-center !rounded-[5px]">
  <img
    src={walletIcon}
    alt="Wallet"
    className="w-25 h-15 object-contain"
  />
</div>


    {/* Wallet Address */}
    <span className="Gsemibold text-sm text-gradient mb-1">
      0x59ddsc6...8e27
    </span>

    {/* Description */}
    <p className="text-[var(--text-secondry)] text-[13px]">
      Your Current Connected Wallet
    </p>
  </Link>
</li>




                            </ul>


                        </div>
                    </aside>
                </div >
            </div >
        </>
    );
};

export default SideNav;
