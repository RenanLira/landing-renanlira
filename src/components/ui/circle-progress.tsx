"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";


interface CircleProgressProps extends React.SVGProps<SVGSVGElement> {
    meta: number;
}

export function CircleProgress({ meta, className, ...props }: CircleProgressProps) {


    const raio = 40;

    const circunferencia = 2 * Math.PI * raio;

    return (
        <svg className={cn("w-full h-full rotate-90 transform", className)} viewBox="0 0 100 100" {...props}>
            <circle
                className="text-muted stroke-current"
                cx="50"
                cy="50"
                r={raio}
                strokeWidth="8"
                fill="transparent"
            />

            {/* Círculo de progresso (azul) */}
            <motion.circle
                className="text-secondary stroke-current transition-all duration-300 ease-in-out"
                cx="50"
                cy="50"
                r={raio}
                strokeWidth="8"
                fill="transparent"
                initial={{ strokeDasharray: circunferencia, strokeDashoffset: circunferencia }}
                animate={{
                    strokeDashoffset: circunferencia - (meta / 100) * circunferencia
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeIn"
                }}
                strokeLinecap="round"
            />
        </svg>
    )
}