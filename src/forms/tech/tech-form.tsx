import { Technology, TechnologyType } from "@/models/technology";
import { CreateTechnologieService } from "@/services/technologies/create-technologie-service";
import { UpdateTechnologieService } from "@/services/technologies/update-technologie-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const TechFormSchema = z.object({
    id: z.string().optional(),
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

export function useEditTechForm(tech: typeof Technology.schema.obj) {
    const form = useTechForm({
        id: String(tech._id),
        name: String(tech.name),
        icon: String(tech.icon),
        knowledge: Number(tech.knowledge),
        type: tech.type as TechnologyType,
    });



    return { form, onSubmit: UpdateTechnologieService };
}
