import React,{ useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from '../../styles/Kolac.module.scss'


// import required modules
import { Pagination, Navigation } from "swiper";
import Head from 'next/head';
import Image from 'next/image'

export default function Kolac({kolac}) {
    useEffect(()=>{
        window.scrollTo(0, 0)
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
                    <SwiperSlide><Image width={260} height={260} className={styles.slikaKolaca} src={kolac.slika} alt="Fantazija" /></SwiperSlide>
                    <SwiperSlide><Image width={260} height={260} className={styles.slikaKolaca} src={kolac.slika} alt="Fantazija" /></SwiperSlide>
                    <SwiperSlide><Image width={260} height={260} className={styles.slikaKolaca} src={kolac.slika} alt="Fantazija" /></SwiperSlide>
                    <SwiperSlide><Image width={260} height={260} className={styles.slikaKolaca} src={kolac.slika} alt="Fantazija" /></SwiperSlide>
                    <SwiperSlide><Image width={260} height={260} className={styles.slikaKolaca} src={kolac.slika} alt="Fantazija" /></SwiperSlide>
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
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://fantazija-nextjs-arben-djokovic.vercel.app/api/kolaci')
    const posts = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { kolacId: post.id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
  }
  export async function getStaticProps(constext) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://fantazija-nextjs-arben-djokovic.vercel.app/api/kolaci/${constext.params.kolacId}`)
    const kolac = await res.json()
  
    // Pass post data to the page via props
    return { props: { kolac },
    revalidate: 2 }
  }