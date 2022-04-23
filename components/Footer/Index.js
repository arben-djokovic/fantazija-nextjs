import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router';
import styles from '../styles/Footer.module.scss'
import { AiFillInstagram } from '@react-icons/all-files/ai/AiFillInstagram';
import { AiFillPhone } from '@react-icons/all-files/ai/AiFillPhone';
import logo from '../../public/logo.png'
import Image from 'next/image';

export default function Footer() {

    const router = useRouter()
    let [tortePage, setTortePage] = useState(false)
    let [kolaciPage, setKolaciPage] = useState(false)
    let [menuPage, setMenuPage] = useState(false)
    let [onamaPage, setOnamaPage] = useState(false)
    let [homePage, setHomePage] = useState(false)
    useEffect(()=>{
        if(window.location.href.includes('torte')){
            setTortePage(true)
            setKolaciPage(false)
            setMenuPage(false)
            setOnamaPage(false)
            setHomePage(false)
        }
        else if(window.location.href.includes('kolaci')){
            setTortePage(false)
            setKolaciPage(true)
            setMenuPage(false)
            setOnamaPage(false)
            setHomePage(false)
        }
        else if(window.location.href.includes('menu')){
            setTortePage(false)
            setKolaciPage(false)
            setMenuPage(true)
            setOnamaPage(false)
            setHomePage(false)
        }
        else if(window.location.href.includes('nama')){
            setTortePage(false)
            setKolaciPage(false)
            setMenuPage(false)
            setOnamaPage(true)
            setHomePage(false)
        }
        else if(window.location.pathname === '/'){
            setTortePage(false)
            setKolaciPage(false)
            setMenuPage(false)
            setOnamaPage(false)
            setHomePage(true)
        }
        else{
            setTortePage(false)
            setKolaciPage(false)
            setMenuPage(false)
            setOnamaPage(false)
            setHomePage(false)
        }
    })
  return (
    <div className={styles.footer}>
        <section>
            <Image onClick={()=>{router.push('/')}} src={logo} alt="Fantazija" />
            <p>2022 © All right reserved</p>
        </section>
        <section>
            <h2>Pages</h2>
            <ul>
                <li style={homePage ? {color: 'rgb(200,0,522)'} : {color: 'black'}} onClick={()=>{router.push('/')}}>Home</li>
                <li style={tortePage ? {color: 'rgb(200,0,522)'} : {color: 'black'}} onClick={()=>{router.push('/torte')}}>Torte</li>
                <li style={kolaciPage ? {color: 'rgb(200,0,522)'} : {color: 'black'}} onClick={()=>{router.push('/kolaci')}}>Kolaci</li>
                <li style={menuPage ? {color: 'rgb(200,0,522)'} : {color: 'black'}} onClick={()=>{router.push('/menu')}}>Menu</li>
                <li style={onamaPage ? {color: 'rgb(200,0,522)'} : {color: 'black'}} onClick={()=>{router.push('/o-nama')}}>O nama</li>
            </ul>
        </section>
        <section>
            <h2>Conact us:</h2>
            <ul className={styles.listaContact}>
                <li><a href='tel:+38266125118'><i className="fa fa-phone" aria-hidden="true"><AiFillPhone /></i> +38266125118</a></li>
                <li><a target="_blank" rel="noreferrer" href='https://www.instagram.com/fantazija20/'><i className="fa-instagram" aria-hidden="true"><AiFillInstagram /></i> fantazija20</a></li>
            </ul>
        </section>
    </div>
  )
}
