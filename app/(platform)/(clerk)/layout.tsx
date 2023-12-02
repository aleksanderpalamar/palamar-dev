const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center dark:bg-gray-950 bg-white">
      {children}
    </div>
  )
}

export default ClerkLayout