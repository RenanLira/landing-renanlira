"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Title } from "@/components/ui/title";
import { BriefcaseBusinessIcon, GalleryVerticalEndIcon, } from "lucide-react";
import { PortifolioTab } from "./portifolio-tab";
import { ExperienciasTab } from "./experiencias-tab";
import { motion } from "motion/react"
import { useState } from "react";

const tabItems = [
    {
        value: "portifolio",
        label: "Portfólio",
        icon: GalleryVerticalEndIcon,
        content: PortifolioTab
    },
    {
        value: "experience",
        label: "Experiências",
        icon: BriefcaseBusinessIcon,
        content: ExperienciasTab
    },
];


const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

export function TabsSection() {

    const [activeTab, setActiveTab] = useState("portifolio");

    const handleTabChange = (value: string) => {
        setActiveTab(value);
    };

    return (
        <section className="">
            <Tabs defaultValue="portifolio"
                onValueChange={handleTabChange}
            >
                <TabsList className="grid grid-cols-2 h-fit p-0 bg-transparent relative">
                    {
                        tabItems.map((item, index) => (
                            <TabsTrigger key={index} value={item.value} className="relative z-10">
                                <div className="flex items-center gap-2">
                                    <item.icon className="w-6 h-6" />
                                    <Title tag="h2">{item.label}</Title>
                                </div>
                            </TabsTrigger>
                        ))
                    }
                    <motion.div
                        className="absolute h-full top-0 rounded-md bg-muted"
                        layoutId="tab-indicator"
                        transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
                        style={{
                            width: `${100 / tabItems.length}%`,
                            left: `${(tabItems.findIndex(tab => tab.value === activeTab) * 100) / tabItems.length}%`,
                            zIndex: 0
                        }}
                    />
                </TabsList>

                {tabItems.map((tab) => (
                    <TabsContent
                        key={tab.value}
                        value={tab.value}
                        asChild
                    >
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={contentVariants}
                            exit="hidden"
                            className="p-4 border rounded-md"
                        >
                            <tab.content />
                        </motion.div>
                    </TabsContent>
                ))}

            </Tabs>
        </section>
    )
}