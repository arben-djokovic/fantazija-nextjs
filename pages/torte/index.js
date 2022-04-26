import styles from '../../styles/Kolaci.module.scss'
import Card from '../../components/Card'
import Head from 'next/head'
import torte from '../../data/torte';

export default function Torte() {
  let data = torte
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
// export async function getStaticProps() {
//   const res = await fetch("http://localhost:3000/api/torte")
//   return {
//     props: {
//       data: await res.json()
//     },
//   }
// }