import styles from './carousel.module.css';

export default function Carousel(){
    return(

        <div className="overflow-hidden w-[25rem] md:w-[76rem] h-full  flex items-center justify-center">
            <ul className={styles.carousel}>
                <li><img src="/images/bolo.png" alt="Bolo 1"/></li>
                <li><img src="/images/bolo.png" alt="Bolo 2"/></li>
                <li><img src="/images/bolo.png" alt="Bolo 3"/></li>
                <li><img src="/images/bolo.png" alt="Bolo 1"/></li>
                <li><img src="/images/bolo.png" alt="Bolo 2"/></li>
                <li><img src="/images/bolo.png" alt="Bolo 3"/></li>
            </ul>
        </div>

    );
}