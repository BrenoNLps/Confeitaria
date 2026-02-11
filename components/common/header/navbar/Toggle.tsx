export default function Toggle({ onToggle }: { onToggle: () => void }){
    return(
        <button 
        onClick={onToggle}
        className="h-[70%] aspect-square bg-black justify-center items-center md:hidden flex rounded-br-xl rounded-tr-xl text-white text-3xl z-4 hover:bg-rose-400">
            &#9776;
        </button>
    );
}