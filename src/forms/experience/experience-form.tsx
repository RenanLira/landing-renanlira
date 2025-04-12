import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";


const ExperienceFormSchema = z.object({
    title: z.string().nonempty("O título é obrigatório"),
    company: z.string().nonempty("A empresa é obrigatória"),
    location: z.string().nonempty("A localização é obrigatória"),
    startDate: z.date().refine((date) => date <= new Date(), {
        message: "A data de início deve ser menor ou igual a data atual",
    }),
    actual: z.boolean(),
    description: z.string().nonempty("A descrição é obrigatória"),
    endDate: z.date(),
    technologies: z.array(z.string())
}).refine((data) => data.endDate < data.startDate, {
    message: "A data de término deve ser maior que a data de início",
    path: ["endDate"],
}).refine((data) => data.actual && data.endDate, {
    message: "Emprego atual não pode ter data de término",
    path: ["endDate"],
})

function useExperienceForm(defaultValues?: z.infer<typeof ExperienceFormSchema>) {
    const form = useForm<z.infer<typeof ExperienceFormSchema>>({
        resolver: zodResolver(ExperienceFormSchema),
        reValidateMode: "onChange",
        mode: "onBlur",
        defaultValues: {
            ...defaultValues,
        },
    });

    return form;
}


export function useSaveExperienceForm() {
    const form = useExperienceForm();

    return {
        form, onSubmit: async (data: z.infer<typeof ExperienceFormSchema>) => {
            console.log(data);
        }
    };
}


export function useEditExperienceForm(experience: z.infer<typeof ExperienceFormSchema>) {
    const form = useExperienceForm({
        ...experience
    });


    return {
        form, onSubmit: async (data: z.infer<typeof ExperienceFormSchema>) => {
            console.log(data);
        }
    };
}