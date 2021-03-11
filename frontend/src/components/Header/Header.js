import { React, useState } from 'react'
import  './Header.scss'

const Header = () => {
    const [isHidden, setIsHidden] = useState(true);
    const toggleMenu = () => {
        setIsHidden(!isHidden);
    }

    return(
        <nav class="flex items-center bg-gray-800 p-3 flex-wrap">
            <a href="#" class="p-2  inline-flex items-center m-0">
                {/* svg */}
                <span class="text-white text-xl font-bold uppercase tracking-wide">Geddam</span>
            </a>



           

            <div class={ isHidden ? "header-nav w-full lg:inline-flex lg:flex-grow lg:w-auto hidden" : "header-nav w-full lg:inline-flex lg:flex-grow lg:w-auto order-2" } id="navigation">

                <div class="lg:inline-flex lg:flex-row lg:ml-auto text-white flex flex-col items-start ml-auto mr-auto">
                    <a href="#" class="lg:inline-flex lg:w-auto px-3 py-2 rounded  hover:text-white  hover:bg-gray-900">
                        <span>Home</span>
                    </a>
                    <a href="#" class="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:text-white hover:bg-gray-900">
                        <span>About</span>
                    </a>
                    <a href="#" class="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:text-white hover:bg-gray-900">
                        <span>Services</span>
                    </a>
                </div>

                
            </div>

            <div class="lg:inline-flex lg:flex-row lg:ml-auto text-white flex  items-start self-end flex-row">
                    <a href="#" class="lg:inline-flex lg:w-auto px-3 py-2 rounded  hover:text-white  hover:bg-gray-900">
                        <span><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                    </a>
                    <a href="#" class="lg:inline-flex lg:w-auto px-3 py-2 rounded  hover:text-white  hover:bg-gray-900">
                        <span><i class="fa fa-user" aria-hidden="true"></i></span>
                    </a>
            </div>



            <button class="text-white order-1 inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto outline-none focus:outline-none"
                onClick={toggleMenu}>
                <i class="fa fa-bars" aria-hidden="true"></i>
            </button>



        </nav>
    )
}

export default Header;