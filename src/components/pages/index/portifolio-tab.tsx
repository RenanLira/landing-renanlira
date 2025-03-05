import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Projeto1 from "@/assets/projeto1.png";
import Link from "next/link";


const projetos = [
    {
        nome: "Pokedex",
        descricao: "Um aplicativo de captura de Pokémon",
        imagem: Projeto1,
        link: "https://pokedex-omega.vercel.app/",
    },
    {
        nome: "To-Do List",
        descricao: "Uma lista de tarefas",
        imagem: Projeto1,
        link: "https://pokedex-omega.vercel.app/",
    },
    {
        nome: "Calculadora",
        descricao: "Uma calculadora simples",
        imagem: Projeto1,
        link: "https://pokedex-omega.vercel.app/",
    },
    {
        nome: "Calculadora",
        descricao: "Uma calculadora simples",
        imagem: Projeto1,
        link: "https://pokedex-omega.vercel.app/",
    }
]

export function PortifolioTab() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                projetos.map((projeto, index) => (
                    <Card key={index}>
                        <CardHeader className="gap-3">
                            <Image
                                alt="projeto 1"
                                src={projeto.imagem}
                                className="rounded-md"
                            />
                            <CardTitle>
                                {projeto.nome}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                {projeto.descricao}
                            </p>
                        </CardContent>
                        <CardFooter className="justify-end">
                            <Button variant={"link"} asChild>
                                <Link href={projeto.link}>
                                    Acessar <SquareArrowOutUpRight />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))
            }
        </div>
    )
}