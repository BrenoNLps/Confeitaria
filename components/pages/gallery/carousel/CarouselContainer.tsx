"use client";
import { useState } from "react";
import Carousel from './Carousel';
import { cakeType, categorias } from './CarouselConfig';



export default function CarouselContainer(){
    const [categoria, setCategoria] = useState<cakeType>(cakeType.SIMPLE);

    return(
        <div className="w-full max-w-7xl mx-auto px-4">
            <div className="flex gap-2 mb-4 justify-center flex-wrap ">
                {categorias.map(({ tipo, label }) => (
                    <button 
                        className={`px-4 py-2 rounded transition-colors ${categoria === tipo ? 'bg-rose-400 text-white' : 'bg-gray-300 hover:bg-gray-400 text-gray-700'}`}
                        key={tipo} 
                        onClick={() => setCategoria(tipo)}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
}

/*
fixed inset-0 bg-black opacity-97 z-50
*/