import Header from "./components/common/Header"
import Nav from "./components/common/Navbar"
import Main from "./components/pages/Hero/Main"


export default function Home() {
  return (
        <section className="h-screen w-screen flex flex-col items-center justify-center bg-white">
            <Header/>
            <Nav/>
            <Main/>
        </section>


  );
}
