import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { PropsWithChildren } from "react"


interface TitleProps extends PropsWithChildren, React.HTMLAttributes<HTMLHeadingElement> {
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

}

const titleVariants = cva(
    "text-secondary-foreground font-title flex items-center gap-2",
    {
        variants: {
            variant: {
                h1: "text-4xl font-bold",
                h2: "text-3xl font-semibold",
                h3: "text-2xl font-semibold",
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