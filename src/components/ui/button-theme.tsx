"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";


export function ButtonTheme() {

	const { theme, setTheme } = useTheme()

	function handleTheme() {
		console.log(theme)
		if (theme == 'light') {
			setTheme('dark')
			return
		}

		setTheme('light')
	}

	return (
		<Button
			className={"rounded-full"}
			size={"icon"}
			onClick={handleTheme}
		>
			{theme == 'light' ? (
				<SunIcon className="text-[#E6A15D]" />
			) : (
				<MoonIcon className={"text-[#88C0A7]"} />
			)}
		</Button>
	)
}