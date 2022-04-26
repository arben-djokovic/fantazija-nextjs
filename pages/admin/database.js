import { useState, useEffect } from 'react'
import styles from '../../styles/Database.module.scss'
import Image from 'next/image';
import { useRouter } from 'next/router';

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
            await fetch(`https://fantazija-nextjs-arben-djokovic.vercel.app/api/torte/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {console.log(data);  alert('Deleted' + data.id)})
            .catch(err => {console.log(err); alert('Error')})
        }
        else if (kolaciSelected) {
            await fetch(`https://fantazija-nextjs-arben-djokovic.vercel.app/api/kolaci/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {console.log(data);  alert('Deleted' + data.id)})
            .catch(err => {console.log(err); alert('Error')})

        }
        else if (torteSaSlikomSelected) {
            await fetch(`https://fantazija-nextjs-arben-djokovic.vercel.app/api/torteSaSlikom/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {console.log(data);  alert('Deleted' + data.id)})
            .catch(err => {console.log(err); alert('Error')})
        }
    }
    let addNew = async () => {
        let newItem = {
            ime: inputIme,
            kratakOpis: inputOpis,
            cijena: inputCijena,
            slika: inputSlika
        }
        if (torteSelected) {
            await fetch('https://fantazija-nextjs-arben-djokovic.vercel.app/api/torte', {
                method: 'POST',
                body: JSON.stringify({item: newItem}),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(res => res.json())
            .then(data => {console.log(data);  alert('Added' + data.id)})
            .catch(err => {console.log(err); alert('Error')})
        }
        else if (kolaciSelected) {
            await fetch('https://fantazija-nextjs-arben-djokovic.vercel.app/api/kolaci', {
                mode: 'no-cors',
                method: 'POST',
                body: JSON.stringify({item: newItem}),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(res => res.json())
            .then(data => {console.log(data);  alert('Added' + data.id)})
            .catch(err => {console.log(err); alert('Error')})
        }
        else if (torteSaSlikomSelected) {
            await fetch('https://fantazija-nextjs-arben-djokovic.vercel.app/api/torteSaSlikom', {
                method: 'POST',
                body: JSON.stringify({item: newItem}),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(res => res.json())
            .then(data => {console.log(data);  alert('Added' + data.id)})
            .catch(err => {console.log(err); alert('Error')})
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
                        return (<div key={torta.id} className={styles.kolac}>
                            <Image src={torta.slika} width={150} height={150} />
                            <div className={styles.kolacOpis}>
                                <h3>{torta.ime}</h3>
                                <p>{torta.kratakOpis}</p>
                                <p>${torta.cijena}</p>
                            </div>
                            <div onClick={() => { deleteKolac(torta.id) }} className={styles.delete}>X</div>
                        </div>)
                    })}
                    {kolaciSelected && kolaci.map(kolac => {
                        return (<div key={kolac.id} className={styles.kolac}>
                            <Image src={kolac.slika} width={150} height={150} />
                            <div className={styles.kolacOpis}>
                                <h3>{kolac.ime}</h3>
                                <p>{kolac.kratakOpis}</p>
                                <p>${kolac.cijena}</p>
                            </div>
                            <div onClick={() => { deleteKolac(kolac.id)}} className={styles.delete}>X</div>
                        </div>)
                    })}
                    {torteSaSlikomSelected && torteSlika.map(torta => {
                        return (<div key={torta.id} className={styles.kolac}>
                            <Image src={torta.slika} width={150} height={150} />
                            <div className={styles.kolacOpis}>
                                <h3>{torta.ime}</h3>
                                <p>{torta.kratakOpis}</p>
                                <p>${torta.cijena}</p>
                            </div>
                            <div onClick={() => { deleteKolac(torta.id)}} className={styles.delete}>X</div>
                        </div>)
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
      revalidate: 2
    }
  }