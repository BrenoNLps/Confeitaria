export default function Select(){
    return (
        <div className="w-full h-[10%] flex justify-center items-center " >
            <select className="h-full w-[90%] bg-black text-white text-center bord-0 focus:outline-none focus:ring-0 focus:ring-amber-500 appearance-none pr-10">
                <option value="" disabled selected hidden>Escolha   ▼</option>
                <option value="Tematico">Temático</option>
                <option value="Simples">Simples</option>
                <option value="Especial">Especial</option>
                <option value="MesVersario">MesVersário</option>
                <option value="Comemorativo">Comemorativo</option>
            </select>
        </div>
    );
}