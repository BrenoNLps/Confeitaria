import CarouselContainer from "./(carousel)/CarouselContainer";
import Select from "./Select";

export default function Container(){
    return(
        <div className="h-full w-full  flex flex-col justify-center items-center">
            <Select/>
            <CarouselContainer/>
        </div>
    );
}

/*

fixed inset-0 bg-black opacity-85 flex items-center justify-center z-50 

*/