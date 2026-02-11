import Article from "./Article";
import Cover from "./Cover";

export default function MainContainer() {
    return (
        <section className="flex-col  md:flex-row ">
            <Article/>
            <Cover/>
        </section>
    );
}