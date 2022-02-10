import React from 'react';
import Link from 'next/link'
import GithubIcon from './GithubIcon.js';
const Footer = () => {
    return (
        <div>
            <footer class="bg-gray-200 sticky bottom-0 right-0 left-0 text-center lg:text-left">
                <div class="text-gray-700 text-center p-4 w-full text-sm font-bold leading-normal text-center">
                    © 2022 Copyright: alanajs
                    <div>
                        Follow and star our Github page 
                        <a class="github-button text-orange-500 underline" target='_blank' href="https://github.com/oslabs-beta/Alana.js" aria-label="Follow @alana on GitHub"> here</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;