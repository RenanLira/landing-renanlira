
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Title } from "@/components/ui/title";
import { BriefcaseBusinessIcon, GalleryVerticalEndIcon, } from "lucide-react";
import { PortifolioTab } from "./portifolio-tab";
import { ExperienciasTab } from "./experiencias-tab";



export function TabsSection() {
    return (
        <section className="">
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
                    <PortifolioTab />
                </TabsContent>

                <TabsContent value="experiencias">
                    <ExperienciasTab />
                </TabsContent>

            </Tabs>
        </section>
    )
}