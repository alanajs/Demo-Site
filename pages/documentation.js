import Head from 'next/head'
import Sidebar from '../components/Sidebar.js';
import Guide from '../components/Guide.js';

function Documentation({children}) {    
    return (
    <div class='flex'>
        <Head>
            <title>alanajs Documentation</title>
            <meta name="alanajs Documentation" content="alanajs" />
            <link rel="icon" href="./alana-Logo.png" />
        </Head>
        <Sidebar class='bg-gray'/>
        <Guide />
    </div>
    )
}

export default Documentation;
