import { useRouter } from 'next/router';
import Image from 'next/image'

export default function Card({tortaId, tortaSlika, whatIs, tortaIme, tortaKratakOpis, tortaCijena, styles}) {
    const router = useRouter()

    return (<div onClick={() => { router.push('/' + whatIs + '/' + tortaId) }} className={styles.kolac}>
        <Image src={tortaSlika} alt="Fantazija"  width={500}
        height={500}/>
        <h3>{tortaIme}</h3>
        <p>{tortaKratakOpis}</p>
        <p className={styles.cijena}>{tortaCijena} $</p>
    </div>)
}
