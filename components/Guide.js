function Guide() {    
    return (
    <div>  

{/* <div class="">
            <div class="sticky flex flex-row top-20 left-0 w-50">
                <div class="overflow-y-auto">
                    <ul class="flex flex-row grow py-4">
                        <li class="px-5">
                            <div class="flex flex-col items-center h-8"></div>
                        </li>
                        <li>
                            <a href="#quickstart" class="flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span class="inline-flex justify-center items-center ml-4">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                            </span>
                            <span class="ml-2 text-base tracking-wide">Quick Start</span>
                            </a>
                        </li>
                        <li>
                            <a href="#cli" class="flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span class="inline-flex justify-center items-center ml-4">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                            </span>
                            <span class="ml-2 text-base tracking-wide">CLI</span>
                            </a>
                        </li>
                        <li>
                            <a href="#npm" class="flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span class="inline-flex justify-center items-center ml-4">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                            </span>
                            <span class="ml-2 text-base tracking-wide">Npm package</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div> */}

        <main>
            <section class="bg-white container px-10 py-4 mx-auto">
                <div id="quickstart" class='py-5 pt-10'>
                        <h1 class="font-extrabold text-3xl py-2">Quick Start</h1>
                        <h2 class="font-bold text-xl py-1">Installation</h2>
                        <p>alanajs is availabile on <a href='https://www.npmjs.com/package/alanajs' target='_blank' class='text-sky-500 font-bold'>npm</a>.</p>
                        <code>npm install alanajs</code>
                </div>
                <div id="cli">
                    <h1 class="font-extrabold text-3xl py-2 pt-10">CLI</h1>
                    <p>Run <code>alanajs -h</code> or <code>alanajs --help</code> in your terminal to get this information from the command line.</p>
                    <p><code>alanajs command &lt;Input&gt; -flag [options]</code></p>
                    <p>See list of commands below.</p>
                    <h2 class="font-bold text-xl pt-5 py-1">init</h2>
                    <p>Configures access to AWS </p>
                    <ul class="list-disc pl-5">
                        <li>Input: <span class="bg-slate-100">AWS_ACCESS_KEY_ID</span> required, <span class="bg-slate-100">AWS_SECRET_ACCESS_KEY</span> required, <span class="bg-slate-100">AWS_ACCOUNT</span> optional account number, <span class="bg-slate-100">region</span> optional</li>
                        <li><span class="bg-slate-100">-r, --role &lt;roleName&gt;</span>: the AWS Role to be used</li>
                        <li><span class="bg-slate-100">-b, --bucket &lt;funcName&gt;</span>: S3 bucket to be used</li>
                        <li><span class="bg-slate-100">-u, --update</span>: set this flag to override and update AWS credentials</li>
                        <li><span class="bg-slate-100">-d, --directory</span>: the directory that files to upload are located in; defaults to root directory</li>
                    </ul>
                    <h2 class="font-bold text-xl pt-5 py-1">list</h2>
                    <p>Displays table of Lambda functions </p>
                    <ul class="list-disc pl-5">
                        <li><span class="bg-slate-100">-F, --functions</span>: list all the Lambda functions</li>
                        <li><span class="bg-slate-100">-f, --function &lt;funcName&gt;</span>: list a specific function versions</li>
                    </ul> 
                    <h2 class="font-bold text-xl pt-5 py-1">create</h2>
                    <p> Creates Lambda functions. Verifies that the requirements exist before attempting to create a function, creating them if verification fails </p>
                    <ul class="list-disc pl-5">
                        <li>Input: <span class="bg-slate-100">&lt;funcName&gt;</span> optional, <span class="bg-slate-100">&lt;fileArr...&gt;</span> optional, <span class="bg-slate-100">region</span> optional </li>
                        <li><span class="bg-slate-100">-r, --role &lt;roleName&gt;</span>: the AWS Role to be used</li>
                        <li><span class="bg-slate-100">-b, --bucket &lt;funcName&gt;</span>: S3 bucket to be used</li>
                        <li><span class="bg-slate-100">-d, --description &lt;description text&gt;</span>: Lambda function description</li>
                        <li><span class="bg-slate-100">-p, --publish </span>: publish a new version of the Lambda function</li>
                        <li><span class="bg-slate-100">-l, --layerName &lt;layer name&gt;</span>: attach Lambda layer</li>
                    </ul>
                    <h2 class="font-bold text-xl pt-5 py-1">update</h2>
                    <p>Updates AWS Lambda function</p>
                    <ul class="list-disc pl-5">
                        <li>Input: <span class="bg-slate-100">&lt;funcName&gt;</span> and <span class="bg-slate-100">&lt;fileArr&gt;</span> </li>
                        <li><span class="bg-slate-100">-d, --description &lt;description text&gt;</span> Lambda function description</li>
                        <li><span class="bg-slate-100">-p, --publish </span> publish a new version of the Lambda function</li>
                    </ul>
                    <h2 class="font-bold text-xl pt-5 py-1">delete</h2>
                    <p>Deletes Lambda function  </p>
                    <ul class="list-disc pl-5">  
                        <li>Input: <span class="bg-slate-100">&lt;funcName&gt;</span> required and <span class="bg-slate-100">&lt;qualifier&gt;</span> optional version number </li>
                    </ul>
                    <h2 class="font-bold text-xl pt-5 py-1">roles</h2>
                    <p>Interact with AWS Roles  </p>
                    <ul class="list-disc pl-5">
                        <li>Input: <span class="bg-slate-100">&lt;roleName&gt;</span> optional </li>
                        <li><span class="bg-slate-100">-r, --role &lt;roleName&gt; </span> name of the AWS role</li>
                        <li><span class="bg-slate-100">-c, --create</span> create role if it does not exist</li>
                        <li><span class="bg-slate-100">-l, --list</span> list all the roles in AWS</li>
                        <li><span class="bg-slate-100">--delete</span> delete the specified role</li>
                    </ul>        
                    <h2 class="font-bold text-xl pt-5 py-1">buckets</h2>
                    <p>Interact with AWS S3 buckets  </p>
                    <ul class="list-disc pl-5">
                        <li>Input: <span class="bg-slate-100">&lt;bucketName&gt;</span> optional </li>
                        <li><span class="bg-slate-100">-b, --bucket &lt;bucketName&gt; </span> name of the S3 bucket</li>
                        <li><span class="bg-slate-100">-c, --create</span> create bucket if it does not exist</li>
                        <li><span class="bg-slate-100">-l, --list</span> list all the buckets in AWS</li>
                        <li><span class="bg-slate-100">--delete</span> delete the specified bucket</li>
                    </ul>                        
                    <h2 class="font-bold text-xl pt-5 py-1">run</h2>
                    <p>Invokes an AWS Lambda function </p>
                    <ul class="list-disc pl-5">
                        <li>Input: <span class="bg-slate-100">&lt;funcName&gt;</span> required <span class="bg-slate-100">&lt;params...&gt;</span> optional parameters separated by a space </li>
                        <li>Flag: <span class="bg-slate-100">-v, --version &lt;versionNumber&gt;</span> version of the AWS Lambda function</li>
                        <li>Output: Returned output of invoked function </li>
                    </ul>
                    <h2 class="font-bold text-xl pt-5 py-1">createLayer</h2>
                    <p>Creates an AWS Lambda layer </p>
                    <ul class="list-disc pl-5">
                        <li>Input: <span class="bg-slate-100">&lt;layerName&gt;</span> required <span class="bg-slate-100">&lt;fileArr...&gt;</span> required files to be converted into a Lambda layer separated by a space</li>
                    </ul>
                    <h2 class="font-bold text-xl pt-5 py-1">addLayerToFunc</h2>
                    <p>Adds an AWS Lambda Layer to existing function </p>
                    <ul class="list-disc pl-5">
                        <li>Input: <span class="bg-slate-100">&lt;funcName&gt;</span> required </li>
                        <li><span class="bg-slate-100">-l, --layerName &lt;layerName&gt;</span> Lambda layer name</li>
                        <li><span class="bg-slate-100">-v, --layerVersion &lt;layerVersion&gt;</span> Lambda layer version number</li>
                    </ul>
                    <h2 class="font-bold text-xl pt-5 py-1">alias</h2>
                    <p>Creates AWS Lambda function alias </p>
                    <ul class="list-disc pl-5">
                        <li>Input: <span class="bg-slate-100">&lt;funcName&gt;</span> required <span class="bg-slate-100">&lt;version&gt;</span> required version number for -c and -u flags</li>
                        <li><span class="bg-slate-100">-c, --create &lt;aliasName&gt;</span> create alias name if it does not exist</li>
                        <li><span class="bg-slate-100">-u, --update &lt;aliasName&gt;</span> update alias name </li>
                        <li><span class="bg-slate-100">--delete</span> delete the specified alias name</li>
                    </ul>   
                    <h2 class="font-bold text-xl pt-5 py-1">api</h2>
                    <p>Interacts with the APIs </p>
                    <ul class="list-disc pl-5">
                        <li>Input: <span class="bg-slate-100">&lt;apiName&gt;</span> optional name of the api to get information on. Leave blank for all apis</li>
                        <li><span class="bg-slate-100">-c, --create</span> create api if it does not exist</li>
                        <li><span class="bg-slate-100">-u, --update</span> update the api </li>
                        <li><span class="bg-slate-100">-v, --version &lt;version&gt;</span> version of the api </li>
                        <li><span class="bg-slate-100">-d, --description &lt;description&gt;</span> api description</li>
                        <li><span class="bg-slate-100">--delete</span> delete the specified api</li>
                    </ul>
                    <h2 class="font-bold text-xl pt-5 py-1">routes</h2>
                    <p>Interacts with a route on the api of choice </p>
                    <ul class="list-disc pl-5">
                        <li>Input: 
                            <span class="bg-slate-100">&lt;apiName&gt;</span> required name of the api 
                            <span class="bg-slate-100">&lt;method&gt;</span> optional type of HTTP request 
                            <span class="bg-slate-100">&lt;route&gt;</span> optional route to establish (use "." for root) 
                            <span class="bg-slate-100">&lt;funcName&gt;</span> optional the Lambda function that is invoked on the route </li>
                        <li><span class="bg-slate-100">-c, --create</span> create specified route</li>
                        <li><span class="bg-slate-100">-u, --update</span> update the route </li>
                        <li><span class="bg-slate-100">-d, --description &lt;description&gt;</span> route description</li>
                        <li><span class="bg-slate-100">--delete</span> delete the specified route</li>
                    </ul>
                    <h2 class="font-bold text-xl pt-5 py-1">deploy</h2>
                    <p>Deploys the api to a staged name </p>
                    <ul class="list-disc pl-5">
                        <li>Input: <span class="bg-slate-100">&lt;apiName&gt;</span> required name of the api to get information on. Leave blank for all apis <span class="bg-slate-100">&lt;stageName&gt;</span> optional name of the stage being deployed </li>
                        <li><span class="bg-slate-100">-d, --description &lt;description&gt;</span> stage description</li>
                    </ul>
                    <br/>
                    <a href="#quickstart" class="flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-sky-500 hover:text-indigo-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        Jump to the Top
                    </a>                  
                </div>
                <div id="npm" class='py-3'>
                    <h1 class="font-extrabold text-3xl py-2 pt-10">NPM</h1>
                    <p>Create a .env file in the top level of your application with the following keys and values: <code>AWS_ACCESS_KEY_ID</code>,  
                        <code>AWS_SECRET_ACCESS_KEY</code>, <code>AWS_REGION</code><code>S3BUCKETNAME</code>, <code>ROLENAME</code>, and <code>FOLDER</code></p>
                    <img class="object-cover object-center pt-5 h-1/2 w-1/2 rounded-md" src="./npm_packagedemo_updated.png"/>
                    <h2 class="font-bold text-xl pt-5 py-1">getFuncList()</h2>
                    <ul>
                        <li>Displays table of lambda functions </li>
                    </ul>
                    <h2 class="font-bold text-xl pt-5 py-1">getFuncVersions(funcName)</h2>
                    <p>Displays table of lambda function versions </p>
                    <ul class="list-disc pl-5">
                        <li><span class="bg-slate-100">funcName: </span> required string that represents function name </li>
                    </ul>
                    <h2 class="font-bold text-xl pt-5 py-1">createFunction(params, options)</h2>
                    <p>Creates AWS Lambda function</p>
                    <ul class="list-disc pl-5">
                        <li><span class="bg-slate-100">params: </span> required object which includes the following: </li>
                        <ul class="list-disc pl-7">
                            <li><span class="bg-slate-100">fileArr: </span>required array of strings file/directory names to update function to include</li>
                            <li><span class="bg-slate-100">funcName: </span> required string that represents function name </li>
                        </ul>
                    </ul>
                    <ul class="list-disc pl-5">
                        <li><span class="bg-slate-100">options: </span> optional object which includes the following: </li>
                        <ul class="list-disc pl-7">
                            <li><span class="bg-slate-100">role: </span> optional string for role name </li>
                            <li><span class="bg-slate-100">bucket: </span> optional lowercase string for bucket name </li>
                            <li><span class="bg-slate-100">description: </span> optional string for description </li>
                            <li><span class="bg-slate-100">layerArr: </span> optional array of objects with layerName and layerVersion properties for adding layers </li>
                            <li><span class="bg-slate-100">publish: </span> optional boolean set to false on default; set to true to publish the first version of the function during creation </li>
                        </ul>
                    </ul>      
                    <h2 class="font-bold text-xl pt-5 py-1">updateFunction(params)</h2>
                    <p>Updates AWS Lambda function  </p>
                    <ul class="list-disc pl-5">
                        <li><span class="bg-slate-100">params: </span> required object which includes the following: </li>
                        <ul class="list-disc pl-7">
                            <li><span class="bg-slate-100">fileArr: </span>required array of strings of file/directory names </li>
                            <li><span class="bg-slate-100">funcName: </span>required string function name </li>
                        </ul>
                    </ul>
                    <h2 class="font-bold text-xl pt-5 py-1">deleteFunction(funcName, qualifier)</h2>
                    <p>Deletes AWS Lambda function  </p>
                    <ul class="list-disc pl-5">
                        <li><span class="bg-slate-100">funcName: </span> required string that represents function name </li>
                        <li><span class="bg-slate-100">qualifier: </span> optional string that represents version number to delete </li>
                    </ul>
                    <h2 class="font-bold text-xl pt-5 py-1">invoke(funcName)</h2>
                    <p>Invokes AWS Lambda function</p>
                    <ul class="list-disc pl-5">
                        <li><span class="bg-slate-100">funcName: </span> required string that represents function name </li>
                        <li>Output: Returned output of invoked function </li>
                    </ul>
                    <h2 class="font-bold text-xl pt-5 py-1">createLambdaLayer(params)</h2>
                    <p>Creates AWS Lambda layer  </p>
                    <ul class="list-disc pl-5"> 
                        <li><span class="bg-slate-100">params: </span> required object which includes the following: </li>
                        <ul class="list-disc pl-7">
                            <li><span class="bg-slate-100">fileArr: </span>required array of strings of file/directory names </li>
                            <li><span class="bg-slate-100">layerName: </span>required string layer name </li>
                        </ul>
                    </ul>
                    <h2 class="font-bold text-xl pt-5 py-1">addLayerToFunction(funcName, layerArr)</h2>
                    <p>Adds AWS Lambda layer to existing function </p>
                    <ul class="list-disc pl-5">
                        <li><span class="bg-slate-100">params: </span> required object which includes the following: </li>
                        <ul class="list-disc pl-7">
                            <li><span class="bg-slate-100">fileArr: </span>required array of strings of file/directory names </li>
                            <li><span class="bg-slate-100">layerArr: </span> required array of objects with layerName and layerVersion properties for adding layers </li>
                        </ul>
                    </ul>
                    <h2 class="font-bold text-xl pt-5 py-1">createAlias(params, aliasName)</h2>                
                    <p>Creates AWS Lambda function alias </p>
                    <ul class="list-disc pl-5">
                        <li><span class="bg-slate-100">params: </span> required object which includes the following: </li>
                        <ul class="list-disc pl-7">
                            <li><span class="bg-slate-100">funcName: </span>required string function name </li>
                            <li><span class="bg-slate-100">version: </span> required string which represents function version number to attach alias to</li>
                            <li><span class="bg-slate-100">aliasName: </span> optional string which represents name of alias; defaults to 'aliasName'</li>
                        </ul>
                    </ul>
                    <h2 class="font-bold text-xl pt-5 py-1">updateAlias(params)</h2>
                    <p>Updates AWS Lambda function alias </p>
                    <ul class="list-disc pl-5">
                        <li><span class="bg-slate-100">params: </span> required object which includes the following: </li>
                        <ul class="list-disc pl-7"> 
                            <li><span class="bg-slate-100">funcName: </span>required string function name </li>
                        </ul>
                    </ul>
                    <h2 class="font-bold text-xl pt-5 py-1">deleteAlias(params, aliasName)</h2>
                    <p>Deletes AWS Lambda function alias </p>
                    <ul class="list-disc pl-5">                            
                        <li><span class="bg-slate-100">params: </span> required object which includes the following: </li>
                        <ul class="list-disc pl-7">
                            <li><span class="bg-slate-100">funcName: </span> required string that represents function name </li>
                            <li><span class="bg-slate-100">aliasName: </span> optional string which represents name of alias; defaults to 'aliasName'</li>
                        </ul>
                    </ul>
                    <br/>
                    <a href="#quickstart" class="flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 hover:underline text-sky-500 hover:text-indigo-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        Jump to the Top
                    </a>
                </div>                         
            </section>        
        </main>   
    </div>
    )
}

export default Guide;
