import Article from "./Text";
import Cover from "./Image";

export default function MainContainer() {
    return (
        <div className="w-full h-full flex flex-col md:flex-row items-center relative" id="main_content">
            <Article/>
            <Cover/>
        </div>
    );
}