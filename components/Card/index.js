import { useRouter } from 'next/router';

export default function Card({tortaId, tortaSlika, whatIs, tortaIme, tortaKratakOpis, tortaCijena, styles}) {
    const router = useRouter()

    return (<div onClick={() => { router.push('/' + whatIs + '/' + tortaId) }} className={styles.kolac}>
        <img src={tortaSlika} alt="Fantazija" />
        <h3>{tortaIme}</h3>
        <p>{tortaKratakOpis}</p>
        <p className={styles.cijena}>{tortaCijena} $</p>
    </div>)
}
