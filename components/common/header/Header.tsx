"use client";

import Toggle from "./navbar/Toggle";
import Logo from "./Logo";
import { useState } from "react";
import Nav from "./navbar/Navbar";

export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className="h-[15%] md:h-[20%] w-screen  flex md:flex-col items-center  border-black md:justify-center justify-center">
        <Toggle onToggle={() => setOpen(!open)} />
        <Logo />
        <Nav open={open} />
        </header>
    );
}

/*
fixed inset-0 bg-black opacity-97 z-50
<div className="bg-amber-950 w-full h-full fixed inset-0 z-3" ></div>
*/
