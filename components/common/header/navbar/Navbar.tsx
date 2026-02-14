
import styles from "./navbar.module.css"
import Link from "next/link";
export default function Nav({ open, onClose }: { open: boolean; onClose: () => void }) { 
    return (
        <nav className={open ? styles.navbar_toggle : styles.navbar_standard}>
            <ul>
                <li><Link href="/" onClick={onClose}>Início</Link></li>
                <li><Link href="/products" onClick={onClose}>Produtos</Link></li>
                <li><Link href="/contact" onClick={onClose}>Contato</Link></li>
                <li><Link href="/gallery" onClick={onClose}>Galeria</Link></li>
            </ul>
        </nav>
    );
}