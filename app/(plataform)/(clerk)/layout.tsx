const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center dark:bg-[#313338] bg-slate-100">
      {children}
    </div>
  )
}

export default ClerkLayout