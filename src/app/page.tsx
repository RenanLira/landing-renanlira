
import { ButtonTheme } from "@/components/ui/button-theme";
import { Title } from "@/components/ui/title";
import { TechsSection } from "@/components/pages/index/techs-section";
import { TabsSection } from "@/components/pages/index/tabs-section";
import { AboutMeSection } from "@/components/pages/index/aboutme-section";





export default function Home() {


	return (
		<div className={"max-w-[1120px] mx-auto min-h-screen flex flex-col px-3.5 xl:px-0"}>
			<header className={"flex w-full justify-between py-8"}>
				<Title>
					Renan Lira
				</Title>
				<ButtonTheme />
			</header>

			<main className="mb-20 flex flex-col gap-22">

				<AboutMeSection />

				<TabsSection />

				<TechsSection />


			</main >
		</div >
	);
}
