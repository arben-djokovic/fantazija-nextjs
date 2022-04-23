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

export default function Torta({torta}) {
    let router = useRouter()
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
  return (
    <div className={styles.kolac}>
    <Head>
      <title>{"Fantazija - kolac -" + torta.ime}</title>
      <meta name="description" content={"Fantazija kolac - " + torta.ime + ". Fantazija - Tuzi"} />
      <link rel="shortcut icon" href="../../assets/logo.png" type="image/x-icon" />
    </Head>
        <div className={styles.kolacSection}>
            <h1>Kolac: {torta.ime}</h1>
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
                    <SwiperSlide><img className={styles.slikaKolaca} src={torta.slika} alt="Fantazija" /></SwiperSlide>
                    <SwiperSlide><img className={styles.slikaKolaca} src={torta.slika} alt="Fantazija" /></SwiperSlide>
                    <SwiperSlide><img className={styles.slikaKolaca} src={torta.slika} alt="Fantazija" /></SwiperSlide>
                    <SwiperSlide><img className={styles.slikaKolaca} src={torta.slika} alt="Fantazija" /></SwiperSlide>
                    <SwiperSlide><img className={styles.slikaKolaca} src={torta.slika} alt="Fantazija" /></SwiperSlide>
                </Swiper>
                </div>
                <div className={styles.aboutKolac}>
                    <h2>{torta.ime}</h2>
                    <p>{torta.opis}</p>
                    <p className={styles.cijena}>cijena: <span>{torta.cijena}$</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:3000/api/torte')
    const posts = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { tortaId: post.id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  export async function getStaticProps(constext) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`http://localhost:3000/api/torte/${constext.params.tortaId}`)
    const torta = await res.json()
  
    // Pass post data to the page via props
    return { props: { torta } }
  }