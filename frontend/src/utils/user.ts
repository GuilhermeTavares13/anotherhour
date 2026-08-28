export const getUserName = (token: string | null) => {
    if (!token) return '';

    try {
        const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
        const padded = base64.padEnd(base64.length + ((4 - base64.length % 4) % 4), '=');
        return (JSON.parse(atob(padded)) as { name?: string }).name ?? '';
    } catch {
        return '';
    }
}
