"use client"

import { useEffect, useState } from "react"
import { ContactModal } from "@/components/modals/contact-modal"
import { DownloadModal } from "@/components/modals/download-modal"
import { ProjectModal } from "../modals/project-modal"
import { CoverImageModal } from "../modals/cover-image-modal"
import { SettingsModal } from "../modals/modal-settings"

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <ContactModal />
      <DownloadModal />
      <ProjectModal />
      <CoverImageModal />
      <SettingsModal />      
    </>
  )
}