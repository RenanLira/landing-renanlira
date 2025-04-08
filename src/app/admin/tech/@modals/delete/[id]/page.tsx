"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DeleteTechnologieService } from "@/services/technologies/delete-technologie-service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";


interface DeleteTechPageProps {
    params: Promise<{
        id: string
    }>
}

export default function DeleteTechPage({ params }: DeleteTechPageProps) {
    const navigation = useRouter()

    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false)

        navigation.back()
    }

    const handleDelete = async () => {
        const { id } = await params

        try {
            await DeleteTechnologieService(id)

            toast.success("Tecnologia excluída com sucesso")
            handleClose()
        } catch (error) {
            if (error instanceof Error) {
                toast("Erro ao excluir tecnologia", {
                    description: error.message
                })
            } else {
                toast("Erro ao excluir tecnologia", {
                    description: "Erro desconhecido"
                })
            }
        }
    }


    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Tem certeza que deseja excluir?</DialogTitle>
                </DialogHeader>
                <Button variant={"destructive"} onClick={handleDelete}>
                    Sim
                </Button>

                <Button variant={"outline"} onClick={handleClose}>
                    Não
                </Button>
            </DialogContent>
        </Dialog>
    )
}