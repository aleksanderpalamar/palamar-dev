"use client"

import React, { useState } from "react";

type RoadmapItem = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface RoadmapProps {
  roadmapItems: RoadmapItem[];
}

export const Roadmap: React.FC<RoadmapProps> = ({ roadmapItems }) => {  
  const [completedItems, setCompletedItems] = useState<number[]>([]);

  const toggleItemCompletion = (itemId: number) => {
    switch (completedItems.includes(itemId)) {
      case true:
        setCompletedItems(completedItems.filter((id) => id !== itemId));
        break;
      case false:
        setCompletedItems([...completedItems, itemId]);
        break;
    }
  }

  return (
    <div>
      <ul>
        {roadmapItems.map((item) => (
          <li key={item.id} className="flex items-center gap-x-2 py-2 px-4 dark:bg-violet-500/10 bg-violet-500/10 rounded mt-10">
            <input
              type="checkbox"
              checked={completedItems.includes(item.id)}
              onChange={() => toggleItemCompletion(item.id)}
            />
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}