"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const LandingPage = () => {
  const services = [
    {
      title: "Residential Construction",
      description: "Custom homes and renovations tailored to your dreams",
    },
    {
      title: "Commercial Projects",
      description: "Office buildings, retail spaces, and industrial facilities",
    },
    {
      title: "Renovation",
      description: "Modernize and upgrade your existing space",
    },
    {
      title: "Consulting",
      description: "Expert advice for your construction projects",
    },
  ];

  const heroImages = ["/images/bridge.jpg", "/images/building.jpg"];
  const aboutUs = ["/images/about-us.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <main className="bg-white">
      {/* Hero Section with Slider */}
      <div className="relative bg-white lg:bg-white lg:min-h-screen">
        {/* Main container */}
        <div className="relative container mx-auto px-4 py-4 lg:py-0">
          <div className="flex flex-col lg:flex-row items-center lg:justify-center lg:min-h-screen">
            {/* Image container with slider */}
            <div className="w-full lg:w-4/6 order-1 lg:order-2">
              <div className="relative aspect-video lg:aspect-[16/9] rounded-xl overflow-hidden shadow-2xl border-4 border-red-600">
                {heroImages.map((image, index) => (
                  <Image
                    layout="fill"
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={`object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                {/* Text overlay for large screens with shadow effect */}
                <div className="absolute inset-0 hidden lg:flex flex-col items-center justify-center text-center p-4 lg:p-8">
                  <h1
                    className="text-4xl sm:text-5xl font-bold text-white"
                    style={{
                      textShadow:
                        "2px 2px 8px rgba(0, 0, 0, 0.7), -2px 2px 8px rgba(0, 0, 0, 0.7), 2px -2px 8px rgba(0, 0, 0, 0.7), -2px -2px 8px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    Building Your Future
                  </h1>
                  <p
                    className="text-lg sm:text-xl text-white mt-2"
                    style={{
                      textShadow:
                        "2px 2px 6px rgba(0, 0, 0, 0.6), -2px 2px 6px rgba(0, 0, 0, 0.6), 2px -2px 6px rgba(0, 0, 0, 0.6), -2px -2px 6px rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    Quality Construction Services Since 1990
                  </p>
                </div>
              </div>
            </div>

            {/* Text content for mobile or small screens */}
            <div className="w-full lg:hidden flex items-center justify-center text-center py-4 order-2">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
                  Building Your Future
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 mt-2">
                  Quality Construction Services Since 1990
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="pt-12 lg:pt-16 pb-12 lg:pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 lg:mb-12 text-red-600">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-red-600 hover:border-red-700"
              >
                <h3 className="text-xl font-semibold mb-4 text-red-600">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <img
                src={aboutUs}
                alt="About us"
                className="rounded-lg shadow-lg w-full border-4 border-red-600"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-red-600">
                Why Choose Us?
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  With over 30 years of experience in the construction industry,
                  we&apos;ve built our reputation on quality, reliability, and
                  customer satisfaction.
                </p>
                <ul className="space-y-2">
                  {[
                    "Professional and Experienced Team",
                    "Quality Materials and Workmanship",
                    "On-Time Project Completion",
                    "Competitive Pricing",
                  ].map((text, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-12 lg:py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 lg:mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg lg:text-xl mb-6 lg:mb-8">
            Contact us today for a free consultation
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-red-600 px-6 py-3 lg:px-8 lg:py-3 rounded-lg hover:bg-gray-100 transition duration-300 font-semibold shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
