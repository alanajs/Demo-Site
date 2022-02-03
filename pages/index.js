import React from 'react';
import Link from 'next/link';
import Head from 'next/head'
import TeamCard from '../components/Team.js';

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
                            <h2 class = "text-2xl font-semibold text-gray-700 lg:text-1xl leading-9 lg:leading-10">AWS Lambda and API Gateway, simplified for JavaScript</h2>
                            <a href="/documentation"><button class="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500" >Get Started</button></a>
                        </div>
                        </div>
                    </div>
                </div>
            </header>

            <section class="bg-slate-100 bg-opacity-50 h-screen">
            <div class="max-w-7xl py-16 mx-auto">
                    <div class="items-center md:flex md:space-x-6 pt-28">
                        <div class="md:mt-0 md:w-1/2">
                            <div class="flex items-center justify-center">
                                <div class="max-w-md">
                                    <img class="object-cover object-center w-full rounded-md shadow" styles="height: 500px;"
                                        src='https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png' />
                                </div>
                            </div>
                        </div>

                        
                        <div class="md:w-1/2">
                            
                            <h3 class="text-3xl font-semibold leading-10 lg:leading-10 text-gray-700">Alana.js is an all-in-one tool that simplifies AWS SDK from development to production</h3>
                        
                            <p class="text-xl leading-10 lg:leading-9 mt-4 text-gray-600">Make setting up Lambda microservices easier than ever.
                            
                            Designed specifically for the Node.js runtime environment, Alana.js consolidates functionality provided by AWS Toolkit and AWS CLI, automating your deployment and configuration tasks so that you could focus on writing code. </p>
                        </div>
                        
                    </div>

                </div>
            </section>


            <section class="bg-white h-screen">
            <div class="max-w-7xl px-5 py-16 mx-auto">
                    <div class="items-center md:flex md:space-x-6 pt-28">
                    <div class="md:w-1/2 text-justify"> 

                            <h3 class="text-3xl font-semibold leading-10 lg:leading-10 text-gray-600">Create Lambda functions, build on API Gateway, and invoke functions in application — all with one simple installation.</h3>

                            <p class="text-xl leading-10 lg:leading-9 mt-4 text-gray-500">Alana.js provides two ways of interacting with the Amazon SDK with just one npm install. Import functions from the npm package to use within your application logic, or use the CLI to test and deploy functions and APIs with a easy-to-use interface. </p>
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
            <TeamCard />
            {/* <TeamCard img={Tin} name="Tin Khin" github="https://github.com/Khin92" linkedin="https://www.linkedin.com/in/tin-khin/" /> */}
            {/* **Add Teammates here** */}
        </div>

    );
}

export default Home;