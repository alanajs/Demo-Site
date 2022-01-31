import Head from 'next/head'
import Sidebar from '../components/NestedLayout.js';

function HomePage({children}) {
    
    return (
<div>
    <Head>
        <title>Alana.JS/Documentation</title>
        <meta name="description" content="Alana.JS" />
        <link rel="icon" href="./Alana2.png" />
    </Head>
    <Sidebar/>
    <section class="bg-white">    
        <div class="md:mt-0 md:w-1/2">
            <div class="flex items-center justify-center">
                {/* <div class="max-w-md"> */}
                    <img class="object-cover object-center w-full rounded-md shadow" styles="height: 500px;"
                        src='https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png' />
                {/* </div> */}
            </div>
        </div>
    </section>

<main>{children}</main>
    
    <div class="cli">
        <h2>Cli section</h2>
    </div>

  <div class="npm">
      <h2>npm</h2>
  </div>

  <div class="quickstart">
        <h2>quick start</h2>
    </div>

    </div>
    )
}

export default HomePage;