import React, {useState} from 'react';
import Link from 'next/link'
import GithubIcon from './GithubIcon.js';
const Nav = () => {
    const [menuShow, setMenuShow] = useState(false);
    const showMenu = () => {
        if (menuShow === true) setMenuShow(false);
        else setMenuShow(true);
    }
    return (
        <nav class="bg-white shadow bg-gray-800 dark:bg-gray-800 font-semibold text-2xl sticky top-0 left-0 right-0 h-20">
        <div class="container px-6 py-4 mx-auto">
            <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex items-top justify-between">
                    <div class="text-xl font-semibold text-gray-700 flex flex-row items-top">
                        <img class='w-14 h-14' src='./alana-Logo.png'/>
                        <a id="title" class=" text-2xl font-bold text-gray-200 dark:text-white lg:text-3xl hover:text-gray-400 dark:hover:text-gray-300 pt-2 pl-2" href="/">alanajs</a>
                    </div>                
                    <div class="flex flex-col lg:hidden">
                        <div class=" sticky top-7 left-0 mx-4 mt-2 flex justify-end">
                            <button type="button" class="text-gray-200 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 pb-2" aria-label="toggle menu" onClick={showMenu} >
                                <svg viewBox="0 0 24 24" class="w-10 h-10 fill-current">
                                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                        {menuShow ? 
                            <div class="flex flex-col sticky top-0 left-0 bg-gray-800 dark:bg-gray-800">
                                <Link href="/documentation"><a class="text-right mx-4 mt-1 text-med text-gray-200 capitalize lg:mt-0 hover:text-gray-400 font-semibold">Documentation</a></Link>
                                <Link href="/tutorial"><a class="text-right mx-4 mt-1 text-med text-gray-200 capitalize lg:mt-0 hover:text-gray-400 font-semibold">Tutorial</a></Link>
                                <Link href="/contact"><a class="text-right mx-4 mt-1 text-med text-gray-200 lg:mt-0 hover:text-gray-400 font-semibold">Contact</a></Link>
                                <Link href="https://github.com/oslabs-beta/Alana.js"><a target="_blank" class="text-right mx-4 mt-1 text-med text-gray-200 capitalize lg:mt-0 dark:text-gray-200 hover:text-gray-400 ">Github</a></Link>
                            </div> : null}
                        </div>
                    </div>
                    <div class="hidden -mx-4 lg:inline-flex lg:items-center">
                        <Link href="/documentation"><a class="block mx-4 mt-2 text-xl text-gray-200 capitalize lg:mt-0 dark:text-gray-200 hover:text-gray-400 font-semibold">Documentation</a></Link>
                        <Link href="/tutorial"><a class="block mx-4 mt-2 text-xl text-gray-200 capitalize lg:mt-0 dark:text-gray-200 hover:text-gray-400 font-semibold">Tutorial</a></Link>
                        <Link href="/contactpage"><a class="block mx-4 mt-2 text-xl text-gray-200 lg:mt-0 dark:text-gray-200 hover:text-gray-400 font-semibold">Contact</a></Link>
                        <Link href="https://github.com/oslabs-beta/Alana.js"><a target="_blank" class="block mx-4 mt-2"><GithubIcon dark={false}/></a></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;