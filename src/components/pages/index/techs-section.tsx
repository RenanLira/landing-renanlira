import GoSvg from "@/assets/lang-svg/go.svg";
import NextjsSvg from "@/assets/lang-svg/nextjs.svg";
import TypeScriptSvg from "@/assets/lang-svg/typescript.svg";
import { Title } from "@/components/ui/title";
import { FrameIcon } from "lucide-react";

const technologies = [
    {
        name: "TypeScript",
        icon: TypeScriptSvg,
    },
    {
        name: "Go",
        icon: GoSvg,
    },
    {
        name: "Next.js",
        icon: NextjsSvg,
    }
]

export function TechsSection() {


    return (
        <section className="">
            <div className="flex flex-col gap-10 w-full items-center">

                <Title tag="h2" className="self-start">
                    <FrameIcon className="text-9xl" />
                    Tecnologias
                </Title>
                <div className="grid grid-cols-[repeat(auto-fit,100px)] w-full items-center justify-center gap-9">
                    {
                        technologies.map((tech, index) => (
                            <div key={index} className="flex flex-col items-center gap-2">
                                <div className="aspect-square justify-center rounded-full shadow-2xl flex bg-accent hover:scale-110 transition-transform duration-200 ease-in-out w-14">
                                    {<tech.icon width={22} />}
                                </div>
                                <span className="text-center">{tech.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}