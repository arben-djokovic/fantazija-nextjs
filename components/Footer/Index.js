import React from 'react'
import { useRouter } from 'next/router';
import styles from '../styles/Footer.module.scss'
import { AiFillInstagram } from '@react-icons/all-files/ai/AiFillInstagram';
import { AiFillPhone } from '@react-icons/all-files/ai/AiFillPhone';

export default function Footer() {

    const router = useRouter()
  return (
    <div className={styles.footer}>
        <section>
            <img onClick={()=>{router.push('/')}} src='./logo.png' alt="Fantazija" />
            <p>2022 © All right reserved</p>
        </section>
        <section>
            <h2>Pages</h2>
            <ul>
                <li onClick={()=>{router.push('/')}}>Home</li>
                <li onClick={()=>{router.push('/torte')}}>Torte</li>
                <li onClick={()=>{router.push('/kolaci')}}>Kolaci</li>
                <li onClick={()=>{router.push('/menu')}}>Menu</li>
                <li onClick={()=>{router.push('/o-nama')}}>O nama</li>
            </ul>
        </section>
        <section>
            <h2>Conact us:</h2>
            <ul className={styles.listaContact}>
                <li><a href='tel:+38266125118'><i className="fa fa-phone" aria-hidden="true"><AiFillPhone /></i> +38266125118</a></li>
                <li><a target="_blank" href='https://www.instagram.com/fantazija20/'><i className="fa-instagram" aria-hidden="true"><AiFillInstagram /></i> fantazija20</a></li>
            </ul>
        </section>
    </div>
  )
}
