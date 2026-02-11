import Carousel from './Carousel';
import styles from "./carousel.module.css"
import { INDICE_CARROSSEL_DESKTOP_PREV } from './CarouselConfig';
import { useCarousel } from './CarouselContext';



export default function CarouselContainer(){
    const { setIndex,totalImgs } = useCarousel();

    //const next = () => setIndex((i) => (i + 1));
    const next = () => setIndex((i) => Math.min(i + 1, totalImgs));
    const prev = () => setIndex((i) => Math.max(i - 1, INDICE_CARROSSEL_DESKTOP_PREV ));

    return(
        <div className="w-[90%] h-[90%]">
            <div className='w-full h-full flex items-center justify-center relative '>
                <button onClick={prev} className={`left-0 ${styles.button}`}>&#x2039;</button>
                <Carousel />
                <button onClick={next} className={`right-0 ${styles.button}`}>&#x203A;</button>
            </div>
        </div>
    );
}

/*
fixed inset-0 bg-black opacity-97 z-50
*/