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

    
    <div class="bg-gray-100 px-10 pt-10">
        <div class="container mx-auto">
            <div role="list" aria-label="Behind the scenes People " class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                <div role="listitem" class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                    <div class="rounded overflow-hidden shadow-md bg-white">
                        <div class="absolute -mt-20 w-full flex justify-center">
                            {/* //not sure why image isn't round */}
                            <div class="h-32 w-32">
                                <Image src={props.img} alt="Display Picture of Amy Liang" class="rounded-full object-cover h-full w-full shadow-md" />
                            </div>
                        </div>
                        <div class="px-6 mt-16">
                            <h1 class="font-bold text-3xl text-center mb-1">{props.name}</h1>
                            <p class="text-gray-800 text-sm text-center">Software Engineer</p>
                            <p class="text-center text-gray-600 text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p>
                            <div class="w-full flex justify-center pt-5 pb-5 ">
                                <div class="block mx-4 mt-2">
                                <Link href={props.github}>
                                    <a><GithubIcon /></a>
                                </Link>
                                </div>
                                <div class="block mx-4 mt-2">
                                <Link href={props.linkedin} className="feather ">
                                        <a><LinkedinIcon /></a>
                                </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
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