import Header from "../../common/Header";
import Nav from "../../common/Navbar";
import Main from "./content/Main";

export function About() {
    return (
    <section className="h-screen w-screen flex items-center justify-center bg-green-200">
        <Header/>
        <Nav/>
        <Main/>
    </section>
    );
}