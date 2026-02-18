// Container.tsx
"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Product from "./Product"

const produtos = [
    { id: "1", nome: "Bolo de cenoura", descricao: "Bolo de cenoura com cobertura de chocolate", valor: 20, imagem: "/images/bolo.png" },
    { id: "2", nome: "Bolo de chocolate", descricao: "Bolo de chocolate com cobertura de chocolate", valor: 25, imagem: "/images/bolo.png" },
    { id: "3", nome: "Bolo red velvet", descricao: "Bolo red velvet com cream cheese", valor: 30, imagem: "/images/bolo.png" },
    { id: "4", nome: "Bolo de cenoura", descricao: "Bolo de cenoura com cobertura de chocolate", valor: 20, imagem: "/images/bolo.png" },
    { id: "5", nome: "Bolo de chocolate", descricao: "Bolo de chocolate com cobertura de chocolate", valor: 25, imagem: "/images/bolo.png" },
    { id: "6", nome: "Bolo red velvet", descricao: "Bolo red velvet com cream cheese", valor: 30, imagem: "/images/bolo.png" }
]

export default function ProductsContainer() {
    return (
        <section className="w-full max-w-6xl mx-auto px-6 py-10">

            <h2 className="text-amber-900 text-2xl font-bold mb-6">
                Bolos
            </h2>

            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-10"
            >
                {produtos.map((produto) => (
                    <SwiperSlide key={produto.id}>
                        <Product
                            nome={produto.nome}
                            descricao={produto.descricao}
                            valor={produto.valor}
                            imagem={produto.imagem}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}