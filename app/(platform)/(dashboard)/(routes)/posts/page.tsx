"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

const PostsPage = () => {
  return ( 
    <div className="text-3xl font-bold underline text-black dark:text-white flex items-center gap-x-2">
      This is a protected page
      <ModeToggle />      
      <UserButton afterSignOutUrl="/" />
    </div>
   );
}
 
export default PostsPage;