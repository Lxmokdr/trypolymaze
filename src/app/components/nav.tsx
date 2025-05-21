"use client";

import Link from "next/link";
import "../globals.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();


  const navItems = [
    { name: "Home", href: "/home" },
    { name: "About Polymaze", href: "/polymaze" },
    { name: "Participate", href: "/participate" },
    { name: "Testimonies", href: "/testimonies" },
    { name: "FAQ", href: "/faq" },
    { name: "About us", href: "/aboutus" },
  ];

  return (
    <>
      {/* Desktop Vertical Navbar */}
      <div className="hidden md:flex fixed right-10 top-0 h-screen w-60 z-50 items-center justify-center">
        <div className="relative flex flex-col items-end justify-center h-full space-y-10 text-white pr-6">
          {/* Vertical line */}
          <div className="absolute inset-y-0 right-4 w-px bg-white/80" />

          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link href={item.href} key={item.name} className="navLin relative group flex items-center space-x-4">
                <span
                  className={`text-xl transition-all ${
                    isActive ? "text-white font-semibold" : "text-white/60 group-hover:text-white"
                  }`}
                >
                  {item.name}
                </span>
                <span
                  className={`w-2 h-2 rounded-full transition-all ${
                    isActive ? "bg-white scale-150" : "bg-white/30 group-hover:bg-white"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Top Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 w-full z-50 bg-black/80 backdrop-blur-sm px-4 py-3">
        <div className="flex justify-between items-center text-white">
          <span className="font-bold text-lg">Polymaze</span>
          {/* Optional Hamburger for future dropdown */}
        </div>

        <div className="mt-3 flex flex-wrap gap-4 justify-center items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                href={item.href}
                key={item.name}
                className="flex items-center space-x-1 group"
              >
                <span
                  className={`text-xs ${
                    isActive ? "text-white font-semibold" : "text-white/60 group-hover:text-white"
                  }`}
                >
                  {item.name}
                </span>
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    isActive ? "bg-white scale-125" : "bg-white/30 group-hover:bg-white"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
