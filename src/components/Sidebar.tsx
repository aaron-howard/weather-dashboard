"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/", icon: "dashboard" },
    { name: "Maps", href: "/maps", icon: "map" },
    { name: "Alerts", href: "/alerts", icon: "warning" },
    { name: "Settings", href: "/settings", icon: "settings" },
  ];

  return (
    <>
      <aside className="fixed left-0 top-0 h-full w-[280px] z-50 bg-[#060e20] flex flex-col p-6 gap-8 hidden md:flex border-r border-outline-variant/10">
        <div className="flex flex-col gap-1">
          <h1 className="text-[#00D2FF] font-black text-2xl font-headline tracking-tight">Precision</h1>
          <p className="text-slate-500 text-xs font-label">The Ethereal Observer</p>
        </div>
        <nav className="flex flex-col gap-2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-4 p-3 font-manrope font-medium text-sm hover:translate-x-1 duration-300 rounded-lg ${
                  isActive
                    ? "text-[#00D2FF] bg-[#192540]/60 backdrop-blur-lg border-l-4 border-[#00D2FF]"
                    : "text-slate-500 hover:text-slate-200 border-l-4 border-transparent"
                }`}
              >
                <span className="material-symbols-outlined" data-icon={link.icon}>{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-on-primary text-center">
            <p className="font-bold text-sm mb-2">Upgrade Pro</p>
            <p className="text-xs opacity-80">Access Hyper-Local Radar</p>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#060e20]/95 backdrop-blur-xl border-t border-outline-variant/10 flex justify-around items-center h-16 z-50">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex flex-col items-center gap-1 ${
                isActive ? "text-[#00D2FF]" : "text-slate-500"
              }`}
            >
              <span className="material-symbols-outlined" data-icon={link.icon} style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>
                {link.icon}
              </span>
              <span className="text-[10px] font-label">{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
