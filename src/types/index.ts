import type { ComponentType } from "react";

type MenuItem = {
  href: string;
  label: string;
  submenu?: SubmenuItem[];
};

type SubmenuItem = {
  href: string;
  icon: ComponentType; // Changed to ComponentType
  label: string;
  desc: string;
};

export type { MenuItem, SubmenuItem };
