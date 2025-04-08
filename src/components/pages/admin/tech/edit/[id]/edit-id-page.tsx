"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEditTechForm } from "@/forms/tech/tech-form";
import { useSubmittedCallback } from "@/hooks/use-submited-callback";
import { Technology, TechnologyType } from "@/models/technology";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";




interface EditTechPageProps {
    tech: typeof Technology.schema.obj
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

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="name" className="text-base">
                                        Nome da Tecnologia
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Ex: React, Node.js, TypeScript"
                                            className="mt-1"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="icon"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="icon" className="text-base">
                                        Ícone SVG
                                    </FormLabel>
                                    <FormDescription>
                                        Insira o ícone da tecnologia em formato SVG
                                    </FormDescription>
                                    <FormControl>
                                        <Input
                                            placeholder="<svg>...</svg>"
                                            className="mt-1"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="knowledge"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="knowledge" className="text-base">
                                        Nível de Conhecimento
                                    </FormLabel>
                                    <FormDescription>
                                        Selecione seu nível de conhecimento em porcentagem
                                    </FormDescription>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            min={0}
                                            max={100}
                                            className="mt-1"
                                            {...field}
                                            onChange={(e) => field.onChange(Number(e.target.value))}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="type" className="text-base">
                                        Categoria
                                    </FormLabel>
                                    <FormDescription>
                                        Selecione a categoria da tecnologia
                                    </FormDescription>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="mt-1 w-full">
                                                <SelectValue placeholder="Selecione o tipo" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {Object.values(TechnologyType).map((type) => (
                                                <SelectItem key={type} value={type}>
                                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full text-white font-semibold py-2 px-4 rounded-md"
                            disabled={form.formState.isSubmitting}
                        >
                            Atualizar
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
