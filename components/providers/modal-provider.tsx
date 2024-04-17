"use client"

import { useEffect, useState } from "react"
import { ContactModal } from "@/components/modals/contact-modal"
import { DownloadModal } from "@/components/modals/download-modal"
import { ProjectModal } from "../modals/project-modal"

import { SettingsModal } from "../modals/modal-settings"
import { ModalImage } from "../modals/modal-image"

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
      <SettingsModal />
      <ModalImage />      
    </>
  )
}