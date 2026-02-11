import Article from "./Article";

export default function Container(){
    return (
        <section className="bg-amber-800  flex-col  md:flex-row ">
            <Article/>
        </section>
    );
}