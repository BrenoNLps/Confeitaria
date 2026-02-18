import ProductsContainer from "./ProductsContainer";


export default function Container() {
    return (
        <section className="flex-col flex">
            <ProductsContainer/>
            <ProductsContainer/>
            <ProductsContainer/>
            <ProductsContainer/>
            <ProductsContainer/>
            <ProductsContainer/>
        </section>
    )
}