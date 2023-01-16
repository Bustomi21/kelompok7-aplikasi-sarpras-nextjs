import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  return (
    <div>
      <Head>
        <link rel="stylesheet" type="text/css" href="fontawesome-free/css/all.min.css"/>
        <link rel="stylesheet" href="css/style.css"></link>
        <link rel="stylesheet" href="css/style-form.css"></link>
  
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;600&display=swap" rel="stylesheet"></link>
      </Head>
      
      <Component {...pageProps} />

      
    </div>)
  
}

export default MyApp
