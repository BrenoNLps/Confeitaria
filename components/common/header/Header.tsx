"use client";

import Toggle from "./navbar/Toggle";
import Logo from "./Logo";
import { useState } from "react";
import Nav from "./navbar/Navbar";

export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className="h-[15%] md:h-[20%] w-screen  flex md:flex-col items-center  border-black md:justify-center justify-center">
        <Toggle isOpen={open} onToggle={() => setOpen(!open)} />
        <Logo />
        <Nav open={open} onClose={() => setOpen(false)}  />
        </header>
    );
}

