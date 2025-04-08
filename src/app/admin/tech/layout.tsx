


export default async function TechLayout({ children, modals }: { children: React.ReactNode, modals: React.ReactNode }) {

    return (
        <>
            {children}
            {modals}
        </>
    )
}