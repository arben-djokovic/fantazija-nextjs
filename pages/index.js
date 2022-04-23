import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Card  from './../components/Card';
import styles from '../styles/Home.module.scss'
import Storage from '../Storage';

export default function Home() {
  let [kolaci, setKolaci] = useState([])
  let [torte, setTorte] = useState([])
  let [torteSlika, setTorteSlika] = useState([])

  useEffect(()=>{
    window.scrollTo(0, 0)
    setKolaci(Storage.kolaci)
    setTorte(Storage.torte)
    setTorteSlika(Storage.tortaSlike)
  },[])
  const router = useRouter()
  return (
    <div className={styles.home}>
        <div className={styles.homeSection}>
          <section className={styles.popular}>
            <h1>Popularni Kolaci</h1>
            <div className={styles.lista}>
              {kolaci.map((kolac, i) => {
                if(i <= 3){
                  return(<Card styles={styles} whatIs='kolac' key={kolac.id} tortaId={kolac.id} tortaSlika={kolac.slika} tortaIme={kolac.ime} tortaKratakOpis={kolac.kratakOpis} tortaCijena={kolac.cijena} />)
                }
              })}
            </div>
            <div onClick={()=>{router.push('/kolaci')}} className={styles.seeMore}>See More</div>
          </section>
          <section className={styles.popular}>
            <h1>Popularne Torte</h1>
            <div className={styles.lista}>
              {torte.map((torta, i) => {
                if(i <= 3){
                  return(<Card styles={styles} whatIs='torta' key={torta.id} tortaId={torta.id} tortaSlika={torta.slika} tortaIme={torta.ime} tortaKratakOpis={torta.kratakOpis} tortaCijena={torta.cijena} />)
                }
              })}
            </div>
            <div onClick={()=>{router.push('/torte')}} className={styles.seeMore}>See More</div>
          </section>
          <section className={styles.popular}>
            <h1>Torte sa slikom</h1>
            <div className={styles.lista}>
              {torteSlika.map((torta, i) => {
                if(i <= 3){
                  return(<Card styles={styles} whatIs='torta-slika' key={torta.id} tortaId={torta.id} tortaSlika={torta.slika} tortaIme={torta.ime} tortaKratakOpis={torta.kratakOpis} tortaCijena={torta.cijena} />)
                }
              })}
            </div>
          </section>
        </div>
    </div>
  )
}
