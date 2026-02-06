export default function Logo(){
    return(
        <div className=" w-full h-[70%] md:h-[50%]  md:border-b-4 border-b-none  flex justify-center md:justify-start ">
                <a href="/" className=" ml-0 md:ml-[8%] flex justify-end items-center md:justify-start ">
                    <img src="images/logo.svg" alt="bolo_logo" className="h-11/12 w-50 md:w-60"/>
                </a>
        </div>        
    );
}