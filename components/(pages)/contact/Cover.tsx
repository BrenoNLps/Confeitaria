import Image from "next/image";

export default function Cover(){
    return ( 
        <div className="md:w-[50%] md:h-full w-full h-[30%]  flex justify-center items-center bg-black md:bg-transparent">
            <div className=" h-[50%] aspect-square justify-center items-center flex relative">
                <Image 
                src="/images/confeiteira.jpg" 
                alt="Confeiteira" 
                fill
                className="object-cover rounded-full border-5 border-white md:border-black" />
            </div>
        </div>
        
    );
}