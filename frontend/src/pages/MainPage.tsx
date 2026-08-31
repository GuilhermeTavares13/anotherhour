import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import Navbar from "@/components/Navbar";
import CreateProjectModal from "@/components/CreateProjectModal";
import { getProjects, type Project } from "@/utils/http";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext
} from "@/components/ui/carousel";

function MainPage() {
    const token = useSelector((state: RootState) => state.auth.token);
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        getProjects(token).then(setProjects);
    }, [token]);

    return (
        <>
            <Navbar />
            <main className="flex flex-col w-full">
                <Carousel className="w-full max-w-xs mx-auto">
                    <CarouselContent>
                        {projects.length === 0 ? (
                            <CarouselItem className="basis-full">
                                <CreateProjectModal onCreated={() => getProjects(token).then(setProjects)} />
                            </CarouselItem>
                        ) : (
                            projects.map((project) => (
                                <CarouselItem key={project.id} className="basis-1/5">
                                    <div className="flex aspect-square items-center justify-center rounded-lg bg-muted p-2">
                                        <span className="text-sm font-semibold text-center">{project.name}</span>
                                    </div>
                                </CarouselItem>
                            ))
                        )}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </main>
        </>
    );
}

export default MainPage;