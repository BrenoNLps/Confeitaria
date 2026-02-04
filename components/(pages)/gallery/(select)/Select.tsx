"use client"
export enum cakeType {
    COMMEMORATIVE = "commemorative",
    MONTHLY = "monthly",
    SIMPLE = "simple",
    SPECIAL = "special",
    THEMATIC = "thematic",
}

type Props = {
    value : cakeType;
    onChange: (v: cakeType) => void;
}

export default function Select({ value, onChange }: Props){
    return (
        <div className="w-full h-[10%] flex justify-center items-center " >
            <select 
            value={value} 
            onChange={(e) => onChange(e.target.value as cakeType)}
            className="h-full w-[90%] bg-black text-white text-center bord-0 appearance-none hover:bg-rose-400 hover:text-white focus:outline-0 } "

            >
                <option value="" disabled selected hidden>Escolha ▼</option>
                <option value={cakeType.THEMATIC}>Temático</option>
                <option value={cakeType.SIMPLE}>Simples</option>
                <option value={cakeType.SPECIAL}>Especial</option>
                <option value={cakeType.MONTHLY}>MesVersário</option>
                <option value={cakeType.COMMEMORATIVE}>Comemorativo</option>
            </select>
            
        </div>
    );
}

/*
focus:outline-none 
focus:ring-0 
focus:ring-amber-500 
pr-10


*/