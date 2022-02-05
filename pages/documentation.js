import Head from 'next/head'
import Sidebar from '../components/Sidebar.js';
import Guide from '../components/Guide.js';

function Documentation({children}) {
    
    return (
    <div class='flex'>

    <Head>
        <title>Alana.JS/Documentation</title>
        <meta name="description" content="Alana.JS" />
        <link rel="icon" href="./alana.trans.png" />
    </Head>

        <Sidebar class='bg-gray'/>
  
        <Guide />
    </div>
    )
}

export default Documentation;
