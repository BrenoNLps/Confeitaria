import Link from "next/link";
import Image from "next/image";

export default function Logo(){
    return(
        <div className=" w-full h-[70%] md:h-[50%]  md:border-b-4 border-b-none  flex justify-center md:justify-start ">
                <Link href="/" className=" ml-0 md:ml-[8%] flex justify-end items-center md:justify-start ">
                    <Image src="images/logo.svg" alt="bolo_logo"  width={240} height={48} className="h-11/12 w-50 md:w-60"/>
                </Link>
        </div>        
    );
}