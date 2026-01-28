import Header from "../../common/Header";
import Nav from "../../common/Navbar";
import Main from "./content/Main";

export function About() {
    return (
        <div className="page-container">
            <Header/>
            <Nav/>
            <Main/>
        </div>
    );
}