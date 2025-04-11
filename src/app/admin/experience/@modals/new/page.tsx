"use client"

import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, } from "@/components/ui/drawer";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewExperienceModalPage() {

    const navigation = useRouter()
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        navigation.back()
    }

    return (
        <Drawer open={open} onOpenChange={setOpen} onAnimationEnd={handleClose}>
            <DrawerContent>
                <div className="mx-auto w-full overflow-y-auto max-h-[50vh]">
                    <DrawerHeader>
                        <DrawerTitle>Nova Experiencia</DrawerTitle>
                        <DrawerDescription>adicione uma nova experiencia de trabalho</DrawerDescription>
                    </DrawerHeader>
                    <div className="px-2">

                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancelar</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}