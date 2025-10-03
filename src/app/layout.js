"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";
import { Menu } from "lucide-react";

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
    { name: "Reviews", path: "/reviews" },
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
      <body className="flex flex-col min-h-screen bg-gray-50">
        {/* Header */}
        <header className="flex justify-between items-center p-2 lg:p-4 bg-gray-50/80 shadow-md text-gray-800 border-b-4 border-red-600 backdrop-blur-sm relative">
          <div className="company-name text-2xl lg:text-5xl font-bold tracking-tight">
            One Link Precast
          </div>
          <div className="flex-shrink-0"></div>
          <Image
            src="/images/Logo.jpg"
            width={110}
            height={110}
            alt="Company Logo"
            className="logo w-36 lg:w-44 h-16 lg:h-20 object-contain"
          />
        </header>

        {/* Navigation Ribbon */}
        <div
          className={`sticky top-0 z-50 transform transition-transform duration-300 backdrop-blur-sm bg-gray-50/80 ${
            !showRibbon && !isMenuOpen ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <div className="bg-red-600 shadow-md/80">
            <div className="container mx-auto px-4">
              <div className="flex items-center h-12 lg:h-14 relative">
                <nav className="hidden lg:flex flex-1 justify-center items-center space-x-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className={`px-4 py-2 text-white text-sm font-medium rounded-md transition-colors ${
                        currentPath === item.path
                          ? "bg-red-700"
                          : "hover:bg-red-700/90"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                  className="lg:hidden p-2 text-white hover:bg-red-700 rounded-md transition-colors absolute right-0"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  <Menu size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden bg-red-600 shadow-lg transition-all duration-300 ${
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
                      ? "bg-red-700"
                      : "hover:bg-red-700/90"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-50/80 text-gray-800 py-8 lg:py-12 border-t-4 border-red-600 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg lg:text-xl font-semibold mb-4 text-red-600">
                  Contact Us
                </h3>
                <p className="text-gray-700">(555) 123-4567</p>
                <p className="text-gray-700">contact@construction.com</p>
                <p className="text-gray-700">123 Builder Street</p>
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-semibold mb-4 text-red-600">
                  Quick Links
                </h3>
                {quickLinks.map((item) => (
                  <p
                    key={item.name}
                    className="text-gray-700 hover:text-red-600 transition-colors"
                  >
                    <Link href={item.path}>{item.name}</Link>
                  </p>
                ))}
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-semibold mb-4 text-red-600">
                  Working Hours
                </h3>
                <p className="text-gray-700">Monday - Friday: 8AM - 6PM</p>
                <p className="text-gray-700">Saturday: 9AM - 4PM</p>
                <p className="text-gray-700">Sunday: Closed</p>
              </div>
            </div>
            <p className="mt-8 border-t border-gray-300 pt-8 text-center text-gray-600">
              &copy; {year} Construction Company. All rights reserved.
            </p>
          </div>
        </footer>

        {/* Mobile-only adjustments and enhanced company name styling */}
        <style jsx>{`
          .company-name {
            background: linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
            font-weight: 900;
            letter-spacing: -0.02em;
            position: relative;
          }

          @media (max-width: 768px) {
            header {
              display: flex;
              align-items: center;
              position: relative;
              padding-right: 0;
            }
            .company-name {
              font-size: 1.8rem;
            }
            .logo {
              position: absolute;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
            }
          }

          @media (min-width: 769px) {
            .company-name {
              font-size: 3rem;
            }
          }
        `}</style>
      </body>
    </html>
  );
}