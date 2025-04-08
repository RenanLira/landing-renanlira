
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleProgress } from "@/components/ui/circle-progress";
import { Title } from "@/components/ui/title";
import { ITechnology } from "@/models/technology";
import { FrameIcon, Server } from "lucide-react";


interface TechsSectionProps {
    data: {
        [key: string]: ITechnology[]
    }
}

export function TechsSection({ data }: TechsSectionProps) {


    return (
        <section className="">
            <div className="flex flex-col gap-8 w-full items-center">
                <div className="flex gap-4 items-center self-start">
                    <FrameIcon />
                    <Title tag="h2">
                        Habilidades Técnicas
                    </Title>
                </div>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] w-full gap-9 bg-muted p-4 rounded-lg">
                    {
                        Object.keys(data).map((key: string) => {
                            const type = data[key]

                            return (
                                <Card key={key}>
                                    <CardHeader>
                                        <CardTitle className="flex gap-2 items-center">
                                            <div className="bg-muted p-2 rounded-md">
                                                <Server />
                                            </div>
                                            {key}
                                        </CardTitle>

                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-4 items-center justify-between">
                                            {type.map((tech, index) => (
                                                <div key={index} className="flex flex-col items-center">
                                                    <div className="relative flex items-center justify-center w-16 h-16">
                                                        <div dangerouslySetInnerHTML={{ __html: tech.icon }}
                                                            className="w-5 fill-accent"
                                                        />
                                                        <CircleProgress meta={tech.knowledge} className="absolute" />
                                                    </div>
                                                    <p>{tech.name}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}


