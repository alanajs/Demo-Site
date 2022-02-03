import Head from 'next/head'
// import Sidebar from '../components/NestedLayout.js';
import Layout from '../components/Layout.js';
import style from '../styles/Guide.module.css';

function Guide({children}) {
    
    return (
    <div>

    {/* <Head>
        <title>Alana.JS/Documentation</title>
        <meta name="description" content="Alana.JS" />
        <link rel="icon" href="./Alana2.png" />
    </Head> */}

        {/* <Sidebar class='float-left'/> */}
  
        <main>
            <section class="bg-white pl-10">

                <div id="quickstart">
                    <h1 class="font-extrabold text-3xl py-2">Quick Start</h1>
                    <h2 class="font-bold text-xl py-1">Installation</h2>
                    <p>Alanajs is availabile on <a href='https://www.npmjs.com/' class='text-sky-500 font-bold'>npm</a>.</p>
                        <code>npm install alanajs</code>
                </div>   

                <div id="cli">
                    <h1 class="font-extrabold text-3xl py-2">CLI</h1>
                    <p>Run <code>ami -h</code> or <code>ami --help</code> to get this information from the command line.</p>


                    <h2 class="font-bold text-xl py-1">list</h2>
                        <ul>
                            <li>Description: Displays table of lambda functions </li>
                            <li>Input: None </li>
                            <li>-F, --functions: list all the Lambda functions</li>
                            <li>'-f, --function funcName, list a specific function versions</li>
                            <li>Output:  </li>
                            <li>Example: <code>ami list -F</code> </li>
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
                            <li><span class="bg-slate-100">funcName: </span> required string that represents function name </li>
                            <li>Output:  </li>
                        </ul>
                    <h2 class="font-bold text-xl py-1">createFunction(params, options)</h2>
                        <ul>
                            <li>Description: creates AWS Lambda function  </li>
                            <li><span class="bg-slate-100">params: </span> required object which includes the following: </li>
                            <li><span class="bg-slate-100">fileArr: </span>required array of strings file/directory names to update function to include</li>
                            <li><span class="bg-slate-100">funcName: </span> required string that represents function name </li>
                            <li><span class="bg-slate-100">options: </span> optional object which includes the following: </li>
                            <li><span class="bg-slate-100">role: </span> optional string for role name </li>
                            <li><span class="bg-slate-100">bucket: </span> optional lowercase string for bucket name </li>
                            <li><span class="bg-slate-100">description: </span> optional string for description </li>
                            <li><span class="bg-slate-100">layerArr: </span> optional array of objects with layerName and layerVersion properties for adding layers </li>
                            <li><span class="bg-slate-100">publish: </span> optional boolean set to false on default; set to true to publish the first version of the function during creation </li>
                            <li>Output: </li>
                        </ul>

                    <h2 class="font-bold text-xl py-1">updateFunction(params)</h2>
                        <ul>
                            <li>Description: updates AWS Lambda function  </li>
                            <li><span class="bg-slate-100">params: </span> required object which includes the following: </li>
                            <li><span class="bg-slate-100">fileArr: </span>required array of strings of file/directory names </li>
                            <li><span class="bg-slate-100">funcName: </span>required string function name </li>
                            <li>Output:  </li>
                        </ul>

                    <h2 class="font-bold text-xl py-1">deleteFunction(funcName, qualifier)</h2>
                        <ul>
                            <li>Description: deletes AWS Lambda function  </li>
                            <li><span class="bg-slate-100">funcName: </span> required string that represents function name </li>
                            <li><span class="bg-slate-100">qualifier: </span> optional string that represents version number to delete </li>
                            <li>Output:  </li>
                        </ul>

                    <h2 class="font-bold text-xl py-1">invoke(funcName)</h2>
                        <ul>
                            <li>Description: invokes AWS Lambda function  </li>
                            <li><span class="bg-slate-100">funcName: </span> required string that represents function name </li>
                            <li>Output:  </li>
                        </ul>

                    <h2 class="font-bold text-xl py-1">createLambdaLayer(params)</h2>
                        <ul>
                            <li>Description: creates AWS Lambda layer  </li>
                            <li><span class="bg-slate-100">params: </span> required object which includes the following: </li>
                            <li><span class="bg-slate-100">fileArr: </span>required array of strings of file/directory names </li>
                            <li><span class="bg-slate-100">layerName: </span>required string layer name </li>
                            <li>Output:  </li>
                        </ul>

                    <h2 class="font-bold text-xl py-1">addLayerToFunction(funcName, layerArr)</h2>
                        <ul>
                            <li>Description: creates AWS Lambda layer  </li>
                            <li><span class="bg-slate-100">params: </span> required object which includes the following: </li>
                            <li><span class="bg-slate-100">fileArr: </span>required array of strings of file/directory names </li>
                            <li><span class="bg-slate-100">layerArr: </span> required array of objects with layerName and layerVersion properties for adding layers </li>
                            <li>Output:  </li>
                        </ul>

                    <h2 class="font-bold text-xl py-1">createAlias(params, aliasName)</h2>
                        <ul>
                            <li>Description: creates AWS Lambda function alias </li>
                            <li><span class="bg-slate-100">params: </span> required object which includes the following: </li>
                            <li><span class="bg-slate-100">funcName: </span>required string function name </li>
                            <li><span class="bg-slate-100">version: </span> required string which represents function version number to attach alias to</li>
                            <li><span class="bg-slate-100">aliasName: </span> optional string which represents name of alias; defaults to 'aliasName'</li>
                            <li>Output: </li>
                        </ul>

                    <h2 class="font-bold text-xl py-1">updateAlias(params)</h2>
                        <ul>
                            <li>Description: updates AWS Lambda function alias </li>
                            <li><span class="bg-slate-100">params: </span> required object which includes the following: </li>
                            <li><span class="bg-slate-100">funcName: </span>required string function name </li>
                            <li>Output:  </li>
                        </ul>

                    <h2 class="font-bold text-xl py-1">deleteAlias(params, aliasName)</h2>
                        <ul>
                            <li>Description: deletes AWS Lambda function alias </li>
                            <li><span class="bg-slate-100">params: </span> required object which includes the following: </li>
                            <li><span class="bg-slate-100">funcName: </span> required string that represents function name </li>
                            <li><span class="bg-slate-100">aliasName: </span> optional string which represents name of alias; defaults to 'aliasName'</li>
                            <li>Output:  </li>
                        </ul>

                </div>
                         
            </section>
        
        </main>   
    </div>
    )
}

export default Guide;
