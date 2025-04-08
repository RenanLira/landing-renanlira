import { DataTable } from "@/components/pages/admin/shared/data-table";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { columns } from "./columns";
import { GetAllTechnologiesService } from "@/services/technologies/get-all-technologies-service";



export default async function TechPage() {


    const data = await GetAllTechnologiesService()


    return (
        <div className="flex flex-col gap-14">
            <div className="flex justify-between items-center">
                <Title tag="h2">
                    Minhas Tecnologias
                </Title>

                <Button asChild>
                    <Link href="/admin/tech/new">
                        <PlusIcon className="mr-2 h-4 w-4" /> Nova Tecnologia
                    </Link>
                </Button>
            </div>
            <div>
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    )
}