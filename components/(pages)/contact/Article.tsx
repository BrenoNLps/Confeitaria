export default function Text(){
    return ( 
            <div className="md:w-[50%] md:h-full w-full h-[70%] flex justify-center items-center">
                <div className="md:w-[90%] md:h-[90%] w-[70%] h-[80%] flex flex-col justify-center">
                    <h2 className="text-lg md:text-2xl font-bold mb-4">Contato 🍰</h2>
                    <p className="text-sm md:text-base mb-6">
                    Quer fazer sua encomenda ou tirar dúvidas?<br />
                    É só me chamar nas redes sociais!
                    </p>

                    <h3 className="text-base md:text-lg font-bold mb-2">WhatsApp 🟢</h3>
                    <p className="text-sm md:text-base mb-4">(16) 3411-0322</p>

                    <h3 className="text-base md:text-lg font-bold mb-2">Instagram 📸</h3>
                    <p className="text-sm md:text-base mb-4">
                        Clique aqui : 
                        <a href="https://www.instagram.com/marizanalopes?igsh=eTF2aXdsdGl1MjB2" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline"> @marizanalopes</a>
                    </p>

                    <h3 className="text-base md:text-lg font-bold mb-2">Cidade 📍</h3>
                    <p className="text-sm md:text-base">São Carlos - SP</p>
                </div>
            </div>        
    );
}