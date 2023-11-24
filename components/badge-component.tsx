"use client";

import { Badge, BadgeProps } from "@/components/ui/badge";
import { ActionTooltip } from "./action-tooltip";

const labelItem = [
  {
    label: "React",
  },
  {
    label: "Next.js",
  },
  {
    label: "Javascript",
  },
  {
    label: "Tailwind",
  },
  {
    label: "Typescript",
  },
  {
    label: "Node.js",
  },
  {
    label: "MySQL",
  },
];

export const BadgeComponent = () => {
  const badgeLink = () => {
    return (
      <>
        {labelItem.map((item, index) => (
          <Badge
            key={index}
            className="bg-violet-500 hover:bg-violet-400 transition-all"
          >
            {item.label}
          </Badge>
        ))}
      </>
    );
  };

  return <div className="flex space-x-2">{badgeLink()}</div>;
};
