import { Link } from "react-router";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { getUserName } from "@/utils/user";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuLink,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

function MainPage() {
    const token = useSelector((state: RootState) => state.auth.token);
    const userName = getUserName(token);

    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link to="/">{userName}</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] max-w-[80vw] grid-cols-1 gap-1 p-1 md:grid-cols-2">
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link to="/projects" className="flex flex-col gap-1 rounded-sm p-2 hover:bg-muted">
                                            <span className="text-sm font-medium">Add project</span>
                                            <span className="text-xs text-muted-foreground">Create a new project</span>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link to="/projects" className="flex flex-col gap-1 rounded-sm p-2 hover:bg-muted">
                                            <span className="text-sm font-medium">List of projects</span>
                                            <span className="text-xs text-muted-foreground">Browse your projects</span>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <main className="flex flex-col w-full">
            </main>
        </>
    );
}

export default MainPage;