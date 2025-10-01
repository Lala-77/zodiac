"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SEOHead from '../components/SEOHead'
import { GCC_COUNTRIES, COMPANY_INFO } from '../lib/constants'
import Footer from '../components/Footer'
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaBars,
  FaXmark,
  FaAward,
  FaTruck,
  FaGlobe,
  FaUsers
} from "react-icons/fa6";

const SOCIAL_LINKS = [
  { name: 'Instagram', href: 'https://instagram.com/zodiacgcc', icon: <FaInstagram size={20} /> },
  { name: 'X', href: 'https://twitter.com/zodiacgcc', icon: <FaXTwitter size={20} /> },
  { name: 'Facebook', href: 'https://facebook.com/zodiacgcc', icon: <FaFacebookF size={20} /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/zodiacgcc', icon: <FaLinkedinIn size={20} /> }
]

const TEAM_VALUES = [
  {
    icon: <FaAward className="text-3xl text-yellow-500" />,
    title: 'Quality Excellence',
    description: 'Premium construction materials meeting international standards for GCC construction projects in Saudi Arabia, UAE, Qatar, Oman, and Kuwait.'
  },
  {
    icon: <FaTruck className="text-3xl text-green-500" />,
    title: 'Rapid GCC Delivery',
    description: 'Efficient logistics network ensuring timely delivery of building materials across all GCC countries including Dubai, Abu Dhabi, Doha, and Riyadh.'
  },
  {
    icon: <FaGlobe className="text-3xl text-blue-500" />,
    title: 'Regional Expertise',
    description: 'Deep understanding of Middle East construction requirements, climate challenges, and building regulations across the Arabian Peninsula.'
  },
  {
    icon: <FaUsers className="text-3xl text-purple-500" />,
    title: 'Partnership Approach',
    description: 'Strategic partnerships with contractors and developers across Bahrain, Saudi Arabia, UAE, Qatar, Oman, and Kuwait construction markets.'
  }
]

const GCC_STATS = [
  { number: "6", label: "GCC Countries Served", description: "Complete coverage across the Gulf region" },
  { number: "500+", label: "Projects Supported", description: "Residential, commercial & industrial" },
  { number: "24/7", label: "Support Available", description: "Round-the-clock customer service" },
  { number: "100%", label: "Quality Certified", description: "International standards compliance" }
]

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <>
      <SEOHead page="About" />
      {/* Navigation Header */}
      <nav className="bg-white fixed w-full top-0 z-50 shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logo.png"
                    alt="Zodiac Enterprise - Construction Materials Supplier GCC"
                    width={160}
                    height={48}
                    className="mr-2"
                    priority
                  />
                  <span className="text-gray-900 font-bold text-lg md:text-xl">
                    Enterprise
                  </span>
                </Link>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium transition-colors">
                  Home
                </Link>
                <Link href="/products" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium transition-colors">
                  Products
                </Link>
                <Link href="/gallery" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium transition-colors">
                  Gallery
                </Link>
                <Link href="/about" className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-900 focus:outline-none"
              >
                {mobileMenuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link href="/products" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Products
              </Link>
              <Link href="/gallery" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Gallery
              </Link>
              <Link href="/about" className="text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="min-h-screen bg-white text-gray-900 pt-20">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 text-white py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              About Zodiac Enterprise
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-4">
              Your Trusted Partner for Premium Construction Materials Across GCC Countries
            </p>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Bahrain-based supplier serving Saudi Arabia, UAE, Qatar, Oman, and Kuwait with quality-certified building materials
            </p>
          </div>
        </section>

        {/* GCC Presence Stats */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Our GCC Construction Network
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {GCC_STATS.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-gray-800 mb-2 text-sm md:text-base">{stat.label}</div>
                  <div className="text-xs md:text-sm text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Story & Mission</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Zodiac Enterprise</strong> combines <strong>New Zealand quality standards</strong> with 
                  <strong> Middle East construction expertise</strong>, operating from our strategic <strong>Bahrain headquarters</strong> 
                  to serve the entire <strong>Gulf Cooperation Council region</strong>.
                </p>
                <p>
                  We specialize in providing <strong>climate-resistant construction materials</strong> specifically engineered for 
                  the challenging environmental conditions of <strong>Saudi Arabia, UAE, Qatar, Oman, and Kuwait</strong>. 
                  Our products withstand extreme heat, humidity, and desert conditions.
                </p>
                <p>
                  From <strong>solar-optimized building materials</strong> to <strong>weather-resistant construction products</strong>, 
                  every item in our portfolio is rigorously tested for performance in <strong>Middle Eastern climate conditions</strong> 
                  and meets international quality certifications.
                </p>
                <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500 mt-6">
                  <p className="font-semibold text-blue-800 text-sm md:text-base">
                    🎯 <strong>Our Mission:</strong> To be the leading construction materials supplier in GCC countries, 
                    delivering innovative building solutions that excel in regional climate conditions while maintaining 
                    international quality standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Section - Fixed */}
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
              {!imageError ? (
                <Image
                  src="/hero-banner.webp"
                  alt="Zodiac Enterprise Construction Materials - Premium building supplies for GCC countries"
                  fill
                  className="object-cover"
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-center p-6">
                  <div>
                    <div className="text-4xl mb-4">🏗️</div>
                    <p>Construction Materials</p>
                    <p className="text-sm mt-2">Image: /public/hero-banner.webp</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Why Choose Zodiac Enterprise?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Delivering excellence in construction materials across the GCC region with proven expertise and reliable supply chain
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM_VALUES.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-center mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GCC Coverage Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Serving All GCC Countries</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Strategic supply chain network connecting Bahrain to major construction markets across the Arabian Peninsula
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {GCC_COUNTRIES.map((country) => (
                <div key={country.code} className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors group">
                  <div className="text-2xl mb-2"></div>
                  <h3 className="font-bold text-blue-800 text-sm">{country.name}</h3>
                  <p className="text-xs text-gray-600">Active Supply</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your GCC Construction Project?</h2>
            <p className="text-lg mb-8 text-blue-100">
              Get expert consultation, competitive pricing, and reliable delivery for construction materials across Bahrain, Saudi Arabia, UAE, Qatar, Oman, and Kuwait
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg text-sm md:text-base"
              >
                Get GCC Construction Quote
              </Link>
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg text-sm md:text-base"
              >
                Call {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Common Footer Component */}
      <Footer />
    </>
  )
}