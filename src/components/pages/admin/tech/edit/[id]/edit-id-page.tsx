"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { GenerateForm } from "@/forms/generate-form";
import { TechFormSchema, useEditTechForm } from "@/forms/tech/tech-form";
import { useSubmittedCallback } from "@/hooks/use-submited-callback";
import { Technology } from "@/models/technology";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";




interface EditTechPageProps {
    tech: Technology
}

export default function EditIdTechPage({ tech }: EditTechPageProps) {

    const { form, onSubmit } = useEditTechForm(tech)

    const [open, setOpen] = useState(true);
    const navigation = useRouter()

    const handleClose = () => {
        setOpen(false)
        navigation.prefetch("/admin/tech")
        navigation.back()
    }

    const handleSubmit = useSubmittedCallback({
        onSubmit: onSubmit,
        onSuccess: () => {
            toast.success("Tecnologia atualizada com sucesso")
            handleClose()
        },
        onError: (error) => {
            toast.error("Erro ao atualizar tecnologia", {
                description: error.message,
            })
        }
    })



    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Editar tecnologia</DialogTitle>
                </DialogHeader>

                <GenerateForm
                    fields={{
                        _id: {
                            hidden: true,
                        },
                        name: {
                            label: "Nome",
                            placeholder: "Ex. React",
                            type: "text",
                        },
                        type: {
                            label: "Tipo",
                            type: "select",
                            placeholder: "Selecione o tipo",
                            className: "w-full",
                        },
                        icon: {
                            label: "Ícone",
                            placeholder: "Ex. <svg>...</svg>",
                            type: "text",
                        },
                        knowledge: {
                            label: "Conhecimento",
                            type: "slider"
                        },
                    }}
                    form={form}
                    schema={TechFormSchema}
                    onSubmit={handleSubmit}
                    submitText="Salvar"
                    renderCancelButton={() => (
                        <DialogClose asChild>
                            <Button
                                variant="outline"
                                className="w-full"
                                onClick={handleClose}
                            >
                                Cancelar
                            </Button>
                        </DialogClose>
                    )}
                />
            </DialogContent>
        </Dialog>
    );
}
