import Toggle from "./(header)/Toggle";
import styles from "./navbar.module.css"

export default function Nav() { 
    return (
        <nav className={styles.navbar_toggle}>
            <ul>
                <li><a href="/" >Home</a></li>
                <li><a href="/products" >Produtos</a></li>
                <li><a href="/contact" >Contato</a></li>
                <li><a href="/gallery" >Galeria</a></li>
            </ul>
        </nav>
    );
}