import { Loader, Loader2Icon } from "lucide-react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center dark:bg-zinc-900">
      <div className="flex items-center gap-x-2">
        <h1 className="text-2xl font-bold text-[#8257e6]">Loading</h1>
        <div className="animate-spin text-[#8257e6] mx-auto">
          <Loader className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
