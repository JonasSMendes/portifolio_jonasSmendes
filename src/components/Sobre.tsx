
export const Sobre = () => {
    return (

        <div
            id="Sobre"
            className="w-screen h-screen flex justify-center items-center 
             md:w-full md:m-auto "
        >

            <section className=" md:mr-0 flex w-96 md:w-10/12">
                <div className="flex  flex-row items-center card lg:card-side bg-base-100 md:shadow-xl">
                    <figure><img className="md:h-96 hidden md:block " src="https://i.pinimg.com/564x/fa/16/b2/fa16b2e34200428692221b27e365e558.jpg" alt="Album" /></figure>
                    <div className="w-96 xl:w-10/12 md:w-9/12 card-body">
                        <h1 className=" text-3xl card-title">Quem sou eu?</h1>
                        <p> Oi, me chamo Jonas e estou no primeiro semestre de Ciência da Computação.
                            Sou um entusiasta da programação e estou constantemente explorando novas tecnologias
                            e linguagens de programação. Tenho um grande interesse em desenvolver soluções inovadoras
                            e eficientes para os desafios do mundo digital. Estou sempre buscando oportunidades para
                            aprimorar minhas habilidades e colaborar em projetos empolgantes.
                            estou determinado a me tornar um desenvolvedor de software de sucesso. Estou animado para embarcar
                            nesta jornada emocionante e contribuir para o avanço da tecnologia.
                            venho melhorando e me desafiando cada vez mais nesse universo da tecnologia,
                            aprendendo linguagens como <span className="font-bold">JavaScript</span>
                            , <span className="font-bold">PhP</span>.
                            e bibliotecas como <span className="font-bold">React</span> e <span className="font-bold">Next</span>
                        </p>

                    </div>
                </div>
            </section>

        </div>




    )
}