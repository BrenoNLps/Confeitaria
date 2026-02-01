export function handleSelectChange(value: string) {
    switch (value) {
        case "Tematico":
        return "bg-blue-500";

        case "Simples":
        return "bg-green-500";

        case "Especial":
        return "bg-purple-500";
        
        case "MesVersario":
        return "bg-yellow-500";
        
        case "Comemorativo":
        return "bg-red-500";
        
        default:
        return "bg-black";
    }
}