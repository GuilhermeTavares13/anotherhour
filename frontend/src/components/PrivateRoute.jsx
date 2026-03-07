import { Navigate } from "react-router";

export default function PrivateRoute({user, children}) {
    console.log(user);
    if(!user) {
        return <Navigate to="/login" replace />
    }

    return children;
}