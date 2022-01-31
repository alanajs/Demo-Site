// import App from 'next/app'
// import Head from "next/head";
import '../styles/styles.css'
import Layout from '../components/Layout.js';

function MyApp({ Component, pageProps }) {
  return (

    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
  // const getLayout = Component.getLayout || ((page) => page)

  // return getLayout(<Component {...pageProps} />)
}

export default MyApp;