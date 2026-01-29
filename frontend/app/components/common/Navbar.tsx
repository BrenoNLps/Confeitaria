import link from "next/link";

export default function Nav() { 
    return (
        <nav className="h-[10%] w-screen hidden md:block">
            <ul className="h-full w-full flex justify-center items-center gap-10 text-black font-bold text-lg">
                <li><a href="/" >Home</a></li>
                <li><a href="/products" >Produtos</a></li>
                <li><a href="/contact" >Contato</a></li>
                <li><a href="/gallery" >Galeria</a></li>
            </ul>
        </nav>
    );
}   