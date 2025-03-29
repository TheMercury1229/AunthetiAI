import { Logo } from "@/components/landing/Logo";
import { footerData } from "@/constants";

export const Footer = () => {
  return (
    <footer className="section !pb-0">
      <div className="container  ">
        <div className="grid grid-cols-1 gap-x-2 gap-y-10 lg:grid-cols-4">
          <Logo variant="icon" />
          <div className="grid grid-cols-2 gap-x-2 gap-y-8 text-sm sm:grid-cols-4 lg:col-span-3">
            {footerData.links.map(({ title, items }) => (
              <ul key={title}>
                <p className="mb-4">{title}</p>
                {items.map(({ href, label }) => (
                  <li key={label} className="text-muted-foreground">
                    <a
                      href={href}
                      className="iniline-block py-1 transition-colors hover:text-primary"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-12 border-t border-gray-600/10 py-6">
          <p className="">{footerData.copyright}</p>
          <div className="">
            <ul className="flex gap-5">
              {footerData.socialLinks.map(({ icon: IconComponent, href }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <IconComponent />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
