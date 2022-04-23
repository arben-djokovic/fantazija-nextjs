import React,{useEffect} from 'react'
import styles from '../../styles/Onama.module.scss'
import Head from 'next/head';
import { AiFillInstagram } from '@react-icons/all-files/ai/AiFillInstagram';
import { AiFillPhone } from '@react-icons/all-files/ai/AiFillPhone';
export default function Onama() {

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
  return (
    <div className={styles.onama}>
    <Head>
      <title>Fantazija - o nama - about us</title>
      <meta name="description" content={"Fantazija Tuzi - o nama - about us. Poslasticarnica"} />
    </Head>
        <div className={styles.onamaSection}>
            <h1>O nama</h1>
            <section>
                <div>
                </div>
                <div className={styles.aboutUs}>
                    <h1>Fantazija</h1>
                    <p> Fantazija Tuzi - o nama - about us. Poslasticarnica. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi officiis aliquid animi fugit blanditiis libero quidem. Totam itaque corrupti temporibus alias consequatur recusandae, amet a ad illum, expedita rerum reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex voluptates eveniet maxime? Repellat blanditiis, praesentium laboriosam pariatur tempora ut iure, quidem voluptate maxi?</p>
                    <div className={styles.icons}>
                        <a className={styles.faPhone} href='tel:+38266125118'><AiFillPhone /></a>
                        <a className={styles.faInstagram} target="_blank" rel="noreferrer" href='https://www.instagram.com/fantazija20/'><AiFillInstagram /></a>
                        <a className={styles.faMapMarker} target='_blank' rel="noreferrer" href='https://www.google.com/maps/place/Fantazia/@42.3613129,19.3303067,18.92z/data=!4m12!1m6!3m5!1s0x0:0x4e54ef6bfa1848fb!2sFantazija!8m2!3d46.203634!4d16.1777544!3m4!1s0x0:0xf174d3fc70cb2cfd!8m2!3d42.3612158!4d19.329877?hl=en'><AiFillPhone /></a>
                    </div>                
                </div>
            </section>
        </div>
    </div>
  )
}
