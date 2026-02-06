
export default function Image() {
    return (
        <div className="w-full h-[70%] md:h-full md:flex-1 justify-center items-center flex flex-col ">
            <div className=" w-[70%] md:w-[60%] h-[50%] md:h-[80%] justify-center items-center flex">
                <img src="images/bolo.png" alt="Bolo" className="h-full w-full object-cover md:rounded-none rounded-2xl border-5 border-black" />
            </div>

            <button className="mt-6 w-[70%] md:w-[30%] h-12 font-bold rounded-2xl bg-black text-white hover:bg-rose-400 transition-colors block md:hidden">
                <a href="/products">Ver Cardápio</a>
            </button>
        </div>  
    );
}