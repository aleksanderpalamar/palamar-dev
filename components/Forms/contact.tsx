"use client";

import { useModal } from "@/hooks/use-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export const ContactForm = () => {
  const { onClose } = useModal();
  const router = useRouter(); 

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleOnSubmit = async (values: z.infer<typeof formSchema>) => {
    const apiEndPoint = "/api/email";

    fetch(apiEndPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          alert("Email sent");
        }        
      })
      .catch((err) => {
        alert(err);
      })
  };

  const isLoading = form.formState.isSubmitting;

  const handleOnClose = () => {
    form.reset();
    form.setValue("name", "");
    onClose();
    router.push("/");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleOnSubmit)}>
        <div className="space-y-8 px-6 flex flex-col gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-zinc-100">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    className="w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
                    placeholder="Name (e.g. John Doe)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-zinc-100">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    className="w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
                    placeholder="Email (e.g. 4K2wD@example.com)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-zinc-100">
                  Subject
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    className="w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
                    placeholder="Subject"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-zinc-100">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isLoading}
                    className="w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
                    placeholder="Enter message"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <DialogFooter className="px-6 py-4">
          <Button
            variant="superOutline"
            size="sm"
            disabled={isLoading}
            className={cn(
              "bg-[#8257e6] hover:bg-[#8257e6]/90 transition-colors text-zinc-950 w-full",              
              isLoading && "opacity-50 cursor-not-allowed"
            )}
            suppressHydrationWarning
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                {form.formState.isSubmitSuccessful && (
                  <Dialog open onOpenChange={handleOnClose}>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          Message sent successfully!👍😊
                        </DialogTitle>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                )}
                Send
              </>
            )}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};
