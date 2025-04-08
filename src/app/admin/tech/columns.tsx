"use client"

import { Button } from "@/components/ui/button"
import { Technology } from "@/models/technology"
import { ColumnDef } from "@tanstack/react-table"
import { PencilIcon, TrashIcon } from "lucide-react"
import Link from "next/link"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type TechnologyTableColumns = typeof Technology.schema.obj


export const columns: ColumnDef<TechnologyTableColumns>[] = [
    {
        accessorKey: "name",
        header: "Nome",
    },
    {
        accessorKey: "type",
        header: "Tipo",
    },
    {
        accessorKey: "icon",
        header: "Ícone",
        cell: ({ row }) => {

            return (
                <div dangerouslySetInnerHTML={{ __html: row.original.icon! }} className="w-5 h-5 fill-accent" />
            )
        },
    },
    {
        accessorKey: "knowledge",
        header: "Nível",
    },
    {
        accessorKey: "createdAt",
        header: "Criado em",
    },
    {
        accessorKey: "actions",
        header: "Ações",
        cell: ({ row }) => {
            return (
                <div className="flex gap-2">
                    <Button variant="outline" size="icon" asChild>
                        <Link href={`/admin/tech/edit/${row.original._id}`}>
                            <PencilIcon className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="icon">
                        <Link href={`/admin/tech/delete/${row.original._id}`}>
                            <TrashIcon className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            )
        }
    }
]
