import React,{useState, useEffect} from 'react'
import Storage from '../../Storage';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from '../../styles/Kolac.module.scss'


// import required modules
import { Pagination, Navigation } from "swiper";
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Kolac() {
    let [kolac, setKolac] = useState({})
    let router = useRouter()
    let {kolacId} = router.query
    useEffect(()=>{
        window.scrollTo(0, 0)
        Storage.kolaci.map(kolac =>{
            if(kolac.id == kolacId){
                setKolac(kolac)
            }
        })
    },[])
  return (
    <div className={styles.kolac}>
    <Head>
      <title>{"Fantazija - kolac -" + kolac.ime}</title>
      <meta name="description" content={"Fantazija kolac - " + kolac.ime + ". Fantazija - Tuzi"} />
      <link rel="shortcut icon" href="../../assets/logo.png" type="image/x-icon" />
    </Head>
        <div className={styles.kolacSection}>
            <h1>Kolac: {kolac.ime}</h1>
            <div className={styles.kolacInfos}>
                <div className={styles.imageSwiper}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className={styles.mySwiper}
                >
                    <SwiperSlide><img className={styles.slikaKolaca} src={kolac.slika} alt="Fantazija" /></SwiperSlide>
                    <SwiperSlide><img className={styles.slikaKolaca} src={kolac.slika} alt="Fantazija" /></SwiperSlide>
                    <SwiperSlide><img className={styles.slikaKolaca} src={kolac.slika} alt="Fantazija" /></SwiperSlide>
                    <SwiperSlide><img className={styles.slikaKolaca} src={kolac.slika} alt="Fantazija" /></SwiperSlide>
                    <SwiperSlide><img className={styles.slikaKolaca} src={kolac.slika} alt="Fantazija" /></SwiperSlide>
                </Swiper>
                </div>
                <div className={styles.aboutKolac}>
                    <h2>{kolac.ime}</h2>
                    <p>{kolac.opis}</p>
                    <p className={styles.cijena}>cijena: <span>{kolac.cijena}$</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}
