
import Carousel from './Carousel';

export default function CarouselContainer(){
    return(
        <div className="w-[90%] h-[90%] bg-blue-200 bg-amber-150 flex items-center justify-center relative">

            <button className="absolute left-0 text-white text-9xl drop-shadow-[-1px_3px_3px_black] z-10 hover:text-black transition">&#x2039;</button>
            <Carousel/>
            <button className="absolute right-0 text-white text-9xl drop-shadow-[1px_3px_3px_black] z-10 hover:text-black transition">&#x203A;</button>
            
        </div>
    );
}