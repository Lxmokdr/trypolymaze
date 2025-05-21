"use client";

import Link from "next/link";
import Image from "next/image";
import "../globals.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/home" },
    { name: "Polymaze", href: "/polymaze" },
    { name: "Participate", href: "/participate" },
    { name: "Testimonies", href: "/testimonies" },
    { name: "FAQ", href: "/faq" },
    { name: "About us", href: "/aboutus" },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Desktop Vertical Navbar */}
      <div className="hidden md:flex fixed right-10 top-0 h-screen w-60 z-50 items-center justify-center">
        <div className="relative flex flex-col items-end justify-center h-full space-y-10 text-white pr-6">
          <div className="absolute inset-y-0 right-4 w-px bg-white/80" />
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                href={item.href}
                key={item.name}
                className="relative group flex items-center space-x-4"
              >
                <span
                  className={`text-xl transition-all ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-white/60 group-hover:text-white"
                  }`}
                >
                  {item.name}
                </span>
                <span
                  className={`w-2 h-2 rounded-full transition-all ${
                    isActive
                      ? "bg-white scale-150"
                      : "bg-white/30 group-hover:bg-white"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Top Navbar */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`md:hidden fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md shadow-lg"
            : "bg-black/80 backdrop-blur-sm"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3">
          <div className="w-36 h-auto relative">
            <Image
              src="/logo1.png"
              alt="Polymaze Logo"
              fill
              className="object-contain"
            />
          </div>
          <motion.button
            variants={itemVariants}
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 z-40 bg-black/90 backdrop-blur-md flex flex-col"
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <motion.button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={28} className="text-white" />
            </motion.button>
          </div>

          {/* Mobile Nav Items */}
          <motion.nav
            className="flex flex-col items-center space-y-6 text-white text-2xl mt-8"
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`${
                      isActive
                        ? "font-semibold text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>
        </motion.div>
      )}
    </>
  );
}
