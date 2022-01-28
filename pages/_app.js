// import App from 'next/app'
// import Head from "next/head";
import '../styles/styles.css'
import Layout from '../components/Layout.js';

function MyApp({ Component, pageProps }) {
  return (

    <>
      <Layout>
        {/* <Head>

      </Head> */}
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;