import React from "react";
import styles from './products.module.css';
import Link from "next/link";

export default function ProductsPage() {
  const products = [
    {
      title: "Concrete Mix",
      description: "High-quality concrete mix for all types of construction projects",
      image: "/api/placeholder/600/400",
      features: ["High Durability", "Weather Resistant", "Quick Setting", "Cost Effective"]
    },
    {
      title: "Steel Beams",
      description: "Strong and reliable steel beams for structural support",
      image: "/api/placeholder/600/400",
      features: ["Heavy Load Capacity", "Corrosion Resistant", "Various Sizes Available", "High Strength"]
    },
    {
      title: "Roofing Sheets",
      description: "Durable and lightweight roofing solutions",
      image: "/api/placeholder/600/400",
      features: ["Weatherproof", "Easy Installation", "UV Resistant", "Multiple Colors"]
    },
    {
      title: "Insulation Materials",
      description: "Energy-efficient insulation solutions for buildings",
      image: "/api/placeholder/600/400",
      features: ["Thermal Insulation", "Soundproofing", "Eco-Friendly", "Fire Resistant"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-white py-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-6">Our Products</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We offer a wide range of high-quality products to meet your construction needs. From concrete mix to insulation materials, our products are designed for durability and performance.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`${styles.productCard} bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-red-600`}
            >
              <div className={styles.productImage}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-red-600 mb-4">
                  {product.title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {product.description}
                </p>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-center space-x-3 text-gray-700"
                    >
                      <span className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></span>
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
      <div className="bg-red-600 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Looking for Quality Products?</h2>
          <p className="text-white text-lg mb-8">Contact us today to discuss your requirements and get the best materials for your projects</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
