"use client";

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { BookMarkedIcon, BriefcaseBusinessIcon, CpuIcon, PanelsTopLeftIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"


const navItens = [
    {
        label: 'Tecnologias',
        icon: CpuIcon,
        href: '/admin/tech'
    },
    {
        label: 'Experiencias',
        icon: BriefcaseBusinessIcon,
        href: '/admin/experience'
    },
    {
        label: 'Formação',
        icon: BookMarkedIcon,
        href: '/admin/formacao'
    }
]

export function AppSidebar() {

    const pathname = usePathname()

    return (
        <Sidebar
            variant="floating"
            collapsible="icon"
        >
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem className="flex gap-3">
                        <SidebarMenuButton
                            size={"lg"}
                        >
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">

                                <PanelsTopLeftIcon size={20} />
                            </div>
                            <span>Portifolio WebSite</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Minhas Informações
                    </SidebarGroupLabel>

                    <SidebarMenu>
                        {navItens.map((item, index) => (
                            <SidebarMenuItem key={index}>
                                <SidebarMenuButton asChild
                                    isActive={pathname.includes(item.href)}
                                >
                                    <Link href={item.href}>
                                        <item.icon size={24} />
                                        {item.label}
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}