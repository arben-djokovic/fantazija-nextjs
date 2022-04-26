import { useState, useEffect } from 'react'
import styles from '../../styles/Database.module.scss'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Database({torte, kolaci, torteSlika}) {
    let router = useRouter()
    let [torteSelected, setTorteSelected] = useState(false)
    let [kolaciSelected, setKolaciSelected] = useState(true)
    let [torteSaSlikomSelected, setTorteSaSlikomSelected] = useState(false)

    let [radnjaDelete, setRadnjaDelete] = useState(false)

    let [inputIme, setInputIme] = useState('')
    let [inputOpis, setInputOpis] = useState('')
    let [inputCijena, setInputCijena] = useState('')
    let [inputSlika, setInputSlika] = useState('')

    useEffect(() => {
        if(localStorage.getItem('username') === 'admin' && localStorage.getItem('password') === 'admin'){     
        }
        else{
            router.push('/admin')
        }
    }, [])
 
    const changeKategorija = (e) => {
        if (e.target.value == 1) {
            setTorteSelected(false)
            setKolaciSelected(true)
            setTorteSaSlikomSelected(false)
        }
        else if (e.target.value == 2) {
            setTorteSelected(true)
            setKolaciSelected(false)
            setTorteSaSlikomSelected(false)
        }
        else if (e.target.value == 3) {
            setTorteSelected(false)
            setKolaciSelected(false)
            setTorteSaSlikomSelected(true)
        }
    }
    let changeRadnju = (e) => {
        if (e.target.value == 2) {
            setRadnjaDelete(true)
        }
        else if (e.target.value == 1) {
            setRadnjaDelete(false)
        }
    }
    let deleteKolac = async (id) => {
        if (torteSelected) {
            const response = await fetch(`https://fantazija-nextjs-arben-djokovic.vercel.app/api/torte/${id}`, {
                method: 'DELETE',
            })
            const data = await response.json()
            console.log(data)
            setTimeout(() => {
                fetchTorte()
            }, 500);
        }
        else if (kolaciSelected) {
            const response = await fetch(`https://fantazija-nextjs-arben-djokovic.vercel.app/api/kolaci/${id}`, {
                method: 'DELETE',
            })
            const data = await response.json()
            console.log(data)
            setTimeout(() => {
                fetchKolaci()
            }, 500);
        }
        else if (torteSaSlikomSelected) {
            const response = await fetch(`https://fantazija-nextjs-arben-djokovic.vercel.app/api/torteSaSlikom/${id}`, {
                method: 'DELETE',
            })
            const data = await response.json()
            console.log(data)
            setTimeout(() => {
                fetchTorteSaSlikom()
            }, 500);
        }
    }
    let addNew = async () => {
        let addItem = {
            ime: inputIme,
            opis: inputOpis,
            cijena: inputCijena,
            slika: inputSlika
        }
        if (torteSelected) {
            const response = await fetch('https://fantazija-nextjs-arben-djokovic.vercel.app/api/torte', {
                method: 'POST',
                body: JSON.stringify({
                    item: addItem
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data = await response.json()
            console.log(data)
            setTimeout(() => {
                fetchTorte()
            }, 500);
        }
        else if (kolaciSelected) {
            const response = await fetch('https://fantazija-nextjs-arben-djokovic.vercel.app/api/kolaci', {
                method: 'POST',
                body: JSON.stringify({
                    item: addItem
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data = await response.json()
            console.log(data)
            setTimeout(() => {
                fetchKolaci()
            }, 500);
        }
        else if (torteSaSlikomSelected) {
            const response = await fetch('https://fantazija-nextjs-arben-djokovic.vercel.app/api/torteSaSlikom', {
                method: 'POST',
                body: JSON.stringify({
                    item: addItem
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data = await response.json()
            console.log(data)
            setTimeout(() => {
                fetchTorteSaSlikom()
            }, 500);
        }
    }
    return (
        <div className={styles.database}>
            <select onChange={changeKategorija} name="kategorija" id="kategorija">
                <option value="1">Kolaci</option>
                <option value="2">Torte</option>
                <option value="3">Torte Sa Slikom</option>
            </select>
            <select onChange={changeRadnju} name="radnja" id="radnja">
                <option value="1">Add</option>
                <option value="2">Delete</option>
            </select>
            {radnjaDelete ?
                <div className={styles.lista}>
                    {torteSelected && torte.map(torta => {
                        return (<Link key={torta.id} href={`https://fantazija-nextjs-arben-djokovic.vercel.app/torte/${torta.id}`}><div className={styles.kolac}>
                            <Image src={torta.slika} width={150} height={150} />
                            <div className={styles.kolacOpis}>
                                <h3>{torta.ime}</h3>
                                <p>{torta.kratakOpis}</p>
                                <p>${torta.cijena}</p>
                            </div>
                            <div onClick={() => { deleteKolac(torta.id) }} className={styles.delete}>X</div>
                        </div></Link>)
                    })}
                    {kolaciSelected && kolaci.map(kolac => {
                        return (<Link key={kolac.id} href={`https://fantazija-nextjs-arben-djokovic.vercel.app/kolaci/${kolac.id}`}><div className={styles.kolac}>
                            <Image src={kolac.slika} width={150} height={150} />
                            <div className={styles.kolacOpis}>
                                <h3>{kolac.ime}</h3>
                                <p>{kolac.kratakOpis}</p>
                                <p>${kolac.cijena}</p>
                            </div>
                            <div onClick={() => { deleteKolac(kolac.id) }} className={styles.delete}>X</div>
                        </div></Link>)
                    })}
                    {torteSaSlikomSelected && torteSlika.map(torta => {
                        return (<Link key={torta.id} href={`https://fantazija-nextjs-arben-djokovic.vercel.app/torta-slika/${torta.id}`}><div className={styles.kolac}>
                            <Image src={torta.slika} width={150} height={150} />
                            <div className={styles.kolacOpis}>
                                <h3>{torta.ime}</h3>
                                <p>{torta.kratakOpis}</p>
                                <p>${torta.cijena}</p>
                            </div>
                            <div onClick={() => { deleteKolac(torta.id) }} className={styles.delete}>X</div>
                        </div></Link>)
                    })}
                </div>
                :
                <div className={styles.formaDiv}>
                    <h3>Add New</h3>
                    <div className={styles.forma}>
                        <div>
                            <p>Ime</p>
                            <input onChange={(e) => {
                                setInputIme(e.target.value)
                            }} placeholder='Ime' type="text" name="ime" id="ime" />
                        </div>
                        <div>
                            <p>Kratak Opis</p>
                            <input onChange={(e) => {
                                setInputOpis(e.target.value)
                            }} placeholder='Kratak Opis' type="opis" name="opis" id="opis" />
                        </div>
                        <div>
                            <p>Cijena</p>
                            <input onChange={(e) => {
                                setInputCijena(e.target.value)
                            }} placeholder='Cijena' type="number" name="cijena" id="cijena" />
                        </div>
                        <div>
                            <p>Slika</p>
                            <input onChange={(e) => {
                                setInputSlika(e.target.value)
                            }} placeholder='Slika' type="text" name="slika" id="slika" />
                        </div>
                        <button onClick={addNew} className={styles.submitBtn}>Add</button>
                    </div>
                </div>}
        </div>
    )
}
export async function getStaticProps() {
    const torte = await fetch("https://fantazija-nextjs-arben-djokovic.vercel.app/api/torte")
    const kolaci = await fetch("https://fantazija-nextjs-arben-djokovic.vercel.app/api/kolaci")
    const torteSlika = await fetch("https://fantazija-nextjs-arben-djokovic.vercel.app/api/torteSaSlikom")
    return {
      props: {
        torte: await torte.json(),
        kolaci: await kolaci.json(),
        torteSlika: await torteSlika.json(),
      },
    }
  }