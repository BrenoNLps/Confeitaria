"use client";

import Toggle from "./navbar/Toggle";
import Logo from "./Logo";
import { useState } from "react";
import Nav from "./navbar/Navbar";

export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className="h-24 md:h-52 w-full shrink-0 flex md:flex-col items-center  border-black md:justify-center justify-center">
        <Toggle isOpen={open} onToggle={() => setOpen(!open)} />
        <Logo />
        <Nav open={open} onClose={() => setOpen(false)}  />
        </header>
    );
}

