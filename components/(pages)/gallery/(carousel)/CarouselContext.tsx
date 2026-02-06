'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { cakeType, imgSizeDesktop, imgSizeMobile } from "./CarouselConfig";


const CarouselContext = createContext<CarouselContextType | null>(null);

type CarouselContextType = {
    categoria : cakeType ; setCategoria : (c: cakeType) => void;
    index     : number   ; setIndex     : (i: number  ) => void;
    imgWidth  : number   ; setImgWidth  : (w: number  ) => void;
    totalImgs : number   ; setTotalImgs : (w: number  ) => void;
};

export function CarouselProvider({ children }: { children: React.ReactNode }) {
    const [categoria, setCategoria ] = useState(cakeType.SIMPLE);
    const [index    , setIndex     ] = useState(       0       );
    const [imgWidth , setImgWidth  ] = useState( imgSizeMobile );
    const [totalImgs, setTotalImgs ] = useState(       0       );

    return (
        <CarouselContext.Provider value={{ categoria, setCategoria, index, setIndex, imgWidth, setImgWidth,totalImgs, setTotalImgs }}>
            {children}
        </CarouselContext.Provider>
    );
}


export function useCarousel() {
    const ctx = useContext(CarouselContext);
    if (!ctx) throw new Error("useCarousel deve ser usado dentro de CarouselProvider");
    return ctx;
}