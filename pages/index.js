import React from 'react';
import Link from 'next/link';
import Head from 'next/head'
import TeamCard from '../components/Team.js';
import AL from '../public/AL.png';

const Home = () => {
    return (
        <div>
            <Head>
                <title>Alana.JS</title>
                <meta name="description" content="Alana.JS" />
                <link rel="icon" href="./Alana2.png" />
            </Head>
            <header>
                <div class="w-full bg-center bg-cover h-screen">
                
                    {/* <div class="w-full h-full bg-white bg-opacity-50 container flex items-center justify-center"> */}
                    <div class="max-w-7xl mx-auto h-screen bg-white bg-opacity-50 container flex items-center justify-center">
                    <div class="flex flex-col justify-center items-center">
                        <img src='./alana.trans.png' />              
                        <div class="text-center">
                            <h1 class= "text-5xl font-semibold text-black lg:text-6xl">Alana.js</h1>
                            {/* <span> </span> */}
                            <h2 class = "text-2xl font-semibold text-gray-800 lg:text-1xl">AWS Lambda and API Gateway, simplified for JavaScript</h2>
                            <button class="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Get Started</button>
                        </div>
                        </div>
                    </div>
                </div>
            </header>

    <section class="bg-gray-700 bg-opacity-50">
    <div class="max-w-7xl py-16 mx-auto">
            <div class="items-center md:flex md:space-x-6">
                <div class="md:mt-0 md:w-1/2">
                    <div class="flex items-center justify-center">
                        <div class="max-w-md">
                            <img class="object-cover object-center w-full rounded-md shadow" styles="height: 500px;"
                                src='https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png' />
                        </div>
                    </div>
                </div>

                
                <div class="md:w-1/2">
                    <h3 class="text-3xl font-semibold text-gray-800">Alana.js is an all-in-one tool that simplifies AWS SDK from development to production</h3>
                    <p class="max-w-md mt-4 text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a href="#" class="block mt-8 text-indigo-700 underline">Experienced team</a>
                </div>

            </div>

        </div>
    </section>


    <section class="bg-white">
    <div class="max-w-7xl px-5 py-16 mx-auto">
            <div class="items-center md:flex md:space-x-6">
            <div class="md:w-1/2 text-justify"> 
                    <h3 class="text-3xl font-semibold">Simplify the deployment and invocation of Lambda functions</h3>
                    <p class="mt-4 text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a href="#" class="block mt-8 text-indigo-700 underline">Experienced team</a>
                </div>
    
                <div class="mt-8 md:mt-0 md:w-1/2">
                    <div class="flex items-center justify-center">
                        {/* <div class=""> */}
                            <img class="object-cover object-center rounded-md shadow" styles="height: 500px;"
                               src= 'https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png' ></img>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>

            {/* <div class="container flex justify-center mx-auto pt-16">
                <div>
                    <h1 class="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">Meet the Team</h1>
                </div>
            </div> */}
            <TeamCard img={AL} name="Amy Liang" github="https://github.com/amyliangny" linkedin="https://www.linkedin.com/in/amyliang18/" />
            {/* <TeamCard img={AL} name="Tin Khin" github="https://github.com/Khin92" linkedin="https://www.linkedin.com/in/tin-khin-4a0428230/" /> */}
            {/* **Add Teammates here** */}
        </div>

    );
}

export default Home;