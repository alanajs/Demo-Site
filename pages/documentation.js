import Head from 'next/head'
import Sidebar from '../components/NestedLayout.js';
import Layout from '../components/Layout.js';

function Documentation({children}) {
    
    return (
    <div class='flex'>
    <Head>
        <title>Alana.JS/Documentation</title>
        <meta name="description" content="Alana.JS" />
        <link rel="icon" href="./Alana2.png" />
    </Head>
        <Sidebar class='float-left'/>
  
        <div>
            <main>
                <section class="bg-white">    
                    <div id="cli">
                        <h2 class='text-black'>Cli section</h2>
                    </div>

                    <div id="npm">
                        <h2>npm</h2>
                    </div>

                    <div id="quickstart">
                        <h2>quick start</h2>
                    </div>            
                </section>
            
            </main>
        </div>    
    </div>
    )
}

export default Documentation;

// Documentation.getLayout = function getLayout(page) {
//     return (
//         <Layout>
//         <Sidebar />
//         {page}
//       </Layout>    
//     )
// }