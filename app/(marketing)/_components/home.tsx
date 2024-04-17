"use client";

import { Heading } from "./heading";
import { Heroes } from "./heroes";
import { CTA } from "./cta";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export const Home = () => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>
        <Heading />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>
        <Heroes />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>
        <CTA />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
