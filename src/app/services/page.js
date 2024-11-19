import React from "react";
import styles from './services.module.css';

export default function ServicesPage() {
  const services = [
    {
      title: "Residential Construction",
      description: "Custom homes and renovations tailored to your dreams",
      image: "/api/placeholder/600/400",
      features: ["Custom Home Building", "Home Renovations", "Additions", "Kitchen & Bath Remodels"]
    },
    {
      title: "Commercial Projects",
      description: "Office buildings, retail spaces, and industrial facilities",
      image: "/api/placeholder/600/400",
      features: ["Office Buildings", "Retail Spaces", "Warehouses", "Industrial Facilities"]
    },
    {
      title: "Renovation",
      description: "Modernize and upgrade your existing space",
      image: "/api/placeholder/600/400",
      features: ["Interior Renovation", "Exterior Renovation", "Space Planning", "Upgrades"]
    },
    {
      title: "Consulting",
      description: "Expert advice for your construction projects",
      image: "/api/placeholder/600/400",
      features: ["Project Planning", "Cost Estimation", "Design Review", "Site Analysis"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center"> {/* Center Alignment */}
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto"> {/* Center Text */}
            We offer comprehensive construction services tailored to meet your specific needs. 
            From residential to commercial projects, our experienced team ensures quality and satisfaction.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${styles.serviceCard} bg-white rounded-lg shadow-md overflow-hidden border border-gray-200`}
            >
              <div className={styles.serviceImage}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-center space-x-3 text-gray-700"
                    >
                      <span className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-500 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-white text-lg mb-8">Contact us today for a free consultation</p>
          <a
            href="/contact"
            className="inline-block bg-white text-yellow-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
