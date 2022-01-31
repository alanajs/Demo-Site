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
  
        <main>
            <section class="bg-white">

                <div id="quickstart">
                    <h1 class="font-extrabold text-3xl py-2">Quick Start</h1>
                    <h2 class="font-bold text-xl py-1">Installation</h2>
                    <p>Alanajs is availabile on <a href='https://www.npmjs.com/' class='text-sky-500'>npm</a>.</p>
                        <code>npm install alanajs</code>
                </div>   

                <div id="cli">
                    <h1 class="font-extrabold text-3xl py-2">CLI</h1>
                    <p>Run <code>ami -h</code> or <code>ami --help</code> to get this information from the command line.</p>


                    <h2 class="font-bold text-xl py-1">list</h2>
                        <ul>
                            <li>Description: Displays table of lambda functions </li>
                            <li>Input: None </li>
                            <li>Output:  </li>
                        </ul>
 
                    <h2 class="font-bold text-xl py-1">create</h2>
                        <ul>
                            <li>Description: creates AWS Lambda function  </li>
                            <li>Input: params object which includes array of file names and name of function :options object  </li>
                            <li>Output:  </li>
                        </ul>

                    <h2 class="font-bold text-xl py-1">update</h2>
                        <ul>
                            <li>Description: creates AWS Lambda function  </li>
                            <li>Input: &lt;funcName&gt; and &lt;fileArr&gt; :options object  </li>
                            <li>Options: -d or --description &lt;description text&gt;, -p or --publish</li>
                            <li>Output:  </li>
                        </ul>
                        
                </div>

                <div id="npm">
                    <h1 class="font-extrabold text-3xl py-2">npm</h1>
                    <h2 class="font-bold text-xl py-1">getFuncList()</h2>
                        <ul>
                            <li>Description: Displays table of lambda functions </li>
                            <li>Input: None </li>
                            <li>Output:  </li>
                        </ul>
                    <h2 class="font-bold text-xl py-1">getFuncVersions(funcName)</h2>
                        <ul>
                            <li>Description: Displays table of lambda function version </li>
                            <li><span class="bg-slate-100">FuncName:</span> string that represents function name </li>
                            <li>Output:  </li>
                        </ul>
                    <h2 class="font-bold text-xl py-1">createFunction()</h2>
                        <ul>
                            <li>Description: creates AWS Lambda function  </li>
                            <li>Input: params object which includes array of file names and name of function to be created :options object  </li>
                            <li>Output:  </li>
                        </ul>
                    <h2 class="font-bold text-xl py-1">updateFunction</h2>
                        <ul>
                            <li>Description: updates AWS Lambda function  </li>
                            <li>Input: params object which includes array of file names and name of function to be updated </li>
                            <li>Output:  </li>
                        </ul>
                    <h2 class="font-bold text-xl py-1">deleteFunction</h2>
                        <ul>
                            <li>Description: deletes AWS Lambda function  </li>
                            <li>Input: String name of function to be updated </li>
                            <li>Output:  </li>
                        </ul>

                </div>
                         
            </section>
        
        </main>   
    </div>
    )
}

export default Documentation;
