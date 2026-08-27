import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader
} from '@/components/ui/sidebar'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import type { RootState } from '@/store';
import { setToken } from '@/features/auth/authSlice';
import { Button } from '@/components/ui/button';

const getUserName = (token: string | null) => {
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
    const token = useSelector((state: RootState) => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = getUserName(token);

    const handleLogout = () => {
        dispatch(setToken(null));
        navigate('/login');
    };

    return (
        <Sidebar>
            <SidebarHeader>
                <p>User Information</p>
                <p>{userName}</p>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup></SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <Button variant="outline" onClick={handleLogout}>Logout</Button>
            </SidebarFooter>
        </Sidebar>
    );
}