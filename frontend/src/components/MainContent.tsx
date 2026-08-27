import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader
} from '@/components/ui/sidebar'

const getUserName = () => {
    const token = localStorage.getItem('UserToken');
    if (!token) return '';

    try {
        const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
        const padded = base64.padEnd(base64.length + ((4 - base64.length % 4) % 4), '=');
        return (JSON.parse(atob(padded)) as { name?: string }).name ?? '';
    } catch {
        return '';
    }
}

export function MainContent() {
    const userName = getUserName();
    return (
        <Sidebar>
            <SidebarHeader>
                <p>User Information</p>
                <p>{userName}</p>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup></SidebarGroup>
            </SidebarContent>
            <SidebarFooter></SidebarFooter>
        </Sidebar>
    );
}