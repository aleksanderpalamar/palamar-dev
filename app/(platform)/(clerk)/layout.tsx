const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center dark:bg-[#1f1f1f] bg-white">
      {children}
    </div>
  )
}

export default ClerkLayout