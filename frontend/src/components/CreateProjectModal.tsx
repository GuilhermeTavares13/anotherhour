import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { createProject } from "@/utils/http";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";

interface CreateProjectModalProps {
    onCreated: () => void;
}

function CreateProjectModal({ onCreated }: CreateProjectModalProps) {
    const token = useSelector((state: RootState) => state.auth.token);
    const [name, setName] = useState('');
    const [open, setOpen] = useState(false);

    const handleCreate = async () => {
        if (!name.trim()) return;

        const project = await createProject(token, name.trim());

        if (project) {
            setName('');
            setOpen(false);
            onCreated();
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div className="flex aspect-square items-center justify-center rounded-lg bg-muted p-2 cursor-pointer hover:bg-muted/70">
                    <span className="text-4xl font-semibold text-muted-foreground">+</span>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a new project</DialogTitle>
                    <DialogDescription>Enter the details for your new project.</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    <div className="field">
                        <Label htmlFor="project-name" className="label">Project Name:</Label>
                        <div className="control">
                            <Input
                                className="input"
                                type="text"
                                name="project-name"
                                id="project-name"
                                placeholder="e.g. Personal App"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') handleCreate();
                                }}
                            />
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={handleCreate} disabled={!name.trim()}>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default CreateProjectModal;