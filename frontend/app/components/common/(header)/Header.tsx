import Toggle from "./Toggle";
import Logo from "./Logo";

export default function Header() {
    return (
        <header className="h-[15%] md:h-[10%] w-screen  md:border-b-4 border-b-none flex items-center  border-black md:justify-center justify-center">
            <Toggle/>
            <Logo/>
        </header>
    );
}