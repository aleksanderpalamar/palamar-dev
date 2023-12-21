"use client";

import { useModal } from "@/hooks/use-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
    try {
      const response = await fetch(
        "https://palamardev-api.onrender.com/Contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const responseData = await response.json();
      form.reset();
      router.refresh();
      onClose();
    } catch (error) {}
  };

  const isLoading = form.formState.isSubmitting;

  const handleOnClose = () => {
    form.reset();
    form.setValue("name", "");
    onClose();
    window.history.back();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleOnSubmit)}>
        <div className="space-y-8 px-6">
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
                    className="bg-zinc-300/50 dark:bg-zinc-100 border-0 
                        focus-visible:ring-0 text-black 
                        focus-visible:ring-offset-0"
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
                    className="bg-zinc-300/50 dark:bg-zinc-100 border-0 
                        focus-visible:ring-0 text-black 
                        focus-visible:ring-offset-0"
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
                    className="bg-zinc-300/50 dark:bg-zinc-100 border-0 
                        focus-visible:ring-0 text-black 
                        focus-visible:ring-offset-0"
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
                  <Input
                    disabled={isLoading}
                    className="bg-zinc-300/50 dark:bg-zinc-100 border-0 
                        focus-visible:ring-0 text-black 
                        focus-visible:ring-offset-0"
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
            variant="default"
            disabled={isLoading}
            className={cn("bg-emerald-500 hover:bg-emerald-400 text-zinc-950")}
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
