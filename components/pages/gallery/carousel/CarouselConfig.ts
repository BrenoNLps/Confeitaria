export enum cakeType {
    COMMEMORATIVE = "commemorative",
    MONTHLY       = "monthly"      ,
    SIMPLE        = "simple"       ,
    SPECIAL       = "special"      ,
    THEMATIC      = "thematic"     ,
}

export const categorias = [
    { tipo: cakeType.SIMPLE, label: "Simples" },
    { tipo: cakeType.COMMEMORATIVE, label: "Comemorativos" },
    { tipo: cakeType.MONTHLY, label: "Mensais" },
    { tipo: cakeType.SPECIAL, label: "Especiais" },
    { tipo: cakeType.THEMATIC, label: "Temáticos" },
];