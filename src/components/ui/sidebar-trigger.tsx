"use client"

import { useSidebar } from "@/components/ui/sidebar"
import { Button } from "./button"
import { Sidebar } from "lucide-react"

export function SidebarTrigger() {
    const { toggleSidebar } = useSidebar()

    return (
        <div>
            <Button onClick={toggleSidebar} size={"default"}>
                <Sidebar />
                Menu Lateral
            </Button>
        </div>
    )
}
