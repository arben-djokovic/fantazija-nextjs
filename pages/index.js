import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <h1 className='naslov'>Home Page</h1>
      <Footer />
    </div>
  )
}
