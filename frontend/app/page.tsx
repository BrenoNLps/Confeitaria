import Header from "./components/common/Header"
import Nav from "./components/common/Navbar"
import Main from "./components/pages/Hero/content/Main"


export default function Home() {
  return (
        <div className="page-container">
            <Header/>
            <Nav/>
            <Main/>
        </div>
  );
}
