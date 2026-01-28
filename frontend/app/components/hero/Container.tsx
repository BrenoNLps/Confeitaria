import Article from "./Article";
import Cover from "./Cover";

export default function MainContainer() {
    return (
        <div className="w-full h-full flex flex-col md:flex-row items-center relative">
            <Article/>
            <Cover/>
        </div>
    );
}