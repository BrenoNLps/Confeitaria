export default function Article () {     
    return (
        <article className="w-full h-[22%]  md:w-[55%] md:h-full flex flex-col justify-center items-center bg-white md:bg-transparent" id="main_text">
            <h1 className="title text-pink-600 ">Confeitaria artesanal</h1>
            <h2 className="title text-black ">feita com sabor, cuidado e qualidade</h2>
            
            <button className="md:ml-10 ml-2 mt-6 md:mt-10 w-[60%] md:w-[30%] h-12 font-bold rounded-3xl bg-pink-600 text-white hover:bg-pink-800 transition-colors hidden md:block">Ver Produtos
            </button>
        </article>
    );
}