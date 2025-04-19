import { Technology, TechnologyType } from "@/models/technology";
import { CreateTechnologieService } from "@/services/technologies/create-technologie-service";
import { UpdateTechnologieService } from "@/services/technologies/update-technologie-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const TechFormSchema = z.object({
    _id: z.string().optional(),
    name: z.string().nonempty("O nome é obrigatório"),
    icon: z
        .string()
        .nonempty("O ícone é obrigatório")
        .regex(/<svg.*<\/svg>/, "Ícone inválido"),
    knowledge: z
        .number()
        .int()
        .min(0, "O conhecimento deve ser maior ou igual a 0")
        .max(100, "O conhecimento deve ser menor ou igual a 100"),
    type: z.nativeEnum(TechnologyType, {
        errorMap: () => ({ message: "Tipo inválido" }),
    }),
});


function useTechForm(defaultValues?: z.infer<typeof TechFormSchema>) {
    const form = useForm<z.infer<typeof TechFormSchema>>({
        resolver: zodResolver(TechFormSchema),
        reValidateMode: "onChange",
        mode: "onBlur",
        defaultValues: {
            ...defaultValues,
        },
    });

    return form;
}

export function useSaveTechForm() {
    const form = useTechForm();

    return { form, onSubmit: CreateTechnologieService };
}

export function useEditTechForm(tech: Technology) {
    const form = useTechForm({
        ...tech
    });


    return { form, onSubmit: UpdateTechnologieService };
}
