import IconMongodb from "./icons/Icon-MongoDb"
import IconNextjs from "./icons/Icon-Next"
import IconNodejs from "./icons/Icon-Nodejs"
import IconSass from "./icons/Icon-Sass"
import IconMysql from "./icons/Icon-Sql"
import IconTypescript from "./icons/Icon-TypeScript"
import IconLogoJavascript from "./icons/Icon-logo-javaScript"
import IconReact from "./icons/Icon-react"

export const Tecnologia = () => {
    return (
        <div id="tecnologia" className="pb-10 flex flex-col h-full md:h-full  p-2" >
            <div className="text-center mb-10  ">
                <h2 className="text-3xl font-semibold font-[Maria] md:text-5xl">Principais Tecnologias</h2>
            </div>
            <section className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-2 ">
                <div className="m-auto flex flex-col md:mb-12">
                    <IconLogoJavascript width={100} height={100} />
                    <p className="text-center">JavaScript</p>
                </div>
                <div className="m-auto flex flex-col md:mb-12">
                    <IconTypescript width={90} height={90} />
                    <p className="text-center">TypeScript</p>
                </div>
                <div className="m-auto flex flex-col md:mb-12">
                    <IconReact width={95} height={95} />
                    <p className="text-center">React</p>
                </div>
                <div className="m-auto flex flex-col md:mb-12">
                    <IconNextjs width={95} height={95} />
                    <p className="text-center">NextJs</p>
                </div>
                <div className="m-auto flex flex-col md:mb-12">
                    <IconSass width={100} height={100} />
                    <p className="text-center">Sass</p>
                </div>
                <div className="m-auto flex flex-col md:mb-12">
                    <IconNodejs width={100} height={100} />
                    <p className="text-center">NodeJs</p>
                </div>
                <div className="m-auto flex flex-col md:mb-12">
                    <IconMysql width={95} height={95} />
                    <p className="text-center">MySql</p>
                </div>
                <div className="m-auto flex flex-col md:mb-12">
                    <IconMongodb width={85} height={95} />
                    <p className="text-center">Mongodb</p>
                </div>
            </section>
        </div>
    )
}