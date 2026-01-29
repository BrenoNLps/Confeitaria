export default function Cover(){
    return ( 
        <div className="md:w-[50%] md:h-full w-full h-[30%]  flex justify-center items-center bg-black md:bg-transparent">
            <div className=" h-[60%] aspect-square justify-center items-center flex">
                <img src="images/confeiteira.jpg" alt="Confeiteira" className="w-full object-cover rounded-full border-5 border-white md:border-black" />
            </div>
        </div>
        
    );
}