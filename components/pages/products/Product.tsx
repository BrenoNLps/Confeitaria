// Product.tsx
import Image from "next/image";

interface ProductProps {
    nome: string;
    descricao: string;
    valor: number;
    imagem: string;
}

export default function Product({ nome, descricao, valor, imagem }: ProductProps) {
    return (
        <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg group cursor-pointer">
            <div className="relative w-full h-48 overflow-hidden">
                <Image src={imagem}alt={nome}fill className="object-cover transition-transform duration-500 group-hover:scale-110"/>
                <div className="absolute top-3 right-3 bg-black text-white text-sm font-bold px-3 py-1 rounded-full shadow">
                    R$ {valor.toFixed(2)}
                </div>
            </div>
            <div className="p-4 flex flex-col gap-2">
                <h2 className="text-gray-900 font-bold text-lg leading-tight">{nome}</h2>
                <p className="text-gray-500 text-sm leading-relaxed">{descricao}</p>
                <button className="mt-2 w-full bg-amber-800 hover:bg-amber-900 active:scale-95 transition-all duration-200 text-white font-semibold py-2 rounded-xl text-sm">
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    );
}