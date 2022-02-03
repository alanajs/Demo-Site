import Head from 'next/head'
import Sidebar from '../components/NestedLayout.js';
import Layout from '../components/Layout.js';
// import styles from '../styles/Documentation.module.css';
import Guide from '../components/Guide.js';

function Documentation({children}) {
    
    return (
    <div class='flex'>

    <Head>
        <title>Alana.JS/Documentation</title>
        <meta name="description" content="Alana.JS" />
        <link rel="icon" href="./Alana2.png" />
    </Head>

        <Sidebar class='float-left'/>
  
        <Guide />
    </div>
    )
}

export default Documentation;
