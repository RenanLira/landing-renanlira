import { AppSidebar } from "@/components/pages/admin/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar-trigger";

export default function Layout({
  children,
  modals,
}: {
  children: React.ReactNode;
  modals: React.ReactNode;
}) {
  return (
    <div className="flex w-screen min-h-screen">
      <SidebarProvider>
        <AppSidebar />
        <main className="flex flex-col w-full bg-muted border-border border rounded-2xl m-2 p-6 gap-8">
          <SidebarTrigger />
          {children}
        </main>
        {modals}
      </SidebarProvider>
    </div>
  );
}
