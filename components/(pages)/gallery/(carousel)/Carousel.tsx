"use client";
import styles from "./carousel.module.css";
import { useFirebase } from "@/hooks/useFirebase";
import { useCarousel } from "./CarouselContext";


export default function Carousel() {
    const { categoria, index, imgWidth }  = useCarousel();
    const CAMINHO_FIREBASE_GALERIA = `public/gallery/cakes/${categoria}`;
    const { data: images, error, loading } = useFirebase(CAMINHO_FIREBASE_GALERIA);

    //Verifica se a tela esta em mobile ou desktop
    useEffect(() => {setImgWidth(window.innerWidth >= 768 ? imgSizeDesktop : imgSizeMobile);}, [setImgWidth]);


    return (
        <div className={styles.carousel}>
            {error && <p className="text-red-500">{error}</p>}
            <ul> 
            {
                !loading && images.length > 0 ? (images.map((url, i) => (
                    <li key={url}><img src={url} alt={`Imagem ${i + 1}`} /></li>
                ))) : (
                    <>
                    <li><img src="/images/carregando_bolo.gif" alt="Fallback 1" /></li>
                    <li><img src="/images/carregando_bolo.gif" alt="Fallback 2" /></li>
                    <li><img src="/images/carregando_bolo.gif" alt="Fallback 3" /></li>
                    </>
                )
            }
            </ul>
        </div>
    );
}