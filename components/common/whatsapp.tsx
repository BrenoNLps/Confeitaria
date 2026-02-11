import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppButton() {
    const phoneNumber = "551634110322";
    const message = "Olá! Vi o site e gostaria de fazer uma encomenda.";
    
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    return (
        <Link 
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6  bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
        >
            <FaWhatsapp className="w-8 h-8" />
        </Link>
    );
}