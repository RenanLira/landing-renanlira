"use client"

import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, } from "@/components/ui/drawer";
import { GenerateForm } from "@/forms/generate-form";
import { TechFormSchema, useSaveTechForm } from "@/forms/tech/tech-form";
import { useSubmittedCallback } from "@/hooks/use-submited-callback";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function NewTechModalPage() {

    const { form, onSubmit } = useSaveTechForm()

    const navigation = useRouter()
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        navigation.back()
    }

    const handleSubmit = useSubmittedCallback({
        onSubmit: onSubmit,
        onSuccess: () => {
            toast.success("Tecnologia adicionada com sucesso")
            handleClose()
        },
        onError: (error) => {
            toast.error("Erro ao adicionar tecnologia", {
                description: error.message,
            })
        },
    })

    return (
        <Drawer open={open} onOpenChange={setOpen} onAnimationEnd={handleClose}>
            <DrawerContent>
                <div className="mx-auto w-full overflow-y-auto max-h-[50vh]">
                    <DrawerHeader>
                        <DrawerTitle>Nova Tecnologia</DrawerTitle>
                        <DrawerDescription>adicione uma nova tecnologia</DrawerDescription>
                    </DrawerHeader>
                    <div className="max-w-2xl mx-auto p-6 my-5 rounded-lg shadow-md border border-border">
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
                                knowledge: {
                                    label: "Conhecimento",
                                    placeholder: "0",
                                    type: "slider"
                                },
                                icon: {
                                    label: "Ícone",
                                    placeholder: "<svg>...</svg>",
                                    type: "text",
                                    className: "w-full",
                                },
                            }}
                            schema={TechFormSchema}
                            form={form}
                            onSubmit={handleSubmit}
                            submitText="Adicionar"
                            renderCancelButton={() => (
                                <DrawerClose asChild>
                                    <Button className="w-full" variant="outline">
                                        Cancelar
                                    </Button>
                                </DrawerClose>
                            )}
                        />
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}