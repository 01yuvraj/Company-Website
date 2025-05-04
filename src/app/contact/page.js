"use client";

import React, { useEffect, useState } from "react";
import styles from "./contact.module.css";
import Link from "next/link";

export default function ContactPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white py-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-2">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            We&apos;re here to answer any questions you may have. Reach out and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Form and Location Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  className={`${styles.inputField} w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className={`${styles.inputField} w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  className={`${styles.inputField} w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32`}
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className={`${styles.submitButton} w-full py-3 px-6 rounded-lg transition duration-300 bg-yellow-500 text-white font-medium hover:bg-yellow-600`}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="h-80 lg:h-auto rounded-lg overflow-hidden shadow-lg">
            {isClient && (
              <iframe
                title="Google Map - Highlighted Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.499019612608!2d55.270782515003295!3d25.19719778389367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433fddcfaeaf%3A0xf13a6c9b02af22e6!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1694779390250!5m2!1sen!2sae"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-500 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-white text-lg mb-8">
            Feel free to reach out for inquiries, collaborations, or just to
            say hello.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-yellow-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
