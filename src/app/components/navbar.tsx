"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "../globals.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/home" },
    { name: "Polymaze", href: "/polymaze" },
    { name: "Participate", href: "/participate" },
    { name: "FAQ", href: "/faq" },
    { name: "Testimonies", href: "/testimonies" },
    { name: "About us", href: "/aboutus" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-md">
      <div className="flex items-center justify-between p-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-20 w-auto "
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 text-white text-2xl justify-between w-3/4 ">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="navLink">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)} aria-label="Close menu">
              <X size={28} className="text-white" />
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex flex-col items-center space-y-6 text-white text-2xl mt-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="navLink"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
