import React from 'react';
import Link from 'next/link'
import GithubIcon from './GithubIcon.js';
const Footer = () => {
    return (
        <div>
            <footer class="bg-gray-200 text-center lg:text-left">
                <div class="text-gray-700 text-center p-4 w-full text-sm font-bold leading-normal text-center">
                    © 2022 Copyright: Follow
                    <a class="github-button text-orange-700" href="https://github.com/oslabs-beta/Alana.js" aria-label="Follow @alana on GitHub"> @Alana.js</a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;