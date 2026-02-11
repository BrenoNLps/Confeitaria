
import Image from "next/image";

export default function Cover() {
    return (
        <div className="w-full h-[70%] md:h-full md:flex-1 justify-center items-center flex flex-col ">
            <div className=" w-[70%] md:w-[60%] h-[50%] md:h-[80%] justify-center items-center flex relative">
                <Image
                    src="/images/bolo.png" 
                    alt="Bolo" 
                    fill
                    className="object-cover md:rounded-none rounded-2xl border-5 border-black" 
                />
            </div>


                <a href="/products" className="mt-6 w-[70%] md:w-[30%] h-12 font-bold rounded-2xl bg-black text-white hover:bg-rose-400 transition-colors flex justify-center items-center md:hidden">Ver Cardápio</a>

        </div>  
    );
}