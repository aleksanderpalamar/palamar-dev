import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <nav
      className="fixed z-50 top-0 w-full h-14 px-4 border-b
    shadow-sm bg-violet-100 dark:bg-[#313338] flex items-center"
    >
      <div className="flex items-center gap-x-4">Navbar!</div>
      <div className="ml-auto flex items-center gap-x-2 mr-14">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};
