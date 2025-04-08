import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from 'next-themes'
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
	variable: "--font-poppins",
	weight: ["100", "500", "400", "600", "700", "800", "900"],
	subsets: ["latin", "latin-ext"]
})

const inter = Inter({
	variable: "--font-inter",
	weight: ["100", "500", "900"],
	subsets: ["latin", "latin-ext"]
})

export const metadata: Metadata = {
	title: "Renan Lira",
	description: "Developer",
};

export default function RootLayout({ children }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="pt-BR"
			suppressHydrationWarning={true}
			className={`${poppins.variable} ${inter.variable} antialiased`}
		>
			<body>
				<ThemeProvider
					enableSystem

					defaultTheme={"system"}
					attribute={"class"}
				>
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
