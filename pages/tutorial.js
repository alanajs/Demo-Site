import Head from 'next/head'
function Tutorial() {
    return (
    <div>
        <Head>
            <title>Alana.JS/Tutorial</title>
            <meta name="description" content="Alana.JS" />
            <link rel="icon" href="./Alana2.png" />
        </Head>
        <main>
            <div class="text-center">
                <h1 class="w-full text-3xl font-bold leading-normal my-10 text-center">Tutorial Videos</h1>
                <div class="flex flex-col space-y-3.5 items-center justify-center">
                    <img class="object-cover object-center rounded-md shadow" styles="height: 500px;"
                    src= 'https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png' ></img>

                    <img class="object-cover object-center rounded-md shadow" styles="height: 500px;"
                    src= 'https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png' ></img>
                </div>
            </div>
        </main>

    </div>
    );
}

export default Tutorial;