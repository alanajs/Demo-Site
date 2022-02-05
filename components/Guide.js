// import Image from 'next/image';
// import npm_demo from '../public/Npm_demo.png';

function Guide() {
    
    return (
    <div>
  
        <main>
            <section class="bg-white pl-10 pt-10 pb-16">

                <div id="quickstart">
                    <h1 class="font-extrabold text-3xl py-2">Quick Start</h1>
                    <h2 class="font-bold text-xl py-1">Installation</h2>
                    <p>Alanajs is availabile on <a href='https://www.npmjs.com/' class='text-sky-500 font-bold'>npm</a>.</p>
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
                            <li>Input: <span class="bg-slate-100">AWS_ACCESS_KEY_ID</span> required, <span class="bg-slate-100">AWS_SECRET_ACCESS_KEY</span> required, <span class="bg-slate-100">region</span> optional,</li>
                            <li>Flag: <span class="bg-slate-100">-r, --role &lt;roleName&gt;</span>: the AWS Role to be used</li>
                            <li>Flag: <span class="bg-slate-100">-b, --bucket &lt;funcName&gt;</span>: S3 bucket to be used</li>
                            <li>Flag: <span class="bg-slate-100">-u, --update</span>: set this flag to override and update AWS credentials</li>
                        </ul>


                    <h2 class="font-bold text-xl pt-5 py-1">list</h2>
                        <p>Displays table of lambda functions </p>
                        <ul class="list-disc pl-5">
                            <li>Flag: <span class="bg-slate-100">-F, --functions</span>: list all the Lambda functions</li>
                            <li>Flag: <span class="bg-slate-100">-f, --function &lt;funcName&gt;</span>: list a specific function versions</li>
                        </ul>
 
                    <h2 class="font-bold text-xl pt-5 py-1">create</h2>
                        <p> Creates Lambda functions. Verifies that the requirements exist before attempting to create a function, creating them if verification fails </p>
                        <ul class="list-disc pl-5">
                            <li>Input: <span class="bg-slate-100">funcName</span> optional, <span class="bg-slate-100">fileArr...</span> optional, <span class="bg-slate-100">region</span> optional </li>
                            <li>Flag: <span class="bg-slate-100">-r, --role &lt;roleName&gt;</span>: the AWS Role to be used</li>
                            <li>Flag: <span class="bg-slate-100">-b, --bucket &lt;funcName&gt;</span>: S3 bucket to be used</li>
                            <li>Flag: <span class="bg-slate-100">-d, --description &lt;description text&gt;</span>: Lambda function description</li>
                            <li>Flag: <span class="bg-slate-100">-p, --publish </span>: publish a new version of the Lambda function</li>
                            <li>Flag: <span class="bg-slate-100">-l, --layerName &lt;layer name&gt;</span>: attach Lambda layer</li>
                        </ul>

                    <h2 class="font-bold text-xl pt-5 py-1">update</h2>
                        <p>Updates AWS Lambda function</p>
                        <ul class="list-disc pl-5">
                            <li>Input: &lt;funcName&gt; and &lt;fileArr&gt; </li>
                            <li>Flag: <span class="bg-slate-100">-d, --description &lt;description text&gt;</span> Lambda function description</li>
                            <li>Flag: <span class="bg-slate-100">-p, --publish </span> publish a new version of the Lambda function</li>
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
                            <li>Flag: <span class="bg-slate-100">-r, --role &lt;roleName&gt; </span> name of the AWS role</li>
                            <li>Flag: <span class="bg-slate-100">-c, --create</span> create role if it does not exist</li>
                            <li>Flag: <span class="bg-slate-100">-l, --list</span> list all the roles in AWS</li>
                            <li>Flag: <span class="bg-slate-100">--delete</span> delete the specified role</li>
                        </ul>
                        
                        
                    <h2 class="font-bold text-xl pt-5 py-1">buckets</h2>
                        <p>Interact with AWS S3 buckets  </p>
                        <ul class="list-disc pl-5">
                            <li>Input: <span class="bg-slate-100">&lt;bucketName&gt;</span> optional </li>
                            <li>Flag: <span class="bg-slate-100">-b, --bucket &lt;bucketName&gt; </span> name of the S3 bucket</li>
                            <li>Flag: <span class="bg-slate-100">-c, --create</span> create bucket if it does not exist</li>
                            <li>Flag: <span class="bg-slate-100">-l, --list</span> list all the buckets in AWS</li>
                            <li>Flag: <span class="bg-slate-100">--delete</span> delete the specified bucket</li>
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
                            <li>Input: &lt;layerName&gt; required &lt;fileArr...&gt; required files to be converted into a Lambda layer separated by a space</li>
                        </ul>

                    <h2 class="font-bold text-xl pt-5 py-1">addLayerToFunc</h2>
                        <p>Adds an AWS Lambda Layer to existing function </p>
                        <ul class="list-disc pl-5">
                            <li>Input: &lt;funcName&gt; required </li>
                            <li>Flag: <span class="bg-slate-100">-l, --layerName &lt;layerName&gt;</span> Lambda layer name</li>
                            <li>Flag: <span class="bg-slate-100">-v, --layerVersion &lt;layerVersion&gt;</span> Lambda layer version number</li>
                        </ul>

                    <h2 class="font-bold text-xl pt-5 py-1">alias</h2>
                        <p>Creates AWS Lambda function alias </p>
                        <ul class="list-disc pl-5">
                            <li>Input: <span class="bg-slate-100">&lt;funcName&gt;</span> required <span class="bg-slate-100">&lt;versiob&gt;</span> required version number for -c and -u flags</li>
                            <li>Flag: <span class="bg-slate-100">-c, --create &lt;aliasName&gt;</span> create alias name if it does not exist</li>
                            <li>Flag: <span class="bg-slate-100">-u, --update &lt;aliasName&gt;</span> update alias name </li>
                            <li>Flag: <span class="bg-slate-100">--delete</span> delete the specified alias name</li>
                        </ul>
                        
                </div>

                <div id="npm">
                    <h1 class="font-extrabold text-3xl py-2 pt-10">npm</h1>
                    <p>Create a .env file in the top level of your application with the following keys and values: <code>AWS_ACCESS_KEY_ID</code>,  
                         <code>AWS_SECRET_ACCESS_KEY</code>, <code>AWS_REGION</code><code>S3BUCKETNAME</code>, and <code>ROLENAME</code></p>
                    <img class="object-cover object-center pt-5 h-1/2 w-1/2 rounded-md shadow" src="./Npm_demo.png"/>
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
                                    <li>Output: </li>
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
                            <li>Output: </li>
                            </ul>
                        </ul>

                    <h2 class="font-bold text-xl pt-5 py-1">updateAlias(params)</h2>
                            <p>Updates AWS Lambda function alias </p>
                        <ul class="list-disc pl-5">
                            <li><span class="bg-slate-100">params: </span> required object which includes the following: </li>
                        <ul class="list-disc pl-7"> 
                            <li><span class="bg-slate-100">funcName: </span>required string function name </li>
                            <li>Output:  </li>
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

                </div>
                         
            </section>
        
        </main>   
    </div>
    )
}

export default Guide;
