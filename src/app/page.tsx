
import { ButtonTheme } from "@/components/ui/button-theme";
import Image from "next/image";
import Safira from "@/assets/safira.png";
import Projeto1 from "@/assets/projeto1.png";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BriefcaseBusinessIcon, FrameIcon, GalleryVerticalEndIcon, SquareArrowOutUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Title } from "@/components/ui/title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TypeScriptSvg } from "@/assets/lang-svg/typescript-svg";
import { GoSvg } from "@/assets/lang-svg/go-svg";
import { NextjsSvg } from "@/assets/lang-svg/nextjs-svg";


const technologies = [
	{
		name: "TypeScript",
		icon: <TypeScriptSvg />,
	},
	{
		name: "Go",
		icon: <GoSvg />,
	},
	{
		name: "Next.js",
		icon: <NextjsSvg />,
	}
]

export default function Home() {


	return (
		<div className={"max-w-[1280px] mx-auto min-h-screen flex flex-col px-3.5 lg:px-0"}>
			<header className={"flex w-full justify-between py-8"}>
				<Title>
					Renan Lira
				</Title>
				<ButtonTheme />
			</header>

			<main className="mb-20">
				<section>
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

				<Separator className="mt-4 bg-accent" />

				<section className="mt-20">
					<Tabs defaultValue="portifolio" >
						<TabsList className="grid grid-cols-2 h-fit p-0 bg-transparent">
							<TabsTrigger value="portifolio">
								<Title tag="h2">
									<GalleryVerticalEndIcon />
									Portfólio
								</Title>
							</TabsTrigger>
							<TabsTrigger value="experiencias">
								<Title tag="h2">
									<BriefcaseBusinessIcon />
									Experiencias
								</Title>
							</TabsTrigger>
						</TabsList>

						<TabsContent value="portifolio">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-secondary p-6 rounded-lg">
								<Card>
									<CardHeader className="gap-3">
										<Image
											alt="projeto 1"
											src={Projeto1}
											className="rounded-md"
										/>
										<CardTitle>Projeto 1</CardTitle>
									</CardHeader>
									<CardContent>
										<p>
											Praesent tincidunt rhoncus magna, id faucibus quam porta id.
										</p>
									</CardContent>
									<CardFooter className="justify-end">
										<Button variant={"link"}>
											Acessar <SquareArrowOutUpRight />
										</Button>
									</CardFooter>
								</Card>
							</div>
						</TabsContent>

						<TabsContent value="experiencias">

						</TabsContent>

					</Tabs>
				</section>

				<Separator className="mt-4 bg-accent" />

				<section className="mt-20">
					<div className="flex flex-col gap-10 w-full items-center">

						<Title tag="h2" className="self-start">
							<FrameIcon />
							Tecnologias
						</Title>
						<div className="grid grid-cols-[repeat(auto-fit,100px)] w-full items-center justify-center gap-9">
							{
								technologies.map((tech, index) => (
									<div key={index} className="flex flex-col justify-center gap-2">
										<div className="aspect-square rounded-lg shadow-2xl flex h-full p-5 bg-accent hover:scale-110 transition-transform duration-200 ease-in-out">
											{tech.icon}
										</div>
										<span className="text-center">{tech.name}</span>
									</div>
								))
							}
						</div>
					</div>
				</section>


			</main >
		</div >
	);
}



{/* <div className="flex flex-col gap-10 w-full items-end">
	<Title tag="h2" className="">
		Portfólio
	</Title>

	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-muted p-6 rounded-lg">
		<Card>
			<CardHeader className="gap-3">
				<Image
					alt="projeto 1"
					src={Projeto1}
					className="rounded-md"
				/>
				<CardTitle>Projeto 1</CardTitle>
			</CardHeader>
			<CardContent>
				<p>
					Praesent tincidunt rhoncus magna, id faucibus quam porta id.
				</p>
			</CardContent>
			<CardFooter className="justify-end">
				<Button variant={"link"}>
					Acessar <SquareArrowOutUpRight />
				</Button>
			</CardFooter>
		</Card>
	</div>
</div> */}