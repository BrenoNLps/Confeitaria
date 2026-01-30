export default function Logo(){
    return(
        <div className="md:w-[87.5%] w-full h-[80%] ">
            <a href="/" className="h-full md:w-full w-[90%]  flex justify-end items-center md:justify-start">
                <img src="images/logo.svg" alt="bolo_logo" className="h-[90%] w-50 md:w-60"/>
            </a>
        </div>        
    );
}