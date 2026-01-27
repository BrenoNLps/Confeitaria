import Article from "./Article";
import Cover from "./Cover";
import SideRibbon from "./SideRibbon";

export default function Main () {         
    return (
        <main className="h-[80%] w-screen relative flex items-center">
            <SideRibbon />
            
            <div className="w-screen h-full flex flex-col md:flex-row items-center relative z-10" id="main_content">
                <Article/>
                <Cover/>
                <button className="md:ml-10 ml-2 mt-6 md:mt-10 w-[60%] md:w-[30%] h-12 font-bold rounded-3xl bg-pink-600 text-white hover:bg-pink-800 transition-colors block md:hidden"> Ver Produtos
                </button>
            </div>
        </main>
    );
}