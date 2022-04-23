import React,{useRef, useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.scss'
import { FaTimes } from '@react-icons/all-files/fa/FaTimes'
import { FaBars } from '@react-icons/all-files/fa/FaBars'
import Image from 'next/image';
import logo from '../../public/logo.png'

export default function Header() {
    const navigation = useRef()
    const router = useRouter()
    let [headerOpen, setHeaderOpen] = useState(false)
    let [tortePage, setTortePage] = useState(false)
    let [kolaciPage, setKolaciPage] = useState(false)
    let [menuPage, setMenuPage] = useState(false)
    let [onamaPage, setOnamaPage] = useState(false)
    useEffect(()=>{
        if(window.location.href.includes('torte')){
            setTortePage(true)
            setKolaciPage(false)
            setMenuPage(false)
            setOnamaPage(false)
        }
        else if(window.location.href.includes('kolaci')){
            setTortePage(false)
            setKolaciPage(true)
            setMenuPage(false)
            setOnamaPage(false)
        }
        else if(window.location.href.includes('menu')){
            setTortePage(false)
            setKolaciPage(false)
            setMenuPage(true)
            setOnamaPage(false)
        }
        else if(window.location.href.includes('nama')){
            setTortePage(false)
            setKolaciPage(false)
            setMenuPage(false)
            setOnamaPage(true)
        }
        else{
            setTortePage(false)
            setKolaciPage(false)
            setMenuPage(false)
            setOnamaPage(false)
        }
    })
    let toggleNav = () => {
        if(window.innerWidth < 601){
            if(headerOpen){
              navigation.current.style.opacity = "0";
                setTimeout(() => {
                    navigation.current.style.display = "none";
                    setHeaderOpen(false)
                }, 400);
            }
            else{
                navigation.current.style.display = "flex";
                setTimeout(() => {
                    navigation.current.style.opacity = "1";
                    setHeaderOpen(true)
                }, 10);
            }
        }
    }
  return (
    <div className={styles.header}>
        <Image onClick={()=>{router.push('/')}} height={60} width={140} className={styles.logo} src={logo} alt="Fantazija" />
        <ul ref={navigation}>
            <li className={styles.phone} onClick={()=>{router.push('/');toggleNav()}}><Image src={logo} width={200} height={110} alt="Fantazija" /></li>
            <li className={styles.linija}>|</li>
            <li style={tortePage ? {color: 'rgb(200,0,522)'} : {color: 'black'}} onClick={()=>{router.push('/torte');toggleNav()}}>Torte</li>
            <li className={styles.linija}>|</li>
            <li style={kolaciPage ? {color: 'rgb(200,0,522)'} : {color: 'black'}} onClick={()=>{router.push('/kolaci');toggleNav()}}>Kolaci</li>
            <li className={styles.linija}>|</li>
            <li style={menuPage ? {color: 'rgb(200,0,522)'} : {color: 'black'}} onClick={()=>{router.push('/menu');toggleNav()}}>Menu</li>
            <li className={styles.linija}>|</li>
            <li style={onamaPage ? {color: 'rgb(200,0,522)'} : {color: 'black'}} onClick={()=>{router.push('/o-nama');toggleNav()}}>O nama</li>
        </ul>
        <div className={styles.openNav}>
            {headerOpen ? <span onClick={toggleNav} className={styles.fa}><FaTimes /></span> : <span onClick={toggleNav} className={styles.fa}><FaBars /></span>}
        </div>
    </div>
  )
}
