import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Title } from "@/components/ui/title";


interface Experience {
    id: string;
    company: string;
    role: string;
    period: string;
    description: string;
}


const experiences: Experience[] = [
    {
        id: "exp1",
        company: "Pintos LTDA",
        role: "Desenvolvedor",
        period: "2025 - Presente",
        description: "Desenvolvimento de aplicações React com foco em acessibilidade e performance. Implementação de animações com Framer Motion e transições suaves."
    },
    {
        id: "exp2",
        company: "Pintos LTDA",
        role: "Estagio - Desenvolvedor",
        period: "2023 - 2025",
        description: "Criação de APIs RESTful com Node.js e interfaces de usuário responsivas com React. Implementação de sistemas de autenticação e autorização."
    },
    {
        id: "exp3",
        company: "WebInnovate",
        role: "Desenvolvedor Front-end Jr",
        period: "2016 - 2018",
        description: "Desenvolvimento de interfaces de usuário com HTML, CSS e JavaScript. Integração com APIs e otimização para dispositivos móveis."
    }
];

export function ExperienciasTab() {
    // Dados de exemplo para experiências profissionais

    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="relative">
                {/* Linha vertical central */}
                <div className="absolute left-0 hidden md:flex md:left-1/2 transform md:translate-x-px h-full w-px bg-accent"></div>

                {experiences.map((exp, index) => (
                    <TimelineItem
                        key={exp.id}
                        experience={exp}
                        isEven={index % 2 === 0}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

interface TimelineItemProps {
    experience: Experience;
    isEven: boolean;
    index: number;
}

const TimelineItem = ({ experience, isEven, index }: TimelineItemProps) => {
    const itemRef = useRef(null);
    const isInView = useInView(itemRef, { once: true, amount: "all" });

    // Variantes de animação
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut"
            }
        }
    };

    const dotVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                duration: 0.3,
                delay: index * 0.2 + 0.2,
                type: "spring",
                bounce: 0.4
            }
        }
    };

    return (
        <div
            ref={itemRef}
            className={`mb-8 flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Conteúdo do item */}
            <motion.div
                className={`md:w-5/12 bg-background p-6 rounded-lg shadow-md relative z-10
          ${isEven ? 'md:ml-auto md:text-right' : 'md:mr-auto'}`}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <Title tag="h3" className="text-primary">{experience.role}</Title>
                <Title tag="h4" className="text-secondary">{experience.company}</Title>
                <p className="text-secondary-foreground text-sm mb-2">{experience.period}</p>
                <p className="text-secondary-foreground">{experience.description}</p>
            </motion.div>

            {/* Espaço central com o ponto */}
            <div className="md:w-2/12 flex justify-center items-start pt-4 relative">
                <motion.div
                    className="w-6 h-6 rounded-full bg-secondary border-4 border-border shadow-md z-10"
                    variants={dotVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                ></motion.div>
            </div>

            {/* Lado vazio para layout */}
            <div className="md:w-5/12"></div>
        </div>
    );
};
