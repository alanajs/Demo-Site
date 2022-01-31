import Head from 'next/head'
function Tutorial() {
    return (
    <div>
        <Head>
            <title>Alana.JS/Tutorial</title>
            <meta name="description" content="Alana.JS" />
            <link rel="icon" href="./Alana2.png" />
        </Head>


    <section class="bg-white">
        <div class="max-w-7xl py-16 mx-auto">
            <div class="items-center md:flex md:space-x-6">
                <div class="md:w-1/2">
                    <h3 class="text-3xl font-semibold text-gray-800">Simplify the deployment and invocation of Lambda functions</h3>
                    <p class="max-w-md mt-4 text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a href="#" class="block mt-8 text-indigo-700 underline">Experienced team</a>
                </div>
    
                <div class="md:mt-0 md:w-1/2">
                    <div class="flex items-center justify-center">
                        {/* <div class="max-w-md"> */}
                            <img class="object-cover object-center w-full rounded-md shadow" styles="height: 500px;"
                                src='https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png' />
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-white">
        <div class="max-w-7xl py-16 mx-auto">
            <div class="items-center md:flex md:space-x-6">
                <div class="md:mt-0 md:w-1/2">
                    <div class="flex items-center justify-center">
                        {/* <div class="max-w-md"> */}
                            <img class="object-cover object-center w-full rounded-md shadow" styles="height: 500px;"
                                src='https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png' />
                        {/* </div> */}
                    </div>
                </div>

                
                <div class="md:w-1/2">
                    <h3 class="text-3xl font-semibold text-gray-800">Alana.js is an all-in-one tool that simplifies AWS SDK from development to production</h3>
                    <p class="max-w-md mt-4 text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a href="#" class="block mt-8 text-indigo-700 underline">Experienced team</a>
                </div>

            </div>

        </div>
    </section>


    </div>
    );
}

export default Tutorial;