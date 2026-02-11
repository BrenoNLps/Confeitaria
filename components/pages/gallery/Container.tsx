"use client";

import CarouselContainer from "./carousel/CarouselContainer";
import Select from "./select/Select";
import { CarouselProvider } from "./carousel/CarouselContext";

export default function Container() {
  return (
    <CarouselProvider>
      <section className="flex-col">
        <Select />
        <CarouselContainer />
      </section>
    </CarouselProvider>
  );
}
