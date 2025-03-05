import Image from "next/image";
import Safira from "@/assets/bg_me.jpg";
import { Title } from "@/components/ui/title";

export function AboutMeSection() {


    return (
        <section className="bg-muted p-6 rounded-lg">
            <div className="flex flex-col md:flex-row gap-9 items-center">
                <div className="overflow-hidden rounded-lg shadow-lg h-14 relative md:flex-[1] md:h-full">
                    <Image
                        alt="Safira"
                        src={Safira}
                        width={1280}
                        height={720}
                        className="h-max w-auto -translate-y-12 md:translate-0"
                    />
                </div>

                <div className="flex-[3] flex flex-col gap-4">
                    <Title tag="h2">
                        I am Developer
                    </Title>
                    <p>
                        Desde pequeno, sempre fui fascinado por transformar ideias em realidade. Essa curiosidade natural me levou a sonhar em criar meu próprio jogo, e assim nasceu minha paixão pela programação. 💡

                        Minha jornada começou com Python 💻, uma linguagem que me ensinou os fundamentos e despertou meu interesse por resolver problemas de forma criativa e eficiente. Posteriormente, mergulhei no universo do desenvolvimento web, especializando-me em JavaScript e TypeScript, onde desenvolvo aplicações modernas e escaláveis. 🌐
                    </p>
                </div>
            </div>
        </section>
    )
}