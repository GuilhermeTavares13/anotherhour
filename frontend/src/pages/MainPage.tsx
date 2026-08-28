import { SidebarProvider } from "@/components/ui/sidebar";
import { MainContent } from "@/components/MainContent";

function MainPage() {
    return (
        <SidebarProvider>
            <MainContent />
            <main className="flex flex-col w-full">
            </main>
        </SidebarProvider>
    );
}

export default MainPage;