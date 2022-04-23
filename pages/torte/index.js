import styles from '../../styles/Kolaci.module.scss'
import React, { useState, useEffect } from 'react'
import Storage from '../../Storage'
import Card from '../../components/Card'
import Head from 'next/head'

export default function Torte() {
  let [torte, setTorte] = useState([])
  useEffect(() => {
    window.scrollTo(0, 0)
    setTorte(Storage.torte)
  }, [])
  return (
    <div className={styles.kolaci}>
      <Head>
        <title>Fantazija - torte</title>
        <meta name="description" content="Fantazija sve torte na raspolaganju. Fantazija - Tuzi" />
      </Head>
      <div className={styles.kolaciSection}>
        <h1>Torte</h1>
        <div className={styles.lista}>
          {torte.map(torta => {
            return(<Card styles={styles} key={torta.id} whatIs="torta" tortaId={torta.id} tortaSlika={torta.slika} tortaIme={torta.ime} tortaKratakOpis={torta.kratakOpis} tortaCijena={torta.cijena} />)
          })}
        </div>
      </div>
    </div>
  )
}
