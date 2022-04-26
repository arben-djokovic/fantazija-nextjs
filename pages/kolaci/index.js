import styles from '../../styles/Kolaci.module.scss'
import Card from '../../components/Card'
import Head from 'next/head';

export default function Kolaci({data}) {
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
  const res = await fetch("https://fantazija-nextjs-arben-djokovic.vercel.app/api/kolaci")
  return {
    props: {
      data: await res.json()
    },
  }
}