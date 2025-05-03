"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "./switch";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";


const iconVariants = cva(
	"size-4 transition-opacity duration-300 ease-in", {
	variants: {
		variant: {
			disabled: "opacity-0",
			enabled: "opacity-100",
		}
	},
	defaultVariants: {
		variant: "disabled"
	}
})


export function ButtonTheme() {

	const { setTheme, resolvedTheme } = useTheme()



	return (
		<div className="flex items-center gap-2">
			<SunIcon
				className={cn(iconVariants({ variant: resolvedTheme === 'light' ? 'enabled' : undefined }))}
			/>
			<Switch
				onCheckedChange={(checked) => {
					if (checked) {
						setTheme('dark')
					} else {
						setTheme('light')
					}
				}}
				checked={resolvedTheme === 'dark'}
			/>
			<MoonIcon
				className={cn(iconVariants({ variant: resolvedTheme === 'dark' ? 'enabled' : undefined }))}
			/>
		</div>
	)
}