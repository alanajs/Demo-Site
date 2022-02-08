import React from 'react';
import Link from 'next/link'
import GithubIcon from './GithubIcon.js';
import LinkedinIcon from './LinkedinIcon.js';


const Team = (props) => {
    return (
        <div>
            <div class="bg-gradient-to-br from-gray-500 to-gray-800 max-w-10xl mx-auto py-28">
                <div class="container flex justify-center mx-auto pt-12">
                    <div>
                        <h1 class="xl:text-4xl text-3xl text-center text-white font-bold mx-auto">Meet the Team</h1>
                    </div>
                </div>
                <div class = "flex items-center justify-center shrink flex-wrap">
                    <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-8 bg-gray-200">
                        <img src="./Amy.jpg" alt="Amy Liang" width="100" height="100" className="mb-3 w-32 h-32 rounded-full mx-auto"></img>
                        <h1 class="text-lg text-gray-700"> Amy Liang </h1>
                        <h3 class="text-sm text-gray-600 "> Software Engineer </h3>
                        <div class="w-full flex justify-center pt-5 pb-5">
                            <Link href='https://github.com/amyliangny'>
                                <a target="_blank" class="px-8 tracking-wide"><GithubIcon dark={true}/></a>
                            </Link>
                            <Link href='https://www.linkedin.com/in/amyliang18/'>
                                <a target="_blank" class="px-8 tracking-wide"><LinkedinIcon /></a>
                            </Link>
                        </div>
                    </div>
                    <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-8 bg-gray-200">
                        <img src="./Tin.jpeg" alt="Tin" width="100" height="100" className="mb-3 w-32 h-32 rounded-full mx-auto"></img>
                        <h1 class="text-lg text-gray-700"> Tin Khin </h1>
                        <h3 class="text-sm text-gray-600 "> Software Engineer </h3>
                        <div class="w-full flex justify-center pt-5 pb-5">
                            <Link href='https://github.com/Khin92'>
                                <a target="_blank" class="px-8 tracking-wide"><GithubIcon dark={true}/></a>
                            </Link>                            
                            <Link href='https://www.linkedin.com/in/tin-khin/'>
                                <a target="_blank" class="px-8 tracking-wide"><LinkedinIcon /></a>
                            </Link>
                        </div>
                    </div>
                    <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-8 bg-gray-200">
                        <img src="./JaeHyun.png" alt="JaeHyun" width="100" height="100" className="mb-3 w-32 h-32 rounded-full mx-auto"></img>
                        <h1 class="text-lg text-gray-700"> Jae Hyun Ha </h1>
                        <h3 class="text-sm text-gray-600 ">Fullstack Software Engineer </h3>
                        <div class="w-full flex justify-center pt-5 pb-5">
                            <Link href='https://github.com/msmintyfresh'>
                                <a target="_blank" class="px-8 tracking-wide"><GithubIcon dark={true}/></a>
                            </Link>                        
                            <Link href='https://www.linkedin.com/in/jae-hyun-ha/'>
                                <a target="_blank" class="px-8 tracking-wide"><LinkedinIcon /></a>
                            </Link>
                        </div>
                    </div>
                    <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-8 bg-gray-200">
                        <img src="./eugene.png" alt="Eugene" width="100" height="100" className="mb-3 w-32 h-32 rounded-full mx-auto"></img>
                        <h1 class="text-lg text-gray-700"> Eugene Lee</h1>
                        <h3 class="text-sm text-gray-600 "> Software Engineer </h3>
                        <div class="w-full flex justify-center pt-5 pb-5">
                            <Link href='https://github.com/scc135'>
                                <a target="_blank" class="px-8 tracking-wide"><GithubIcon dark={true}/></a>
                            </Link>                        
                            <Link href='https://www.linkedin.com/in/eugleenyc/'>
                                <a target="_blank" class="px-8 tracking-wide"><LinkedinIcon /></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;