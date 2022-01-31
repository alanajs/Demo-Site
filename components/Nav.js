import React from 'react';
import Link from 'next/link'
import GithubIcon from './GithubIcon.js';

const Nav = () => {
    return (
        // <div className="nav">
        //     <ul>
        //         <li>
        //             <Link href="/">
        //                 <a>Home</a>
        //             </Link>
        //         </li>
        //         <li>
        //             <Link href="/documentation">
        //                 <a>Documentation</a>
        //             </Link>
        //         </li>
        //         <li>
        //             <Link href="/contact">
        //                 <a>Contact</a>
        //             </Link>
        //         </li>
        //         <li>
        //             <Link href="https://github.com/oslabs-beta/Alana.js">
        //                 <a><GithubIcon /></a>
        //             </Link>
        //         </li>
        //     </ul>
        // </div>
            <nav class="bg-white shadow dark:bg-gray-800 fixed top-0 left-0 right-0">
            <div class="container px-6 py-4 mx-auto">
                <div class="lg:flex lg:items-center lg:justify-between">
                    <div class="flex items-center justify-between">
                        <div class="text-xl font-semibold text-gray-700 flex flex-row items-center">
                            <img class='object-scale-down' src='./alana.trans.png'/>
                            <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Alana.js</a>
                        </div>
                    
                        <div class="flex lg:hidden">
                            <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
    
                    <div class="hidden -mx-4 lg:flex lg:items-center">
                        <Link href="/"><a class="block mx-4 mt-2 text-med text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400">Home</a></Link>
                        <Link href="/documentation"><a class="block mx-4 mt-2 text-med text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400">Documentation</a></Link>
                        <Link href="/tutorial"><a class="block mx-4 mt-2 text-med text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400">Tutorial</a></Link>
                        <Link href="/contact"><a class="block mx-4 mt-2 text-med text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400">Contact</a></Link>
                        <Link href="https://github.com/oslabs-beta/Alana.js"><a class="block mx-4 mt-2"><GithubIcon /></a></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;