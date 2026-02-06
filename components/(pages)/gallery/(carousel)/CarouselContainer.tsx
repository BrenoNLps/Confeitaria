import Carousel from './Carousel';
import styles from "./carousel.module.css"


export default function CarouselContainer(){
    return(
        <div className="w-[90%] h-[90%] bg-amber-150 flex items-center justify-center relative">

            <button className={`left-0 ${styles.button}`}>&#x2039;</button>
            <Carousel />
            <button className={`right-0 ${styles.button}`}>&#x203A;</button>
            
        </div>
    );
}