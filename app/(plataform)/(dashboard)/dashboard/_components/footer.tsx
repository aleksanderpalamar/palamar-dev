export const Footer = () => {
  return (
    <div
      className="fixed z-50 bottom-0 w-full h-14 px-4 border-t
    shadow-sm bg-white dark:bg-[#313338] flex items-center"
    >
      <div className="ml-auto flex items-center gap-x-2 mr-8">
        <p className="text-xs text-muted-foreground font-medium">
          copyright © {new Date().getFullYear()}
          <span className="text-muted-foreground ml-2">
            Palamar
            <span className="text-muted-foreground font-black">.</span>
            Dev
          </span>
        </p>
      </div>
    </div>
  );
};
