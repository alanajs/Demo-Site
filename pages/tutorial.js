import Head from 'next/head'
function Tutorial() {
    return (
    <div>
        <Head>
            <title>alanajs Tutorial</title>
            <meta name="alanajs Tutorial" content="alanajs" />
            <link rel="icon" href="./alana-Logo.png" />
        </Head>
        <main>
            <div class="text-center mx-20 my-10">
                <h1 class="underline w-full text-3xl font-bold leading-normal my-10 text-center">Tutorial Videos</h1>
                <div class="flex flex-col space-y-3.5 items-center justify-center">
                    <img class="object-cover object-center rounded-md shadow w-1/2"
                    src= './cli_demo1.gif' ></img>
                    <h1 class='w-full text-xl font-bold leading-normal my-10 text-center pb-10'>Figure1: Create and Update Lambda Function</h1>
                    <img class="object-cover object-center rounded-md shadow w-1/2"
                    src= './cli_demo2.gif' ></img>
                    <h1 class='w-full text-xl font-bold leading-normal my-10 text-center pb-10'>Figure2: Create and Update Lambda Layers</h1>
                    
                    <div class='flex flex-row space-x-3 justify-center content-evenly'>  
                        <img class="object-cover object-center rounded-md shadow w-1/2"
                        src= './cli_demo3.gif' ></img>                  
                        <img class="object-cover object-center rounded-md shadow w-1/2"
                        src= './cli_demo4.gif' ></img>
                    </div>
                    <div class='w-full flex flex-row space-x-3 justify-center'>
                        <h1 class='w-full text-xl font-bold leading-normal text-center'>Figure3: Create, Update and Delete Alias</h1>
                        <h1 class='w-full text-xl font-bold leading-normal text-center'>Figure4: Create, Update and Delete API Gateway</h1>
                    </div>
                </div>
            </div>
        </main>

    </div>
    );
}

export default Tutorial;