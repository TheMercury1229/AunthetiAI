import type { MenuItem } from "@/types";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { ChevronsUpDown } from "lucide-react";

type MobileMenuProps = {
  navMenu: MenuItem[];
};
export const MobileMenu = ({ navMenu }: MobileMenuProps) => {
  return (
    <div>
      <ul className="mb-3">
        {navMenu.map(({ href, label, submenu }) => (
          <li key={`${href}`}>
            {submenu ? (
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant={"ghost"} className="w-full justify-between">
                    {label}
                    <ChevronsUpDown />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="ps-2">
                  <ul className="border-l border-l-muted-foreground/20">
                    {submenu.map(({ href, label }) => (
                      <li key={label}>
                        <Button
                          variant={"ghost"}
                          className="w-full justify-start text-muted-foreground hover:bg-transparent"
                          asChild
                        >
                          <a href={href}>{label}</a>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Button
                variant={"ghost"}
                asChild
                className="w-full justify-start"
              >
                <a href={href}>{label}</a>
              </Button>
            )}
          </li>
        ))}
      </ul>
      <Separator className="bg-muted-foreground/20" />
      <div className="flex items-center justify-end gap-2 mt-2">
        <Button variant={"ghost"} className="w-fit">
          Sign In
        </Button>
        <Button className="w-fit">Get Started</Button>
      </div>
    </div>
  );
};
