"use client"

import { useState } from "react";
import CarouselContainer from "./(carousel)/CarouselContainer";
import Select from "./(select)/Select";
import { CarouselProvider } from "./(carousel)/CarouselContext";

export default function Container(){


    return(
        <CarouselProvider>
            <div className="h-full w-full  flex flex-col justify-center items-center">
                <Select/>
                <CarouselContainer/>
            </div>
        </CarouselProvider>

    );
}

/*

fixed inset-0 bg-black opacity-85 flex items-center justify-center z-50 

*/