export default function SideRibbon({className}: {className: string}) {
    return (
        <div className={
            `  
        hidden 
        md:block 
        h-full 
        w-[25%] 
        md:w-[25%] 
        absolute
        bg-rose-400    
        ${className}
        `}
        />
    );
}