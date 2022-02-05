import Head from 'next/head'
import React from 'react';
import Link from 'next/link'

function ContactPage() {
    return (
    <div>
       <Head>
            <title>Alana.JS/Contact</title>
            <meta name="contact" content="Alana.js" />
            <link rel="icon" href="./alana.trans.png" />
        </Head>
        <main>
            <div class="flex flex-col justify-center text-center">
                <img class='h-1/4' src='./logo.jpg'/>
                <div class='justify-center my-20 space-y-3.5' >
                <h1 class='text-3xl font-bold'>Contact Us</h1>
                <h2 class='text-xl font-bold'>Communication is everything!!!</h2>
                <p>If you have any problems or concerns, please reach us by the following instruction</p>
                <div class='flex flex-row justify-evenly py-5'>
                    <div class='flex flex-col justify-center items-center'>
                        <img class='w-20 h-20' src='./email.png'/>
                        <p>Email</p>
                        <a href='mailto:alana.javascript@gmail.com'>alana.javascript@gmail.com</a>
                    </div>
                    <div class='flex flex-col justify-center items-center'>
                        <img class='w-20 h-20' src='./reddit.png'/>
                        <p>Reddit</p>
                        <a href='https://www.reddit.com/user/alana_js'>Follow Us</a>
                    </div>
                    <div class='flex flex-col justify-center items-center'>
                        <img class='w-20 h-20' src='./linkIn.png'/>
                        <p>LinkIn</p>
                        <a href='https://www.linkedin.com/in/tin-khin/'>Follow Us</a>
                    </div>
                    <div class='flex flex-col justify-center items-center'>
                        <img class='w-20 h-20' src='./github.png'/>
                        <p>GitHub</p>
                        <a href='https://github.com/oslabs-beta/Alana.js'>Follow Us</a>
                    </div>
                </div>
                </div>
            </div>
        </main>
    </div>    
  )}
  
  export default ContactPage;

 