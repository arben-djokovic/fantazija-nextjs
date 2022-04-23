import React,{useState, useEffect} from 'react'
import styles from '../../styles/Kolaci.module.scss'
import Storage from '../../Storage'
import Card from '../../components/Card'
import Head from 'next/head';

export default function Kolaci() {
    let [kolaci, setKolaci] = useState([])
    useEffect(()=>{
        window.scrollTo(0, 0)
        setKolaci(Storage.kolaci)
    },[])
  return (
    <div className={styles.kolaci}>
    <Head>
      <title>Fantazija - kolaci</title>
      <meta name="description" content="Fantazija svi kolaci na raspolaganju. Fantazija - Tuzi" />
    </Head>
        <div className={styles.kolaciSection}>
            <h1>Kolaci</h1>
            <div className={styles.lista}>
              {kolaci.map(kolac => {
                return(<Card styles={styles} key={kolac.id} whatIs="kolac" tortaId={kolac.id} tortaSlika={kolac.slika} tortaIme={kolac.ime} tortaKratakOpis={kolac.kratakOpis} tortaCijena={kolac.cijena} />)
              })}
            </div>
        </div>
    </div>
  )
}
