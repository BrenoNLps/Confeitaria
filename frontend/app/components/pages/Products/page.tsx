import Header from "../../common/Header";
import Nav from "../../common/Navbar";
import Main from "./content/Main";


export function Products() {
    return (
    <section className="h-screen w-screen flex items-center justify-center bg-yellow-200">
        <Header/>
        <Nav/>
        <Main/>
    </section>
    );
}   