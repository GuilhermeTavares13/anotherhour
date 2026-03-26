import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { MainContent } from "@/components/MainContent";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from "@/components/ui/card";

function MainPage() {
    return (
        <SidebarProvider>
            <MainContent />
            <main className="flex flex-col w-full">
                <Card>
                    <CardHeader >
                        <CardTitle>Project Title</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent></CardContent>
                    <CardFooter></CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Project Hours</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent></CardContent>
                    <CardFooter></CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Project add</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent></CardContent>
                    <CardFooter></CardFooter>
                </Card>
                <Card className="flex-1">
                    <CardHeader>
                        <CardTitle>List of projects</CardTitle>
                        <CardDescription>Project Description</CardDescription>
                    </CardHeader>
                    <CardContent></CardContent>
                    <CardFooter></CardFooter>
                </Card>
            </main>
        </SidebarProvider>
    );
}

export default MainPage;