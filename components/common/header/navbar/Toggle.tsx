export default function Toggle({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
    return(
        <button 
            onClick={onToggle}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            className="h-[70%] aspect-square bg-black justify-center items-center md:hidden flex rounded-br-xl rounded-tr-xl text-white text-3xl z-40 hover:bg-rose-400 transition-colors"
        >
            {isOpen ? '✕' : '☰'}
        </button>
    );
}