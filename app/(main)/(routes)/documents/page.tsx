"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { UserButton, useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { FileWarning, PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner"

const DocumentsPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const handleOnCreate = () => {
    const promise = create({ title: "Untitled" })
      .then((documentId) => router.push(`/documents/${documentId}`));

      toast.promise(promise, {
        loading: "Creating a new post...",
        success: "New post created!",
        error: "Failed to create a new post.",
      })
  }

  return ( 
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <div className="flex flex-col items-center">
        <FileWarning size={96} className="text-zinc-500 dark:text-zinc-400" />
        <h1 className="text-2xl font-bold text-zinc-500 dark:text-zinc-400">
          Empty documents
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Welcome to {user?.firstName}&apos;s Notes
        </p>
        <Button onClick={handleOnCreate} className="mt-4 bg-violet-500 hover:bg-violet-600">
          <PlusCircle className="mr-2 h-5 w-5" />
          Create a note
        </Button>
      </div>     
    </div>
   );
}
 
export default DocumentsPage;