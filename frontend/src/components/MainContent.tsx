import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader
} from '@/components/ui/sidebar'

export function MainContent() {
    return (
        <Sidebar>
            <SidebarHeader>
                    User Information
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup></SidebarGroup>
            </SidebarContent>
            <SidebarFooter></SidebarFooter>
        </Sidebar>
    );
}