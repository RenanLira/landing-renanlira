export default function ExperienceLayout({
    children,
    modals,
}: {
    children: React.ReactNode;
    modals: React.ReactNode;
}) {
    return (
        <>
            {children}
            {modals}
        </>
    );
}