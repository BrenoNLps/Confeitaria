import React from "react";
import Header from "./Header/Header";
import Nav from "./Navbar/Navbar";
import Main from "./Main_/Main";

export default function Hero () {         
    return (
        <section className="h-screen w-screen flex flex-col items-center justify-center bg-pink-200">
            <Header />
            <Nav />
            <Main />
        </section>

    );
}