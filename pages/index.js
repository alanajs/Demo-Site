import React from 'react';
import Head from 'next/head'
import Team from '../components/Team.js';
import Link from 'next/link'
import { gsap } from "gsap/dist/gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
const { useEffect, useRef } = React;

const Home = () => {
    const hello = gsap.registerPlugin(TextPlugin); 
    const npmRef = useRef(); 
    const cliRef = useRef(); 
  
  useEffect(() => {
    gsap.to(npmRef.current, {duration:3, text: "alana.invoke('newFunc');", ease: "none", repeat:"3"});
    gsap.to(cliRef.current, {duration:3, text: "alana create newFunc file.js", ease: "none", repeat:"3"});
    });
    
    return (
        <div>
            <Head>
                <title>alanajs Homepage</title>
                <meta name="alanajs Homepage" content="alanajs" />
                <link rel="icon" href="./alana-Logo.png" />
            </Head>
            <header>
                <div class="w-full bg-center bg-cover h-full py-36">
                    <div class="max-w-7xl mx-auto bg-white bg-opacity-50 container flex items-center justify-center">
                    <div class="flex flex-col justify-center items-center">
                        <img class='w-1/5 py-4' src='./alana-Logo.png' />              
                        <div id='title' class="text-center">
                            <h1 id='title' class= "text-5xl text-black lg:text-6xl px-5">alanajs</h1>
                            <h2 class = "text-2xl  text-gray-700 lg:text-1xl leading-9 lg:leading-10 font-secular">AWS Lambda and API Gateway, simplified for JavaScript</h2>
                            <Link href="/documentation"><button class="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500" >Get Started</button></Link>
                        </div>
                        </div>
                    </div>
                </div>
            </header>
            <section class="bg-slate-100 bg-opacity-50">
            <div class="max-w-7xl px-5 py-16 mx-auto">
                    <div class="items-center md:flex md:space-x-6 py-28">                        
                        <div class="mt-8 md:mt-0 md:w-1/2 pr-8">
                            <div class="x-auto">
                                <div class="w-full bg-sky-900 shadow-lg rounded-lg overflow-hidden">
                                    <div id="header-buttons" class="py-3 px-4 flex">
                                        <div class="rounded-full w-3 h-3 bg-red-500 mr-2"></div>
                                        <div class="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
                                        <div class="rounded-full w-3 h-3 bg-green-500"></div>
                                    </div>
                                    <div id="code-area" class="py-4 px-4 mt-1 text-white text-xl">
                                        <div class="mb-2">
                                            <span class="text-blue-300">import</span> <span class="text-white-400">alana</span> <span class="text-blue-300">from</span><span class="text-red-300"> 'alanajs'</span>;
                                        </div>
                                        <div class="pt-7 mb-2">
                                            <p class= "text-white-300"> alana.createFunction(params, options);</p>
                                        </div>                                              
                                        <div class="pt-7 mb-2 h-10 text-white-300">
                                            <span class="text-white-200" ref={npmRef}><div></div></span>
                                        </div>
                                    </div>
                                </div>
                            </div>                
                        </div>                        
                        <div class="md:w-1/2"> 
                            <h3 class="text-3xl font-semibold leading-10 lg:leading-10 text-gray-700">alanajs simplifies AWS SDK from development to production</h3>
                            <p class="text-xl leading-10 tracking-normal lg:leading-9 mt-4 text-gray-600">alanajs is a free, open source npm package that makes it easy to create and deploy Lambda functions, incorporate microservices in your application, and build on AWS API gateway.</p>
                            <p class="text-xl leading-10 tracking-normal lg:leading-9 mt-4 pt-2 text-gray-600"> Designed specifically for the Node.js runtime environment, alanajs consolidates functionality provided by AWS SDK and IDE tookits, automating your deployment and configuration tasks so that you can focus on writing code. </p>
                        </div>                        
                    </div>
                </div>
            </section>
            <section class="bg-slate-100">
                <div class="max-w-7xl px-3 py-16 mx-auto">
                    <div class="items-center md:flex md:space-x-6 py-28">
                        <div class="md:w-1/2"> 
                            <h3 class="text-3xl font-semibold leading-10 lg:leading-10 text-gray-700">Create Lambda functions, build on API Gateway, and invoke functions in application — all with one simple installation</h3>
                            <p class="text-xl leading-10 lg:leading-9 mt-4 text-gray-600">alanajs provides two ways of interacting with the Amazon SDK with just one npm install. Import functions from the npm package to use within your application logic, or use the alanajs CLI to test and deploy functions and APIs with an easy-to-use interface. </p>
                        </div>            
                        <div class="mt-8 md:mt-0 md:w-1/2 pl-12">
                            <div class="x-auto">
                                <div class="w-full shadow-2xl subpixel-antialiased rounded shadow-1xl h-64 bg-black border-black">
                                    <div class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
                                        <div class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
                                        </div>
                                        <div class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
                                        </div>
                                        <div class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
                                        </div>
                                        <div class="mx-auto pr-16" id="terminaltitle">
                                            <p class="text-center text-sm">Terminal</p>
                                        </div>
                                    </div>
                                    <div class="pl-1 pt-1 pr-2 h-auto  text-white font-mono text-s bg-black" id="console">
                                        <p class="pb-3">Last login: Sat Feb 05 02:05:22 on console</p>
                                        <p class="pb-3">JohnDoe:Devprojects johndoe$</p>
                                        <p class="pb-3">johndoe$ <span class="text-green-200" ref={cliRef}><div></div></span></p>
                                    </div>
                                </div> 
                            </div>                           
                        </div>
                    </div>
                </div>
            </section>
            <Team />
        </div>

    );
}

export default Home;