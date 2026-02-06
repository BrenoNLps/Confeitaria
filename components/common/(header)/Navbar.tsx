import Toggle from "./Toggle";
import styles from "./navbar.module.css"

export default function Nav({ open }: { open: boolean }) { 
    return (
        <nav className={open ? styles.navbar_toggle : styles.navbar_standard}>
            <ul>
                <li><a href="/" >Home</a></li>
                <li><a href="/products" >Produtos</a></li>
                <li><a href="/contact" >Contato</a></li>
                <li><a href="/gallery" >Galeria</a></li>
            </ul>
        </nav>
    );
}