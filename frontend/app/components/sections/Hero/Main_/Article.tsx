export default function Article () {     
    return (
        <article className="w-full h-[30%] md:flex-1 md:h-full flex flex-col justify-center items-center bg-white" id="main_text">
            <div className="w-[70%]  flex flex-col justify-center md:items-start items-center">   
                <h1 className="title text-pink-600 ">Confeitaria da Mari</h1>
                <h2 className="title text-black ">Feito com sabor, cuidado e qualidade.</h2>

                <button className="text-4xl mt-6 md:mt-10  font-bold rounded-4xl border-3 border-black bg-pink-600 text-white hover:bg-pink-800 transition-colors hidden md:block p-3 pl-5 pr-5">Ver Cardápio
                </button>
            </div>

            

        </article>
    );
}