import React from "react";
import styles from './gallery.module.css';
import Link from "next/link";

export default function GalleryPage() {
  const images = [
    {
      src: "/api/placeholder/600/400",
      alt: "Project 1",
      title: "Modern Office Complex",
      description: "A state-of-the-art office complex with sustainable design and modern facilities."
    },
    {
      src: "/api/placeholder/600/400",
      alt: "Project 2",
      title: "Luxury Residential Homes",
      description: "Elegant and spacious residential properties crafted with precision and quality."
    },
    {
      src: "/api/placeholder/600/400",
      alt: "Project 3",
      title: "Industrial Facility",
      description: "A large-scale industrial facility with robust infrastructure and modern equipment."
    },
    {
      src: "/api/placeholder/600/400",
      alt: "Project 4",
      title: "Retail Shopping Center",
      description: "A vibrant retail shopping center offering diverse spaces for various businesses."
    },
    {
      src: "/api/placeholder/600/400",
      alt: "Project 5",
      title: "Educational Institute",
      description: "A well-equipped campus designed to foster learning and innovation."
    },
    {
      src: "/api/placeholder/600/400",
      alt: "Project 6",
      title: "Healthcare Facility",
      description: "A modern healthcare facility with advanced medical infrastructure."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center"> {/* Center Alignment */}
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Gallery</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto"> {/* Center Text */}
            Explore some of our completed projects and see the quality and attention to detail that we bring to every job. Each project reflects our commitment to excellence in construction.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className={`${styles.galleryItem} overflow-hidden rounded-lg shadow-md`}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{image.title}</h3>
                <p className="text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-500 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in Working with Us?</h2>
          <p className="text-white text-lg mb-8">Contact us today to learn more about our projects and services</p>
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
