import React,{useRef, useState} from 'react'
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.scss'

export default function Header() {
    const navigation = useRef()
    const router = useRouter()
    let [headerOpen, setHeaderOpen] = useState(false)
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
        <img onClick={()=>{router.push('/')}} className={styles.logo} src='./logo.png' alt="Fantazija" />
        <ul ref={navigation}>
            <li className={styles.phone} onClick={()=>{router.push('/');toggleNav()}}><img src='./logo.png' alt="Fantazija" /></li>
            <li className={styles.linija}>|</li>
            <li onClick={()=>{router.push('/torte');toggleNav()}}>Torte</li>
            <li className={styles.linija}>|</li>
            <li onClick={()=>{router.push('/kolaci');toggleNav()}}>Kolaci</li>
            <li className={styles.linija}>|</li>
            {/* <li onClick={()=>{router.push('/ostalo');toggleNav()}}>Ostalo</li>
            <li className={styles.linija}>|</li> */}
            <li onClick={()=>{router.push('/menu');toggleNav()}}>Menu</li>
            <li className={styles.linija}>|</li>
            <li onClick={()=>{router.push('/o-nama');toggleNav()}}>O nama</li>
        </ul>
        <div className={styles.openNav}>
            {headerOpen ? <i onClick={toggleNav} className="styles.fa fa-times" aria-hidden="true"></i> : <i onClick={toggleNav} className="fa fa-bars" aria-hidden="true">=</i>}
        </div>
    </div>
  )
}
