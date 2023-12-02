import { Navbar } from "./_components/navbar"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center dark:bg-gray-950 bg-white">
      <Navbar />
      {children}
    </div>
  )
}

export default DashboardLayout