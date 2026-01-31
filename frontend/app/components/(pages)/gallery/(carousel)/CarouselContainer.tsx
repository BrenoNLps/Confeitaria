
import Carousel from './Carousel';

export default function CarouselContainer(){
    return(
        <div className="w-[90%] h-[90%] bg-blue-200 bg-amber-150 flex items-center justify-center">

            <button className="absolute left-[5%] text-white text-9xl drop-shadow-[2px_2px_3px_black] z-10 hover:text-black transition">&#x2039;</button>
            <Carousel/>
            <button className="absolute right-[5%] text-white text-9xl drop-shadow-[2px_2px_3px_black] z-10 hover:text-black transition">&#x203A;</button>
            
        </div>
    );
}