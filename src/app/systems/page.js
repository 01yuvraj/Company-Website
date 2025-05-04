import React from "react";
import styles from './systems.module.css';
import Link from "next/link";

export default function SystemsPage() {
  const systems = [
    {
      title: "HVAC Systems",
      description: "Efficient heating, ventilation, and air conditioning solutions for your buildings",
      image: "/api/placeholder/600/400",
      features: ["Central Air Conditioning", "Ventilation Systems", "Heating Systems", "Energy Management"]
    },
    {
      title: "Electrical Systems",
      description: "Comprehensive electrical infrastructure for residential and commercial buildings",
      image: "/api/placeholder/600/400",
      features: ["Wiring & Cabling", "Lighting Installations", "Backup Generators", "Energy Saving Solutions"]
    },
    {
      title: "Plumbing Systems",
      description: "Reliable and efficient plumbing solutions tailored to your requirements",
      image: "/api/placeholder/600/400",
      features: ["Water Supply Systems", "Drainage Systems", "Piping Installation", "Fixture Installations"]
    },
    {
      title: "Security Systems",
      description: "Advanced security solutions to keep your property safe and secure",
      image: "/api/placeholder/600/400",
      features: ["Surveillance Cameras", "Access Control Systems", "Intrusion Detection", "Fire Alarm Systems"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center"> {/* Center Alignment */}
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Systems</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto"> {/* Center Text */}
            We provide a wide range of systems tailored to meet the specific needs of your building projects, 
            ensuring safety, efficiency, and comfort in every setup.
          </p>
        </div>
      </div>

      {/* Systems Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {systems.map((system, index) => (
            <div 
              key={index} 
              className={`${styles.systemCard} bg-white rounded-lg shadow-md overflow-hidden border border-gray-200`}
            >
              <div className={styles.systemImage}>
                <img
                  src={system.image}
                  alt={system.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {system.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {system.description}
                </p>
                <ul className="space-y-3">
                  {system.features.map((feature, idx) => (
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
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom System Solution?</h2>
          <p className="text-white text-lg mb-8">Contact us today to discuss your requirements</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-yellow-500 px-8 py-3 rounded-lg font-extrabold hover:bg-gray-100 transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
