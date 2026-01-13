import Image from "next/image";

export default function Home() {
  return (
    <main className="scroll-smooth">
      {/* Main */}
      <section className="h-screen w-screen flex items-center justify-center bg-pink-200">
        <h1 className="text-5xl font-bold text-pink-800">Bem-vindo à Confeitaria</h1>
      </section>

      {/* Produtos */}
      <section className="h-screen w-screen flex items-center justify-center bg-yellow-200">
        <h2 className="text-4xl font-bold text-yellow-800">Produtos</h2>
      </section>

      {/* Contato */}
      <section className="h-screen w-screen flex items-center justify-center bg-green-200">
        <h2 className="text-4xl font-bold text-green-800">Contato</h2>
      </section>
    </main>

  );
}
