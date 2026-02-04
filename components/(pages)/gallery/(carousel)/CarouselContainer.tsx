
import { useState } from 'react';
import Carousel from './Carousel';
import { cakeType } from '../(select)/Select';

type Props = {
    categoria: cakeType;
};


export default function CarouselContainer({ categoria }: Props){
    return(
        <div className="w-[90%] h-[90%] bg-amber-150 flex items-center justify-center relative">

            <button className="absolute left-0 text-white text-9xl drop-shadow-[-1px_3px_3px_black] z-10 hover:text-black transition">&#x2039;</button>
            <Carousel categoria={categoria}/>
            <button className="absolute right-0 text-white text-9xl drop-shadow-[1px_3px_3px_black] z-10 hover:text-black transition">&#x203A;</button>
            
        </div>
    );
}