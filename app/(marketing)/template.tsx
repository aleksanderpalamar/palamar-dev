import { AnimatePresenceComponent } from "@/lib/framer"

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresenceComponent
      mode="popLayout"     
    >
      {children}
    </AnimatePresenceComponent>
  )
}

export default Template