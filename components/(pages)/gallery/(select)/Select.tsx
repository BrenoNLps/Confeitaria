"use client"

import { cakeType } from "../(carousel)/CarouselConfig";
import { useCarousel } from "../(carousel)/CarouselContext";




export default function Select(){
    const { categoria, setCategoria } = useCarousel();

    return (
        <div className="w-full h-[10%] flex justify-center items-center flex-col " >

            <div className="w-full md:w-[90%] bg-black text-white flex justify-between">
                <h1 className="ml-[2%]"> Categoria</h1>
                <h1 className="mr-[2%]"> ▼</h1>
            </div>

            <select 
            value={categoria} 
            onChange={(e) => setCategoria(e.target.value as cakeType)}
            className="h-full w-full md:w-[90%] bg-black text-white text-center bord-0 appearance-none hover:bg-rose-400 hover:text-white focus:outline-0 } "
            >
                <option value="" disabled selected hidden>Escolha ▼</option>
                <option value={cakeType.SIMPLE}>Bolo simples</option>
                <option value={cakeType.THEMATIC}>Bolo temático</option>
                <option value={cakeType.SPECIAL}>Bolo especial</option>
                <option value={cakeType.MONTHLY}>Bolo mesVersário</option>
                <option value={cakeType.COMMEMORATIVE}>Bolo comemorativo</option>
            </select>
        </div>
    );
}
//            <span className="text-sm text-gray-500">Selecione para mudar a categoria</span>