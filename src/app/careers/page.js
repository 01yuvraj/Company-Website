"use client";
import React from "react";
import styles from './careers.module.css';
import Link from "next/link";

export default function ReviewsPage() {
  const reviews = [
    {
      name: "John Doe",
      title: "CEO, TechCorp",
      image: "/api/placeholder/100/100",
      review: "We had a fantastic experience working with this company. Their attention to detail and commitment to quality made our project a success.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      title: "Project Manager, BuildIt Inc.",
      image: "/api/placeholder/100/100",
      review: "Their team was professional, knowledgeable, and delivered everything on time. We couldn't have asked for a better partner.",
      rating: 4,
    },
    {
      name: "Michael Lee",
      title: "Owner, Luxury Homes",
      image: "/api/placeholder/100/100",
      review: "They truly understand the importance of quality and customer satisfaction. We were thoroughly impressed with their work.",
      rating: 5,
    },
    {
      name: "Emily Smith",
      title: "Director, GreenWorld",
      image: "/api/placeholder/100/100",
      review: "Efficient, reliable, and highly skilled. The results exceeded our expectations, and we highly recommend their services.",
      rating: 5,
    },
    {
      name: "James Wilson",
      title: "Founder, Innovate Spaces",
      image: "/api/placeholder/100/100",
      review: "A pleasure to work with from start to finish. Their expertise and professionalism made a real difference.",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center"> {/* Center Alignment */}
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Client Reviews</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto"> {/* Center Text */}
            We take pride in delivering excellent service to our clients. Here’s what some of our clients have to say about working with us.
          </p>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className={`${styles.reviewCard} bg-white rounded-lg shadow-md p-6`}>
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.title}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{review.review}</p>
              <div className="flex">
                {[...Array(5)].map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className={`${styles.star} ${
                      starIndex < review.rating ? styles.filled : ""
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-500 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Would You Like to Work with Us?</h2>
          <p className="text-white text-lg mb-8">Get in touch today and let’s discuss how we can help with your next project.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-yellow-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
