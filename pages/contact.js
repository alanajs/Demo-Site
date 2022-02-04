import Head from 'next/head'

function Contact() {
    return (
    <div>
       <Head>
            <title>Alana.JS/Contact</title>
            <meta name="contact" content="Alana.js" />
            <link rel="icon" href="./alana.trans.png" />
        </Head>
        <main>
          <form id="contact-me" class="w-full mx-auto max-w-2xl bg-white shadow-inner p-8 py-20 justify-center">     
            <h1 class="w-full text-3xl font-bold leading-normal my-10 text-center">Contact Form</h1>     
            <div class="flex flex-wrap mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  First Name
                </label>
                <input class="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Last Name
                </label>
                <input class="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
              </div>
            </div>
            <div class="flex flex-wrap mb-6">
              <div class="w-full px-3">
                <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  E-mail
                </label>
                <input class="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="abcd@gmail.com"/>
              </div>
            </div>
            <div class="flex flex-wrap mb-6">
              <div class="w-full px-3">
                <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Message
                </label>
                <textarea class=" no-resize block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="">
                <button class="shadow bg-orange-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                  Send
                </button>
              </div>
              <div class="md:w-1"></div>
            </div>
          </form>
        </main>
    </div>    
  )}
  
  export default Contact;