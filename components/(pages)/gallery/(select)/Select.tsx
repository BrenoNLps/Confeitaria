"use client"

import { cakeType } from "../(carousel)/CarouselConfig";
import { useCarousel } from "../(carousel)/CarouselContext";




export default function Select(){
    const { categoria, setCategoria } = useCarousel();

    return (
        <div className="w-full h-[10%] flex justify-center items-center " >
            <select 
            value={categoria} 
            onChange={(e) => setCategoria(e.target.value as cakeType)}
            className="h-full w-full md:w-[90%] bg-black text-white text-center bord-0 appearance-none hover:bg-rose-400 hover:text-white focus:outline-0 } "

            >
                <option value="" disabled selected hidden>Escolha ▼</option>
                <option value={cakeType.THEMATIC}>Temático</option>
                <option value={cakeType.SIMPLE}>Simples</option>
                <option value={cakeType.SPECIAL}>Especial</option>
                <option value={cakeType.MONTHLY}>MesVersário</option>
                <option value={cakeType.COMMEMORATIVE}>Comemorativo</option>
            </select>
            
        </div>
    );
}
