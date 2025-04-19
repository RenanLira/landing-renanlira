"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ReactNode } from "react";
import { Path, UseFormReturn } from "react-hook-form";
import { TypeOf, z } from "zod";

export type FieldType =
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'select'
    | 'checkbox'
    | 'radio'
    | 'textarea'
    | 'date'
    | 'slider'

type FieldConfigIfNotHidden = {
    label: string;
    placeholder?: string;
    type: FieldType;
    className?: string;
    hidden?: false;
}

export type FieldConfig = FieldConfigIfNotHidden | {
    hidden: true;
}



export interface SchemaFormProps<T extends z.ZodType> {
    schema: T;
    onSubmit: (data: z.infer<T>) => void | Promise<void>;
    submitText?: string;
    renderCancelButton: () => ReactNode;
    form: UseFormReturn<TypeOf<T>>
    fields: Record<keyof z.infer<T>, FieldConfig>;
}

export function GenerateForm<T extends z.AnyZodObject>({
    schema,
    onSubmit,
    submitText = "Salvar",
    renderCancelButton,
    form,
    fields
}: SchemaFormProps<T>) {


    const getEnumValues = (fieldName: Path<TypeOf<T>>) => {

        const type = schema.shape[fieldName]

        if (type instanceof z.ZodNativeEnum) {
            return Object.values(type._def.values);
        } else if (type instanceof z.ZodEnum) {
            return type.options;
        } else {
            return [];
        }

    }

    const renderField = (name: Path<TypeOf<T>>, config: FieldConfigIfNotHidden) => {

        return (
            <FormField
                name={name}
                control={form.control}
                key={name}
                render={({ field, }) => (
                    <FormItem
                        className={config.className}
                    >
                        <FormLabel>
                            {config.label}
                        </FormLabel>
                        <FormControl>
                            {(() => {
                                switch (config.type) {
                                    case 'text':
                                    case 'email':
                                    case 'password':
                                        return (

                                            <Input
                                                {...field}
                                                type={config.type}
                                                placeholder={config.placeholder}
                                            />
                                        )
                                    case 'number':
                                        return (
                                            <Input
                                                {...field}
                                                type="number"
                                                placeholder={config.placeholder}
                                            />
                                        )
                                    case 'select':
                                        return (
                                            <Select
                                                {...field}
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger className={config.className}>
                                                    <SelectValue
                                                        placeholder={config.placeholder}
                                                    />
                                                </SelectTrigger>

                                                <SelectContent>
                                                    {getEnumValues(name).map((value: string) => (
                                                        <SelectItem key={value} value={value}>
                                                            {value}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        )
                                    case 'slider':
                                        return (
                                            <Slider
                                                {...field}
                                                defaultValue={[Number(field.value) || 0]}
                                                value={[Number(field.value) || 0]}
                                                onChange={() => { }}
                                                onValueChange={(value) => field.onChange(Number(value[0]))}

                                                step={10}
                                                max={100}

                                            />
                                        )
                                    default:
                                        return (
                                            <Input />
                                        )
                                }
                            })()}
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}

            />
        )

    }


    return (
        <Form
            {...form}
        >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {Object.entries(fields).map(([name, config]) => {
                    return !config.hidden ? renderField(name as Path<TypeOf<T>>, config) : null
                })}

                <div
                    className="flex flex-col gap-2 items-center justify-end"
                >
                    <Button
                        type="submit"
                        className="w-full text-white font-semibold py-2 px-4 rounded-md"
                        disabled={form.formState.isSubmitting || !form.formState.isValid}
                    >
                        {submitText}
                    </Button>
                    {renderCancelButton()}
                </div>
            </form>

        </Form >
    )


}