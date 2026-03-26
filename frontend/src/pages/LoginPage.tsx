import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { onLogin } from "@/utils/http";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => onLogin({ email, password });
    
    return (
        <div className="flex min-h-screen w-full items-center justify-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Enter your information below</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="field">
                                <Label htmlFor="email" className="label">E-Mail:</Label>
                                <div className="control">
                                    <Input className="input" type="email" name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="field">
                                <Label htmlFor="password">Password:</Label>
                                <Input type="password" name="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button className="w-full" onClick={handleLogin}>Login</Button>
                    <Button variant="outline" className="w-full">Sign Up</Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default LoginPage;