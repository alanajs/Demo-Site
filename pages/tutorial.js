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
            <div class="text-center">
                <h1 class="w-full text-3xl font-bold leading-normal my-10 text-center">Tutorial Videos</h1>
                <div class="flex flex-col space-y-3.5 items-center justify-center py-10">
                    <img class="object-cover object-center rounded-md shadow w-1/2"
                    src= './cli_demo.gif' ></img>
                    <h1 class='w-full text-xl font-bold leading-normal my-10 text-center'>Figure: Create .env file, Create Lambda Function and Update Lambda function</h1>
                    <img class="object-cover object-center rounded-md shadow w-1/2 py-10"
                    src= './cli_demo.gif' ></img>
                    <h1 class='w-full text-xl font-bold leading-normal my-10 text-center'>Figure: Create .env file, Create Lambda Function and Update Lambda function</h1>
                </div>
            </div>
        </main>

    </div>
    );
}

export default Tutorial;