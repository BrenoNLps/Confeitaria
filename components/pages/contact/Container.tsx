import Article from "./Article";
import Cover from "./Cover";

export default function Container(){  
    return (    
        <section className=" flex-col  md:flex-row ">
            <Cover/>
            <Article/>
        </section>
    );
}

// <img src="images/confeiteira.jpg" alt="Confeiteira" className="w-full object-cover rounded-full border-5 border-black" />