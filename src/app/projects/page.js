import React from "react";
import styles from './projects.module.css';
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      src: "/api/placeholder/600/400",
      alt: "Office Complex Project",
      title: "Modern Office Complex",
      description: "A state-of-the-art office complex with sustainable features, built for a leading tech company.",
      highlights: ["Energy-efficient design", "Green rooftop garden", "Open workspace layout", "Advanced security systems"]
    },
    {
      src: "/api/placeholder/600/400",
      alt: "Residential Project",
      title: "Luxury Residential Development",
      description: "A high-end residential development with premium amenities and stylish architectural design.",
      highlights: ["Swimming pool and gym", "24/7 security", "Smart home systems", "Landscaped gardens"]
    },
    {
      src: "/api/placeholder/600/400",
      alt: "Industrial Facility Project",
      title: "Industrial Manufacturing Facility",
      description: "A large-scale industrial facility equipped with the latest technology and high-capacity systems.",
      highlights: ["Heavy-duty construction", "Automated machinery setup", "Comprehensive safety protocols", "Energy management systems"]
    },
    {
      src: "/api/placeholder/600/400",
      alt: "Healthcare Center Project",
      title: "Advanced Healthcare Center",
      description: "A healthcare center with modern facilities and patient-friendly design.",
      highlights: ["Emergency care services", "Inpatient and outpatient services", "Advanced diagnostic labs", "Eco-friendly construction"]
    },
    {
      src: "/api/placeholder/600/400",
      alt: "Retail Mall Project",
      title: "Luxury Retail Mall",
      description: "A high-end retail mall with luxury brands and entertainment options.",
      highlights: ["Exclusive shopping experience", "Food courts and restaurants", "Theater and entertainment zone", "Ample parking space"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center"> {/* Center Alignment */}
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Completed Projects</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto"> {/* Center Text */}
            Discover our portfolio of completed projects that demonstrate our commitment to quality and excellence. Each project showcases our expertise in different construction domains.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`${styles.projectItem} overflow-hidden rounded-lg shadow-md`}>
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-700">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></span>
                      <span>{highlight}</span>
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
          <h2 className="text-3xl font-bold text-white mb-4">Have a Project in Mind?</h2>
          <p className="text-white text-lg mb-8">Contact us today to discuss your project needs and see how we can bring your vision to life</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-yellow-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
