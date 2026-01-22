export default function Nav() { 
    return (
        <nav className="h-[10%] w-screen border-b-5 border-black bg-stone-100">
            <ul className="h-full w-full flex justify-center items-center gap-10 text-black font-bold text-lg">
                <li><a href="#produtos" >Produtos</a></li>
                <li><a href="#contato" >Contato</a></li>
                <li><a href="#sobre" >Sobre</a></li>
                <li><a href="#conta" >Conta</a></li>
            </ul>
        </nav>
    );
}   