import React, {useEffect} from 'react'
import Head from 'next/head';
import styles from '../../styles/Menu.module.scss'
    
export default function Menu() {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
  return (
    <div className={styles.menu}>
    <Head>
      <title>Fantazija - online menu - meni</title>
      <meta name="description" content={"Fantazija - Tuzi. Fantazija - online menu - meni"} />
    </Head>
        <div className={styles.menuSection}>
            <h1>Nas menu:</h1>
            <div className={styles.menuList}>
                <div className={styles.kolaci}>
                    <h2>Kolaci</h2>
                    <ul>
                        <li>Rafaelo........... 2$</li>
                        <li>Rafaelo........... 2$</li>
                        <li>Rafaelo........... 2$</li>
                        <li>Rafaelo........... 2$</li>
                        <li>Rafaelo........... 2$</li>
                        <li>Rafaelo........... 2$</li>
                    </ul>
                </div>
                <div className={styles.torte}>
                    <h2>Torte</h2>
                    <ul>
                        <li>Jaffa torta........... 2$</li>
                        <li>Jaffa torta........... 2$</li>
                        <li>Jaffa torta........... 2$</li>
                        <li>Jaffa torta........... 2$</li>
                        <li>Jaffa torta........... 2$</li>
                        <li>Jaffa torta........... 2$</li>
                    </ul>
                </div>
                <div className={styles.sokovi}>
                    <h2>Sokovi</h2>
                    <ul>
                        <li>Makijato........... 2$</li>
                        <li>Makijato........... 2$</li>
                        <li>Makijato........... 2$</li>
                        <li>Makijato........... 2$</li>
                        <li>Makijato........... 2$</li>
                        <li>Makijato........... 2$</li>
                    </ul>
                </div>
                <div className={styles.sladoledi}>
                    <h2>Sladoledi</h2>
                    <ul>
                        <li>Sladoled Classic Kornet........... 1$</li>
                        <li>Sladoled Casica........................ 1$</li>
                        <li>Sladoled Veliki Kornet............. 2$</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
