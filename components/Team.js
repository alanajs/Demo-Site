import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
// import AL from '../public/AL.png';
import GithubIcon from './GithubIcon.js';
import LinkedinIcon from './LinkedinIcon.js';
// https://tailwindcomponents.com/component/free-tailwind-css-team-component


const TeamCard = (props) => {
    return (
        <div>

<div class="h-screen bg-gradient-to-br from-gray-500 to-gray-800">
        <div class="container flex justify-center mx-auto pt-16">
                        <div>
                            <h1 class="xl:text-4xl text-3xl text-center text-white font-bold mx-auto">Meet the Team</h1>
                        </div>
        </div>
  <div class = "flex items-center justify-center">
    <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-8">
     <Image src={props.img} alt="Amy Liang" width="100" height="100" className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"></Image>
     <h1 class="text-lg text-gray-700"> Amy Liang </h1>
     <h3 class="text-sm text-gray-400 "> Software Engineer </h3>
     <p class="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <div class="w-full flex justify-center pt-5 pb-5">
        <Link href={props.github}>
            <a class="px-8 tracking-wide"><GithubIcon /></a>
        </Link>
        <Link href={props.linkedin}>
            <a class="px-8 tracking-wide"><LinkedinIcon /></a>
        </Link>
        </div>
   </div>

   <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-8">
     {/* <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="product designer"> */}
     <Image src={props.img} alt="Tin" width="100" height="100" className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"></Image>
     <h1 class="text-lg text-gray-700"> Tin Khin </h1>
     <h3 class="text-sm text-gray-400 "> Software Engineer </h3>
     <p class="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
     {/* <button class="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Hire Me</button> */}
        <div class="w-full flex justify-center pt-5 pb-5">
        <Link href={props.github}>
            {/* <a class="px-8 py-2 mt-8 tracking-wide "><GithubIcon /></a> */}
            <a class="px-8 tracking-wide"><GithubIcon /></a>
        </Link>
        
        <Link href={props.linkedin}>
            <a class="px-8 tracking-wide"><LinkedinIcon /></a>
        </Link>
        </div>
   </div>

   <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-8">
     {/* <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="product designer"> */}
     <Image src={props.img} alt="Amy" width="100" height="100" className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"></Image>
     <h1 class="text-lg text-gray-700"> Jae Hyun Ha </h1>
     <h3 class="text-sm text-gray-400 "> Software Engineer  </h3>
     <p class="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
     <div class="w-full flex justify-center pt-5 pb-5">
        <Link href={props.github}>
            {/* <a class="px-8 py-2 mt-8 tracking-wide "><GithubIcon /></a> */}
            <a class="px-8 tracking-wide"><GithubIcon /></a>
        </Link>
        
        <Link href="https://www.linkedin.com/in/jae-hyun-ha/">
            <a class="px-8 tracking-wide"><LinkedinIcon /></a>
        </Link>
        </div>
   </div>

   <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-8">
     {/* <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="product designer"> */}
     <Image src={props.img} alt="Amy" width="100" height="100" className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"></Image>
     <h1 class="text-lg text-gray-700"> Eugene Lee </h1>
     <h3 class="text-sm text-gray-400 "> Software Engineer </h3>
     <p class="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
     <div class="w-full flex justify-center pt-5 pb-5">
        <Link href={props.github}>
            {/* <a class="px-8 py-2 mt-8 tracking-wide "><GithubIcon /></a> */}
            <a class="px-8 tracking-wide"><GithubIcon /></a>
        </Link>
        
        <Link href={props.linkedin}>
            <a class="px-8 tracking-wide"><LinkedinIcon /></a>
        </Link>
        </div>
        </div>
   </div>
 </div>

 







{/* <div> */}
                            {/* <h1 class="font-bold text-3xl text-center mb-1">{props.name}</h1> */}
                            {/* <Image src={props.img} alt="Amy" width="100" height="100" className="rounded-full object-cover h-full w-full shadow-md"/> */}
                            {/* <p class="text-gray-800 text-sm text-center">Software Engineer</p> */}
                            {/* <p class="text-center text-gray-600 text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                            {/* <div class="w-full flex justify-center pt-5 pb-5"> */}
                                {/* <a href="javascript:void(0)" class="mx-5"></a> */}
                                    {/* <div aria-label="Github" role="img"> */}

            {/* <Link href={props.github}> */}
                {/* <a><GithubIcon /></a> */}
            {/* </Link> */}
            {/* <Link href={props.linkedin}> */}
                {/* <a><LinkedinIcon /></a> */}
            {/* </Link> */}

    {/* </div> */}


    </div>
    );
}

export default TeamCard;