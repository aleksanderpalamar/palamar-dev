"use client";

import {
  Dialog,
  DialogContent,  
  DialogHeader,  
} from "@/components/ui/dialog";
import { useContact } from "@/hooks/use-contact";
import { ContactForm } from "@/components/Forms/contact";

export const ContactModal = () => {
  const contact = useContact();

  return (
    <Dialog open={contact.isOpen} onOpenChange={contact.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">Get in touch</h2>          
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
};
