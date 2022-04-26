import styles from '../../styles/Kolaci.module.scss'
import Card from '../../components/Card'
import Head from 'next/head';
import kolaci from '../../data/kolaci'

export default function Kolaci() {
  let data = kolaci
  return (
    <div className={styles.kolaci}>
    <Head>
      <title>Fantazija - kolaci</title>
      <meta name="description" content="Fantazija svi kolaci na raspolaganju. Fantazija - Tuzi" />
    </Head>
        <div className={styles.kolaciSection}>
            <h1>Kolaci</h1>
            <div className={styles.lista}>
              {data.map(kolac => {
                return(<Card styles={styles} key={kolac.id} whatIs="kolac" tortaId={kolac.id} tortaSlika={kolac.slika} tortaIme={kolac.ime} tortaKratakOpis={kolac.kratakOpis} tortaCijena={kolac.cijena} />)
              })}
            </div>
        </div>
    </div>
  )
}
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/kolaci")
  return {
    props: {
      data: await res.json()
    },
  }
}