import { Navigate } from "react-router";

export default function PrivateRoute({ user, children }) {

    if (!user) {
        return <Navigate to="/" replace />
    }

    return children;
}