import React from 'react';
import Link from 'next/link'
import GithubIcon from './GithubIcon.js';
const Footer = () => {
    return (
        <div>
            <footer class="bg-gray-200 text-center lg:text-left">
                <div class="text-gray-700 text-center p-4 w-full text-sm font-bold leading-normal text-center">
                    <ul class='flex flex-row text-xl space-x-10 justify-center object-scale-down  text-orange-700'>
                        <li class="mt-6"><a class="rounded outline-hidden outline-offset-4 hover:outline-double" href="/tutorial">Tutorial</a></li>
                        <li class="mt-6"><a class="rounded outline-hidden outline-offset-4 hover:outline-double" href="/contact">Contact</a></li>
                        <li class="mt-6"><a class="rounded outline-hidden outline-offset-4 hover:outline-double" href="mailto:tinhtarkhin@gmail.com">Email</a></li>
                        <li class="mt-6 flex flex-row rounded outline-hidden outline-offset-4 hover:outline-double">
                            <a href="https://github.com/oslabs-beta/Alana.js"><GithubIcon dark={true}/></a>                            
                        </li>
                    </ul>
                    <br/>
                    © 2022 Copyright: Follow
                    <a class="github-button text-orange-700" href="https://github.com/oslabs-beta/Alana.js" aria-label="Follow @alana on GitHub"> @Alana.js</a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;