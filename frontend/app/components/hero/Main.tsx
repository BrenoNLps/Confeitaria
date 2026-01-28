import Article from "./Article";
import Cover from "./Cover";
import SideRibbon from "./SideRibbon";

export default function Main () {         
    return (
        <main className="h-[90%] md:h-[80%] w-screen relative flex items-center ">

            <div className="w-screen h-full flex flex-col md:flex-row items-center relative z-10" id="main_content">
                <Article/>
                <Cover/>
            </div>
            <SideRibbon />
        </main>
    );
}