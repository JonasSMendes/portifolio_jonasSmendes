

export const Project = () => {
    return (

        <div id="projetos" className="pb-10 flex flex-col h-full md:h-screen p-2">
            <section className="flex justify-center items-center">
                <h1 className="pb-10 md:mr-0 md:text-5xl font-semibold p-2 rounded text-3xl font-[Maria]">Projetos</h1>
            </section>
            <section className=" flex flex-col   justify-center items-center
            z-auto w-10/12 m-auto md:m-auto h-auto
            md:flex-row md:flex-wrap md:justify-around">

                <div className="md:card md:w-96 md:h-56 h-96  w-full bg-base-100 shadow-xl pb-3 image-full">
                    <figure><img src="/assets/Canil_pjt.png" alt="car!" /></figure>
                    <div className="card-body  md:mr-0">
                        <h2 className="card-title ">Canil</h2>
                        <p>
                            Site CanilDev,projeto de estudos para busca de Animais em um canil virtual
                        </p>
                        <div className="card-actions">
                            <a href="https://web-production-61fe.up.railway.app/" target="_blank" className="btn btn-primary">Visite</a>
                        </div>
                    </div>
                </div>

                <div className="md:card md:w-96 md:h-56  w-full bg-base-100 shadow-xl pb-3 image-full">
                    <figure><img src="https://rtsbrazil.com.br/PG2019/img/home/em-breve.png" alt="car!" /></figure>
                    <div className="card-body md:mr-0">
                        <h2 className="card-title">Projetos</h2>
                        <p>
                            Em breve!!
                        </p>
                        <div className="card-actions">
                            <a href="#" className="btn btn-primary">Visite</a>
                        </div>
                    </div>
                </div>

            </section>
        </div>


    )
}