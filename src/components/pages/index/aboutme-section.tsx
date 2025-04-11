"use client";

import Image from "next/image";
import Safira from "@/assets/bg_me.jpg";
import { Title } from "@/components/ui/title";
import { motion } from "motion/react";


export function AboutMeSection() {


    return (
        <motion.section
            className="bg-muted rounded-lg"
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
                once: true,
            }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex w-full h-auto relative">
                <Image
                    alt="Safira"
                    src={Safira}
                    width={1280}
                    height={720}
                    className="absolute w-full h-full object-cover rounded-lg top-0 left-0"
                />

                <div className="p-6 flex flex-col gap-4 z-10 bg-white/40 dark:bg-black/40 backdrop-blur-xs rounded-md">
                    <Title tag="h2">
                        I am Developer
                    </Title>
                    <p>
                        Desde pequeno, sempre fui fascinado por transformar ideias em realidade. Essa curiosidade natural me levou a sonhar em criar meu próprio jogo, e assim nasceu minha paixão pela programação. 💡

                        Minha jornada começou com Python 💻, uma linguagem que me ensinou os fundamentos e despertou meu interesse por resolver problemas de forma criativa e eficiente. Posteriormente, mergulhei no universo do desenvolvimento web, especializando-me em JavaScript e TypeScript, onde desenvolvo aplicações modernas e escaláveis. 🌐
                    </p>
                </div>
            </div>
        </motion.section>
    )
}