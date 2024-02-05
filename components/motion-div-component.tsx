"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";

export type MotionDivProps = {
  children: React.ReactNode;
};

export const MotionDivComponent = forwardRef<HTMLDivElement, MotionDivProps>(
  (props, ref) => <motion.div ref={ref} {...props} />
);

MotionDivComponent.displayName = "MotionDivComponent";