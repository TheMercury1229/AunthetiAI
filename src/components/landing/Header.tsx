import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu } from "lucide-react";
import { Logo } from "@/components/landing/Logo";
import { MobileMenu } from "@/components/landing/MobileMenu";
import { navMenu } from "@/constants";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  return (
    <header className="h-16 grid grid-cols-1 items-center md:h-20 lg:h-24">
      <div className="container flex justify-between lg:grid lg:grid-cols-[1fr_3fr_1fr]">
        <Logo variant="icon" />
        {/* Navigation desktop */}
        <NavigationMenu className="max-lg:hidden mx-auto">
          <NavigationMenuList>
            {navMenu.map(({ href, label, submenu }) => (
              <NavigationMenuItem key={href} className="hover:bg-foreground/5">
                {submenu ? (
                  <>
                    <NavigationMenuTrigger className="hover:bg-foreground/5 ">
                      {label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid grid-cols-2 gap-2 p-2 w-[640px]">
                        {submenu.map(
                          ({ href, label, icon: IconComponent, desc }) => (
                            <li key={href}>
                              <NavigationMenuLink asChild>
                                <a
                                  href={href}
                                  className="flex flex-row gap-3 select-none p-2 rounded-sm transition-colors hover:bg-muted-foreground/5"
                                >
                                  <div className="size-10 bg-foreground/10 rounded-sm shadow-sm border-t border-foreground/5 flex-shrink-0 grid place-items-center">
                                    <IconComponent />
                                  </div>
                                  <div>
                                    <div className="text-[13px] leading-normal mb-1 text-white font-semibold">
                                      {label}
                                    </div>
                                    <p className="text-[13px] leading-normal text-muted-foreground">
                                      {desc}
                                    </p>
                                  </div>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          )
                        )}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    href={href}
                    className={`${navigationMenuTriggerStyle()} `}
                  >
                    {label}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2 justify-end max-lg:hidden">
          <Button variant={"ghost"}>Sign In</Button>
          <Button>Get Started</Button>
        </div>
        {/* Navigation Mobile */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={"outline"} size={"icon"} className="lg:hidden">
              <Menu />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="bg-background/50 backdrop-blur-3xl border-foreground/5 border-x-0 border-b-0 rounded-lg overflow-hidden"
          >
            <MobileMenu navMenu={navMenu} />
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};
