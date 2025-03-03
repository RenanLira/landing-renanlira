
import { ButtonTheme } from "@/components/ui/button-theme";
import Image from "next/image";
import Safira from "@/assets/safira.png";
import Projeto1 from "@/assets/projeto1.png";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Home() {


	return (
		<div className={"max-w-[1280px] mx-auto min-h-screen flex flex-col px-3.5 lg:px-0"}>
			<header className={"flex w-full justify-between py-8"}>
				<h1 className={"font-title font-bold text-3xl"}>
					Renan Lira
				</h1>
				<ButtonTheme />
			</header>

			<main>
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
							<h2 className="font-title font-semibold text-2xl">
								I am Developer
							</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
								quis felis ac nunc vehicula vehicula. Nullam sit amet turpis
								quis nunc lacinia finibus. Nullam nec purus nec nunc
								ullamcorper fermentum. Nulla facilisi. Nullam nec purus nec
								nunc ullamcorper fermentum. Nulla facilisi. Nullam nec purus
								nec nunc ullamcorper fermentum. Nulla facilisi. Nullam nec
								purus nec nunc ullamcorper fermentum. Nulla facilisi. Nullam
								nec purus nec nunc ullamcorper fermentum. Nulla facilisi.
							</p>
						</div>
					</div>
				</section>


				<section className="mt-20">
					<div className="flex flex-col gap-4 w-full items-center">
						<h2 className="font-title font-semibold text-2xl">
							Meus Projetos
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
					</div>
				</section>
			</main>
		</div>
	);
}
