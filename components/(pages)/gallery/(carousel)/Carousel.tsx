"use client";
import styles from "./carousel.module.css";
import { useFirebase } from "@/hooks/useFirebase";
import { useCarousel } from "./CarouselContext";
import { imgSizeDesktop, imgSizeMobile, INDICE_CARROSSEL_DESKTOP_NEXT_DESK, INDICE_CARROSSEL_DESKTOP_NEXT_MOBI, marginSize } from "./CarouselConfig";
import { useEffect } from "react";


export default function Carousel() {
    const { categoria, index, imgWidth,setImgWidth,totalImgs, setTotalImgs }  = useCarousel();
    const CAMINHO_FIREBASE_GALERIA = `public/gallery/cakes/${categoria}`;
    const { data: images, error, loading } = useFirebase(CAMINHO_FIREBASE_GALERIA);

    //Verifica se a tela esta em mobile ou desktop
    useEffect(() => {setImgWidth(window.innerWidth >= 768 ? imgSizeDesktop : imgSizeMobile);}, [setImgWidth]);


    return (
        <div className={styles.carousel} >
            {error && <p className="text-red-500">{error}</p>}
            <ul style={{transform: `translateX(-${index * (imgWidth + marginSize)}rem)`}}> 
                {!loading && images.length > 0 ? (images.map((url, i) => (
                    <li key={url}><img src={url} alt={`Imagem ${i + 1}`} /></li>
                ))) : 
                (<>
                    <li><img src="/images/carregando_bolo.gif" alt="Fallback 1" /></li>
                    <li><img src="/images/carregando_bolo.gif" alt="Fallback 2" /></li>
                    <li><img src="/images/carregando_bolo.gif" alt="Fallback 3" /></li>
                </>)
                }
            </ul>
        </div>
    );
}