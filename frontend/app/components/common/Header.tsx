export default function Header() {
    return (
        <header className="h-[15%] md:h-[10%] w-screen  text-[1.6rem] md:text-4xl font-bold border-b-5 flex items-center justify-center border-black text-black ">
            <div className="w-[87.5%] h-full flex items-center justify-center md:justify-start">
                <p>Mari L</p>
                <img src="images/logo_bolo.png" alt="bolo_logo" className=" h-full" />
                <p>pes</p>
            </div>

        </header>
    );
}