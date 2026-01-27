import Button from "./Button";

export default function Article () {     
    return (
        <article className="w-full h-[22%]  md:w-[55%] md:h-full flex flex-col justify-center items-center bg-black">
            <h1 className="title text-pink-600 ">Confeitaria artesanal</h1>
            <h2 className="title text-black ">feita com sabor, cuidado e qualidade</h2>
            <Button/>
        </article>
    );
}