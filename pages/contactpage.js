import Head from 'next/head'
import React from 'react';
import GithubIcon from '../components/GithubIcon';
import LinkedinIcon from '../components/LinkedinIcon';

function ContactPage() {
    return (
    <div>
       <Head>
            <title>alanajs Contact</title>
            <meta name="alanajs Contact" content="alanajs" />
            <link rel="icon" href="./alana-Logo.png" />
        </Head>
        <main>
            <div class="flex flex-col justify-center text-center">
                <img class='h-1/4' src='./logo.jpg'/>
                <div class='justify-center my-20 space-y-3.5' >
                <h1 class='text-3xl font-bold'>Contact Us</h1>
                {/* <h2 class='text-xl font-bold'>Communication is everything!!!</h2> */}
                <p>Want to contribute? Join us in making AWS SDK simpler for developers. Star us on Github, or contact us below. </p>
                <div class='flex flex-row justify-evenly py-5'>
                    <div class='flex flex-col justify-center items-center'>
                     <a href='mailto:alana.javascript@gmail.com'><img class='w-14 h-14' src='./email.png'/></a>
                        {/* <p>Email</p> */}
                        <a href='mailto:alana.javascript@gmail.com' target="_blank">alana.javascript@gmail.com</a>
                    </div>
                    <div class='flex flex-col justify-center items-center'>
                    <a href='https://www.reddit.com/user/alana_js' target="_blank"><img class='w-14 h-14' src='./reddit-logo.png'/></a>
                        {/* <p>Reddit</p> */}
                        {/* <a href='https://www.reddit.com/user/alana_js'>Follow Us</a> */}
                    </div>
                    <div class='flex flex-col justify-center items-center'>
                        <a href='https://www.linkedin.com/company/alanajs/' target="_blank"> <LinkedinIcon /> </a>
                        {/* <p>LinkedIn</p> */}
                        {/* <a href='https://www.linkedin.com/company/alanajs/'>Follow Us</a> */}
                    </div>
                    <div class='flex flex-col justify-center items-center'>
                        <a href='https://github.com/oslabs-beta/alanajs' target="_blank"><GithubIcon dark={true}/></a>
                        {/* <p>GitHub</p> */}
                        {/* <a href='https://github.com/oslabs-beta/Alana.js'>Follow Us</a> */}
                    </div>
                </div>
                </div>
            </div>
        </main>
    </div>    
  )}
  
  export default ContactPage;

 