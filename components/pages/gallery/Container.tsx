"use client";
import { useState } from "react";
import { cakeType, categorias } from "./carousel/CarouselConfig";
import Carousel from "./carousel/Carousel";



export default function Container() {
      const [categoria, setCategoria] = useState<cakeType>(cakeType.SIMPLE);
  return (
      <section className="h-full flex items-center justify-cente ">
                <div className="flex-1 flex flex-col w-full max-w-7xl mx-auto  ">
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
                    <div className="w-full h-[18rem] md:h-[25rem]">
                        <Carousel categoria={categoria} />
                    </div>
                </div>
      </section>
  );
}
