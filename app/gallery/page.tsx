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
  FaXmark
} from "react-icons/fa6"

const SOCIAL_LINKS = [
  { name: 'Instagram', href: 'https://instagram.com/zodiacgcc', icon: <FaInstagram size={20} /> },
  { name: 'X', href: 'https://twitter.com/zodiacgcc', icon: <FaXTwitter size={20} /> },
  { name: 'Facebook', href: 'https://facebook.com/zodiacgcc', icon: <FaFacebookF size={20} /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/zodiacgcc', icon: <FaLinkedinIn size={20} /> }
]

const PRODUCT_SHOWCASE = [
  {
    id: 1,
    title: "Premium Wall Putty",
    description: "High-quality wall putty for smooth finishes in GCC construction projects",
    image: "/products/wall-putty-showcase.webp",
    features: ["Weather-resistant", "Easy application", "Long-lasting finish"],
    keywords: "wall putty Bahrain, construction putty Saudi Arabia, wall finish UAE"
  },
  {
    id: 2,
    title: "Drywall Panels",
    description: "Advanced drywall solutions for interior construction across GCC",
    image: "/products/drywall-showcase.webp",
    features: ["Fire-resistant", "Sound insulation", "Moisture control"],
    keywords: "drywall panels Qatar, gypsum board Oman, wall panels Kuwait"
  },
  {
    id: 3,
    title: "Solar Cement Blocks",
    description: "Specialized cement blocks designed for solar panel installations",
    image: "/products/solar-blocks-showcase.webp",
    features: ["Solar-optimized", "High durability", "Easy mounting"],
    keywords: "solar blocks UAE, cement blocks Saudi Arabia, solar foundation Bahrain"
  },
  {
    id: 4,
    title: "Glass Panels for Solar",
    description: "High-performance glass panels for solar energy applications",
    image: "/products/glass-panels-showcase.webp",
    features: ["High transparency", "Heat resistant", "Dust protection"],
    keywords: "solar glass Qatar, glass panels Oman, solar panels Kuwait"
  },
  {
    id: 5,
    title: "Precast Concrete",
    description: "Precast concrete solutions for fast and reliable construction",
    image: "/products/precast-showcase.webp",
    features: ["Rapid installation", "Consistent quality", "Cost-effective"],
    keywords: "precast concrete Bahrain, concrete panels UAE, precast Saudi Arabia"
  },
  {
    id: 6,
    title: "Construction Solutions",
    description: "Complete construction material packages for GCC projects",
    image: "/products/construction-solutions.webp",
    features: ["Full supply", "Technical support", "GCC delivery"],
    keywords: "construction materials GCC, building supplies Dubai, project materials Doha"
  }
]

const PROJECT_STATS = [
  { number: "500+", label: "Projects Supported" },
  { number: "6", label: "GCC Countries" },
  { number: "100%", label: "Quality Certified" },
  { number: "24/7", label: "Support Available" }
]

export default function GalleryPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [selectedProduct, setSelectedProduct] = React.useState(null)

  return (
    <>
      <SEOHead page="Gallery" />
      {/* Navigation Header */}
      <nav className="bg-white fixed w-full top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Image
                  src="/logo.png"
                  alt="Zodiac Enterprise Logo - Construction Materials GCC"
                  width={160}
                  height={48}
                  className="mr-2"
                  priority
                />
                <span className="text-gray-900 font-bold text-lg md:text-xl">
                  Enterprise
                </span>
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
                <Link href="/gallery" className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 font-medium">
                  Gallery
                </Link>
                <Link href="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium transition-colors">
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
              <Link href="/gallery" className="text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Gallery
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
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
        <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              Product Gallery
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Premium Construction Materials Serving Projects Across GCC Region
            </p>
          </div>
        </section>

        {/* Updated Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {PROJECT_STATS.map((stat, index) => (
                <div key={index} className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">Our Product Portfolio</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Premium Construction Materials Optimized for GCC Climate Conditions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCT_SHOWCASE.map((product) => (
              <div 
                key={product.id} 
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={`${product.title} - Zodiac Enterprise GCC`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href="/contact" 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-sm"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Supply Chain Operations Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            {/* Stars */}
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white animate-twinkle"
                style={{
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.2,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 3 + 2}s`
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-4">GCC Supply Chain Network</h2>
            <p className="text-xl text-blue-200 mb-12 max-w-3xl mx-auto">
              Bahrain-based logistics hub delivering construction materials across all GCC countries with reliable supply chain operations
            </p>

            {/* Circular Supply Chain Visualization */}
            <div className="relative h-96 mb-16 mx-auto" style={{ width: '600px', height: '400px' }}>
              
              {/* Circular Container - Visual Guide */}
              <div className="absolute inset-0 border-2 border-blue-400/20 rounded-full"></div>
              
              {/* Bahrain Center - HQ */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-16 h-16 bg-yellow-500 rounded-full animate-pulse shadow-2xl shadow-yellow-500/50 flex items-center justify-center">
                  <div className="w-8 h-8 bg-yellow-300 rounded-full"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 border-2 border-yellow-400/50 rounded-full animate-ping"></div>
                </div>
                <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-yellow-400 font-bold text-lg whitespace-nowrap bg-gray-900/80 px-4 py-2 rounded-lg border border-yellow-500/30">
                  🇧🇭 Bahrain HQ
                </div>
              </div>

              {/* GCC Country Points - Evenly Spaced in Circle */}
              {[
                { angle: 0, country: 'UAE', color: 'green', flag: '🇦🇪', delay: '0s' },      // Right
                { angle: 60, country: 'Kuwait', color: 'red', flag: '🇰🇼', delay: '0.5s' },  // Top-Right
                { angle: 120, country: 'Saudi Arabia', color: 'blue', flag: '🇸🇦', delay: '1s' }, // Top-Left
                { angle: 180, country: 'Oman', color: 'pink', flag: '🇴🇲', delay: '1.5s' },  // Left
                { angle: 240, country: 'Qatar', color: 'purple', flag: '🇶🇦', delay: '2s' }  // Bottom-Left
              ].map((point, index) => {
                const radius = 140; // Distance from center
                const x = radius * Math.cos(point.angle * Math.PI / 180);
                const y = radius * Math.sin(point.angle * Math.PI / 180);
                
                return (
                  <div 
                    key={index} 
                    className="absolute z-10"
                    style={{ 
                      left: `calc(50% + ${x}px)`, 
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {/* Destination Point with Lighthouse Effect */}
                    <div className="relative">
                      {/* Outer Glow */}
                      <div className={`absolute inset-0 w-12 h-12 bg-${point.color}-500 rounded-full animate-ping opacity-60`} 
                           style={{ animationDelay: point.delay }}></div>
                      {/* Main Point */}
                      <div className={`relative w-12 h-12 bg-${point.color}-600 rounded-full shadow-lg shadow-${point.color}-500/50 flex items-center justify-center border-2 border-${point.color}-300`}>
                        <span className="text-xl">{point.flag}</span>
                      </div>
                      {/* Lighthouse Beam */}
                      <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-1 h-10 bg-${point.color}-300 rounded-full animate-lighthouse`} 
                           style={{ animationDelay: point.delay }}></div>
                    </div>
                    <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-white font-bold text-sm whitespace-nowrap bg-gray-900/80 px-3 py-2 rounded-lg border border-white/20 min-w-24">
                      {point.country}
                    </div>
                  </div>
                );
              })}

              {/* Continuous Animated Planes from Bahrain to GCC Countries */}
              <div className="absolute inset-0">
                {/* Plane to UAE */}
                <div className="absolute top-1/2 left-1/2 animate-fly-to-uae">
                  <div className="w-8 h-8 text-green-400 transform rotate-0">✈️</div>
                </div>

                {/* Plane to Kuwait */}
                <div className="absolute top-1/2 left-1/2 animate-fly-to-kuwait">
                  <div className="w-8 h-8 text-red-400 transform rotate-60">✈️</div>
                </div>

                {/* Plane to Saudi Arabia */}
                <div className="absolute top-1/2 left-1/2 animate-fly-to-ksa">
                  <div className="w-8 h-8 text-blue-400 transform rotate-120">✈️</div>
                </div>

                {/* Plane to Oman */}
                <div className="absolute top-1/2 left-1/2 animate-fly-to-oman">
                  <div className="w-8 h-8 text-pink-400 transform rotate-180">✈️</div>
                </div>

                {/* Plane to Qatar */}
                <div className="absolute top-1/2 left-1/2 animate-fly-to-qatar">
                  <div className="w-8 h-8 text-purple-400 transform rotate-240">✈️</div>
                </div>
              </div>

              {/* Static Connection Lines - Visible Paths */}
              <div className="absolute inset-0">
                {[0, 60, 120, 180, 240].map((angle, index) => {
                  const radius = 140;
                  const x2 = radius * Math.cos(angle * Math.PI / 180);
                  const y2 = radius * Math.sin(angle * Math.PI / 180);
                  const length = Math.sqrt(x2 * x2 + y2 * y2);
                  const rotation = Math.atan2(y2, x2) * 180 / Math.PI;
                  
                  return (
                    <div 
                      key={index}
                      className="absolute h-0.5 bg-white/30 rounded-full origin-left"
                      style={{
                        left: '50%',
                        top: '50%',
                        width: `${length}px`,
                        transform: `rotate(${rotation}deg)`
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* SEO Optimized Supply Chain Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm text-left">
                <div className="text-2xl mb-3">🚚</div>
                <h3 className="font-bold text-yellow-400 mb-2">Fast GCC Delivery</h3>
                <p className="text-blue-200 text-sm">Quick construction materials delivery from Bahrain to all GCC countries including Saudi Arabia, UAE, Qatar, Oman, and Kuwait</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm text-left">
                <div className="text-2xl mb-3">📦</div>
                <h3 className="font-bold text-green-400 mb-2">Reliable Supply</h3>
                <p className="text-blue-200 text-sm">Consistent construction materials supply chain ensuring project timelines across GCC construction sites</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm text-left">
                <div className="text-2xl mb-3">🏗️</div>
                <h3 className="font-bold text-blue-400 mb-2">GCC Climate Optimized</h3>
                <p className="text-blue-200 text-sm">Materials specifically designed for GCC weather conditions - heat, humidity, and desert environment compatibility</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm text-left">
                <div className="text-2xl mb-3">⭐</div>
                <h3 className="font-bold text-purple-400 mb-2">Quality Assurance</h3>
                <p className="text-blue-200 text-sm">All construction materials meet GCC standards and international quality certifications for building projects</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your GCC Construction Project</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get construction materials pricing and delivery information for Bahrain, Saudi Arabia, UAE, Qatar, Oman, and Kuwait
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-900 hover:bg-blue-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get GCC Quote
              </Link>
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* New Footer Component */}
      <Footer />
    </>
  )
}