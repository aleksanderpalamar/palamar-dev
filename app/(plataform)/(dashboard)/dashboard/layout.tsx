import { Footer } from "./_components/footer"
import { Navbar } from "./_components/navbar"

const DashboardIdLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default DashboardIdLayout