import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { PropsWithChildren } from "react"


interface TitleProps extends PropsWithChildren, React.HTMLAttributes<HTMLHeadingElement> {
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

}

const titleVariants = cva(
    "font-title",
    {
        variants: {
            variant: {
                h1: "text-2xl md:text-3xl font-bold",
                h2: "text-xl md:text-2xl font-semibold",
                h3: "text-xl font-semibold",
                h4: "text-xl font-medium",
                h5: "text-lg font-medium",
                h6: "text-base font-medium",
            }
        },
        defaultVariants: {
            variant: "h1"
        }
    }
)


export function Title({ tag, className, children, ...props }: TitleProps) {

    const Tag = tag || "h1"

    return (
        <Tag className={
            cn(titleVariants({ variant: Tag, className }))
        } {...props}>
            {children}
        </Tag>
    )
}