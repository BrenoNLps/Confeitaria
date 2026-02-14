"use client";
import Image from "next/image";
import { useFirebase } from "@/hooks/useFirebase";
import { cakeType } from "./CarouselConfig";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

interface CarouselProps {
    categoria: cakeType;
}

export default function Carousel({ categoria }: CarouselProps) {
    const CAMINHO_FIREBASE_GALERIA = `public/gallery/cakes/${categoria}`;
    const { data: images, error, loading } = useFirebase(CAMINHO_FIREBASE_GALERIA);

    const placeholderImages = ["/images/carregando_bolo.gif","/images/carregando_bolo.gif","/images/carregando_bolo.gif"];
    const imagens = !loading && images.length > 0 ? images : placeholderImages;

    if (error) {return <p className="text-red-500 text-center">{error}</p>;}

    
    return (
        <div className="w-full h-full relative">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={8}
                slidesPerView={1}
                navigation
                pagination={{ 
                    clickable: true,
                    dynamicBullets: true,
                }}
                breakpoints={{
                    768: { 
                        slidesPerView: 3,
                        spaceBetween: 8,
                    },
                }}
                grabCursor={true}
                keyboard={{ enabled: true }}
                className="w-full h-full"
            >
                {imagens.map((url, i) => (
                    <SwiperSlide key={`${categoria}-${i}`}>
                        <Image 
                            src={url} 
                            alt={loading ? `Carregando imagem ${i + 1}` : `Bolo ${categoria} ${i + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover rounded-lg shadow-xl"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}