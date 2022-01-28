import React from 'react';
import Link from 'next/link';
import TeamCard from '../components/Team.js';
import AL from '../public/AL.png';

const Home = () => {
    return (
        <div>
            
            <header>


    <div class="w-full bg-center bg-cover h-96" styles="background-image: url(https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette_1258-48251.jpg?size=626&ext=jpg);">
        <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
            <div class="text-center">
                <h1 class="text-2xl font-semibold text-white lg:text-4xl">Alana.js</h1>
                <h2 class = "text-2xl font-semibold text-white lg:text-2xl">AWS Lambda, simplified</h2>
                <button class="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start now</button>
            </div>
        </div>
    </div>
</header>




    <div class="container flex justify-center mx-auto pt-16">
        <div>
            <p class="text-gray-500 text-lg text-center font-normal pb-3">BUILDING TEAM</p>
            <h1 class="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
        </div>
    </div>
            <TeamCard img={AL} name="Amy Liang" github="https://github.com/amyliangny" linkedin="https://www.linkedin.com/in/amyliang18/" />
            <TeamCard img={AL} name="Amy Liang" github="https://github.com/amyliangny" linkedin="https://www.linkedin.com/in/amyliang18/" />
            {/* **Add Teammates here** */}
                                {/* </div> */}
    {/* //                         </div> */}
    {/* //                     </div> */}
    {/* //                  </div> */}
    {/* // </div> */}
</div>

    );
}

export default Home;