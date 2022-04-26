import styles from '../../styles/Kolaci.module.scss'
import Card from '../../components/Card'
import Head from 'next/head'

export default function Torte({data}) {
  return (
    <div className={styles.kolaci}>
      <Head>
        <title>Fantazija - torte</title>
        <meta name="description" content="Fantazija sve torte na raspolaganju. Fantazija - Tuzi" />
      </Head>
      <div className={styles.kolaciSection}>
        <h1>Torte</h1>
        <div className={styles.lista}>
          {data.map(torta => {
            return(<Card styles={styles} key={torta.id} whatIs="torta" tortaId={torta.id} tortaSlika={torta.slika} tortaIme={torta.ime} tortaKratakOpis={torta.kratakOpis} tortaCijena={torta.cijena} />)
          })}
        </div>
      </div>
    </div>
  )
}
export async function getStaticProps() {
  const res = await fetch("https://fantazija-nextjs.vercel.app/api/torte")
  return {
    props: {
      data: await res.json()
    },
    revalidate: 2
  }
}