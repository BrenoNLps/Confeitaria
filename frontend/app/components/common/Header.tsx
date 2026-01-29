export default function Header() {
    return (
        <header className="h-[15%] md:h-[10%] w-screen  md:border-b-4 border-b-none flex items-center justify-center border-black">
            <div className="w-[87.5%] h-full flex items-center justify-center md:justify-start">
                <a href="/" className="h-[80%]">
                    <img src="images/logo_bolo.png" alt="bolo_logo" className="h-full"/>
                </a>
            </div>
        </header>
    );
}