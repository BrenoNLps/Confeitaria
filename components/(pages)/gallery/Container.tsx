"use client"

import { useState } from "react";
import CarouselContainer from "./(carousel)/CarouselContainer";
import Select, { cakeType } from "./(select)/Select";

export default function Container(){
    const [categoria, setCategoria] = useState(cakeType.SIMPLE);


    return(
        <div className="h-full w-full  flex flex-col justify-center items-center">
            <Select value={categoria} onChange={setCategoria}/>
            <CarouselContainer categoria={categoria}/>
        </div>
    );
}

/*

fixed inset-0 bg-black opacity-85 flex items-center justify-center z-50 

*/