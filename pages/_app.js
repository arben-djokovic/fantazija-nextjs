import Header from '../components/Header/index'
import "../styles/globals.css";
import Footer from './../components/Footer/Index';

function MyApp({ Component, pageProps }) {
  return <>
  <Header />
    <Component {...pageProps} />
  <Footer />
  </>
}

export default MyApp
