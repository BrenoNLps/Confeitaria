"use client";

import styles from "./carousel.module.css";
import { cakeType } from "../(select)/Select";
import { useFirebase } from "@/hooks/useFirebase";

type Props ={
    categoria: string;
}

export default function Carousel({ categoria }: Props) {
    const { data: images, error, loading } = useFirebase(
        `public/gallery/cakes/${categoria}`
    );
    
    return (
        <div className="overflow-hidden w-[25rem] md:w-[76rem] h-full flex items-center justify-center">
        {error && <p className="text-red-500">{error}</p>}
        <ul className={styles.carousel}>

            {!loading && images.length > 0 ? (images.map((url, index) => (
                <li key={index}>
                    <img src={url} alt={`Imagem ${index + 1}`} />
                </li>
            ))
            ) :
            (
                <>
                <li><img src="/images/carregando_bolo.gif" alt="Fallback 1" /></li>
                <li><img src="/images/carregando_bolo.gif" alt="Fallback 2" /></li>
                <li><img src="/images/carregando_bolo.gif" alt="Fallback 3" /></li>
                </>
            )}
        </ul>
        </div>
    );
}