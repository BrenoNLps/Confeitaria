import Article from "./Article";
import Button from "./Button";
import Cover from "./Cover";
import SideRibbon from "./SideRibbon";

export default function Main () {         
    return (
        <main className="h-[80%] w-screen relative flex items-center">
            <SideRibbon />
            
            <div className="w-screen h-full flex flex-col md:flex-row items-center relative z-10">
                <Article/>
                <Cover/>
                <Button />
            </div>
        </main>
    );
}