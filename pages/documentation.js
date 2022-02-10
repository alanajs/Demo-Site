import Head from 'next/head'
import Sidebar from '../components/Sidebar.js';
import Guide from '../components/Guide.js';

function Documentation() {    
    return (
    <div>
        <Head>
            <title>alanajs Documentation</title>
            <meta name="alanajs Documentation" content="alanajs" />
            <link rel="icon" href="./alana-Logo.png" />
        </Head>
        {/* <div class='flex'> */}
            {/* <Sidebar/> */}
            <Guide />
        {/* </div> */}
    </div>
    )
}

export default Documentation;
