import { useTheme } from "@/contexts/Theme"
import { ButtonSwitch } from "./buttonSwitch"

import { GiHamburgerMenu } from 'react-icons/gi'

import { useState } from 'react'

import { Link } from 'react-scroll'


export const Headers = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [activeClass, setActiveClass] = useState(false)

    const menu = () => {
        setOpenMenu(!openMenu)
        setActiveClass(!activeClass)
    }

    return (
        <nav
            className=" md:w-full md:m-auto p-2 backdrop-blur
              dark:text-gray-500 md:absolute   "
        >
            <section className="w-10/12 m-auto md:m-auto md:flex
             md:items-center md:justify-between">
                <div className="flex items-center justify-between " >
                    <span className="text-2xl font-[poppins]">
                        <img className="h-12 inline cursor-pointer bg-black rounded dark:bg-transparent" src="assets/headerLogo.png" alt="" />
                    </span>

                    {openMenu === false &&
                        <span className="px-4 cursor-pointer mx-2 md:hidden block">
                            <svg onClick={menu} className=" swap-off fill-current"
                                xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                        </span>
                    }
                    {openMenu === true &&
                        <span className="px-4 cursor-pointer mx-2 md:hidden block">
                            <svg onClick={menu} className="swap-on fill-current"
                                xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                viewBox="0 0 512 512"><polygon
                                    points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256
                             112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                        </span>
                    }

                </div>


                <ul className={`md:flex md:items-center z-[-1]
                 md:z-auto md:static left-0 ms:w-auto py-4 md:opacity-100
                 
                 ${activeClass === true ? 'opacity-100 top-[80px]' :
                        'opacity-0 top-[-400px] absolute'} transition-all ease-in`}>

                    <li className="mx-4 my-6 md:my-0">
                        <Link to="Home" smooth={true} offset={50}
                            duration={500} href="" className="text-xl hover:text-gray-500
                        dark:hover:text-gray-600 duration-500"
                        >
                            HOME
                        </Link>
                    </li>
                    <li className="mx-4 my-6 md:my-0 md:-0">
                        <Link to="Sobre" smooth={true} offset={50}
                            duration={500} href="" className="text-xl hover:text-gray-500
                        dark:hover:text-gray-600 duration-500"
                        >
                            SOBRE
                        </Link>
                    </li>
                    <li className="mx-4  my-6 md:my-0 md:-0">
                        <Link to="tecnologia" smooth={true} offset={30}
                            duration={500} href="" className="text-xl hover:text-gray-500
                        dark:hover:text-gray-600 duration-500"
                        >
                            TECNOLOGIAS
                        </Link>
                    </li>
                    <li className="mx-4 my-6  md:my-0 md:-0">
                        <Link to="projetos" smooth={true} offset={30}
                            duration={500} href="" className="text-xl hover:text-gray-500
                        dark:hover:text-gray-600 duration-500"
                        >
                            PROJETOS
                        </Link>
                    </li>


                    <ButtonSwitch />

                </ul>


            </section>
        </nav>
    )
}