
import styles from "./navbar.module.css"
import Link from "next/link";
export default function Nav({ open }: { open: boolean }) { 
    return (
        <nav className={open ? styles.navbar_toggle : styles.navbar_standard}>
            <ul>
                <li><Link href="/" >Início</Link></li>
                <li><Link href="/products">Produtos</Link></li>
                <li><Link href="/contact" >Contato</Link></li>
                <li><Link href="/gallery" >Galeria</Link></li>
            </ul>
        </nav>
    );
}