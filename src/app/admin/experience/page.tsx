import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default function ExperiencePage() {


    return (
        <div className="flex flex-col gap-14">
            <div className="flex justify-between items-center">
                <Title tag="h2">
                    Minhas Experiencias
                </Title>

                <Button asChild>
                    <Link href="/admin/experience/new">
                        <PlusIcon className="mr-2 h-4 w-4" /> Nova Experiencia
                    </Link>
                </Button>
            </div>
            <div>
                {/* <DataTable columns={columns} data={data} /> */}
            </div>
        </div>
    )
}