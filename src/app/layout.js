"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";
import { Phone, Mail, Clock, MapPin, Menu } from "lucide-react";

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showRibbon, setShowRibbon] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [year, setYear] = useState(new Date().getFullYear());
  const currentPath = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Systems", path: "/systems" },
    { name: "Products", path: "/products" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
  ];

  const quickLinks = navItems.filter(
    (item) => !["Gallery", "Systems", "Products"].includes(item.name)
  );

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) return;

      const currentScrollY = window.scrollY;
      const newDirection = currentScrollY > lastScrollY ? "down" : "up";

      setScrollDirection(newDirection);
      setShowRibbon(currentScrollY < 50 || newDirection === "up");
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen, lastScrollY]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPath]);

  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen">
        <header className="flex justify-between items-center p-4 lg:p-6 bg-gray-900 text-white">
          <div className="text-lg lg:text-2xl font-bold tracking-tight">
            Construction Co.
          </div>
          <img
            src="/images/logo.png"
            alt="Company Logo"
            className="w-12 lg:w-16 h-12 lg:h-16 object-contain"
          />
        </header>

        <div
          className={`sticky top-0 z-50 transform transition-transform duration-300 ${
            !showRibbon && !isMenuOpen ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <div className="bg-yellow-500 shadow-md">
            <div className="container mx-auto px-4">
              <div className="flex items-center h-14 lg:h-16 relative">
                <nav className="hidden lg:flex flex-1 justify-center items-center space-x-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className={`px-4 py-2 text-white text-sm font-medium rounded-md transition-colors ${
                        currentPath === item.path
                          ? "bg-yellow-600"
                          : "hover:bg-yellow-600/50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <button
                  className="lg:hidden p-2 text-white hover:bg-yellow-600 rounded-md transition-colors absolute right-0"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  <Menu size={24} />
                </button>
              </div>
            </div>
          </div>

          <div
            className={`lg:hidden bg-yellow-500 shadow-lg transition-all duration-300 ${
              isMenuOpen ? "max-h-screen" : "max-h-0"
            } overflow-hidden`}
          >
            <nav className="container mx-auto px-4 py-2 flex flex-col space-y-1 text-center w-full">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`px-4 py-2 text-white text-base font-medium w-full transition-colors ${
                    currentPath === item.path
                      ? "bg-yellow-600"
                      : "hover:bg-yellow-600/50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <main className="flex-grow">{children}</main>

        <footer className="bg-gray-900 text-white py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg lg:text-xl font-semibold mb-4">
                  Contact Us
                </h3>
                <p>(555) 123-4567</p>
                <p>contact@construction.com</p>
                <p>123 Builder Street</p>
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-semibold mb-4">
                  Quick Links
                </h3>
                {quickLinks.map((item) => (
                  <p key={item.name}>
                    <Link href={item.path}>{item.name}</Link>
                  </p>
                ))}
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-semibold mb-4">
                  Working Hours
                </h3>
                <p>Monday - Friday: 8AM - 6PM</p>
                <p>Saturday: 9AM - 4PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            <p className="mt-8 border-t pt-8 text-center">
              &copy; {year} Construction Company. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
