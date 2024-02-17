"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Colors {
  colors: {
    name: string;
    color: string;
    background: string;
  }[];
}

const colors: Colors = {
  colors: [
    {
      name: 'default',
      color: 'text-violet-500',
      background: 'bg-violet-100'
    },
    {
      name: 'red',
      color: 'text-rose-500',
      background: 'bg-rose-100'
    },
    {
      name: 'orange',
      color: 'text-orange-500',
      background: 'bg-orange-100'
    },
    {
      name: 'yellow',
      color: 'text-yellow-500',
      background: 'bg-yellow-100'
    },
    {
      name: 'lime',
      color: 'text-lime-500',
      background: 'bg-lime-100'
    },
    {
      name: 'green',
      color: 'text-green-500',
      background: 'bg-green-100'
    },
    {
      name: 'cyan',
      color: 'text-cyan-500',
      background: 'bg-cyan-100'
    },
    {
      name: 'blue',
      color: 'text-blue-500',
      background: 'bg-blue-100'
    },
  ]
};

export const ThemeSwitcher = () => {
  const { setTheme } = useTheme();
  const [selectedColor, setSelectedColor] = useState(colors.colors[0].name);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
        >
          Change theme
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="py-1">
          {colors.colors.map((color) => (
            <DropdownMenuItem
              key={color.name}
              onClick={() => {
                setSelectedColor(color.name && color.background);
                setTheme(color.name);
              }}
              className={`text-xs ${color.color} ${color.background} hover:bg-violet-200`}
            >
              {color.name}
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};