"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SEOHead from '../components/SEOHead'
import { GCC_COUNTRIES, COMPANY_INFO, PRODUCTS } from '../lib/constants'
import Footer from '../components/Footer'
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaBars,
  FaXmark
} from "react-icons/fa6"

export default function ContactPage() {
  const [formSent, setFormSent] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    message: '',
    phone: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyjN9IwZSeOVrbdNbqRKJbx6AO_XPutVjPEJU0Fo0IE42ij3qaA9mohIQK7VIyCo72Y/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormSent(true)
        setFormData({
          name: '', 
          email: '', 
          company: '', 
          country: '', 
          product: '', 
          message: '', 
          phone: ''
        })
        setTimeout(() => setFormSent(false), 5000)
      } else {
        alert('Error sending message. Please try again.')
      }
    } catch (error) {
      alert('Error sending message. Please try again.')
    }
  }

  return (
    <>
      <SEOHead 
        title="Contact Zodiac Enterprise Bahrain | Construction Materials Supplier"
        description="Contact Zodiac Enterprise Bahrain for premium construction materials. Get quotes for wall putty, drywall, cement blocks, precast concrete & solar panels. Serving Bahrain & GCC."
      />

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
                <Link href="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 font-medium">
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
              <Link href="/about" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <Link href="/contact" className="text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
      
      <div className="min-h-screen pt-20">
        {/* Enhanced Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-400/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-green-400/10 rounded-full animate-pulse delay-1000"></div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Let's Build
                <span className="block text-yellow-400">Together</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Get in touch for construction materials, quotes, and partnership opportunities across Bahrain & GCC
              </p>
            </div>
          </div>
        </section>

        {/* Bahrain Quick Contact Banner */}
        <section className="bg-yellow-500 text-blue-900 py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <h3 className="font-bold text-lg">🚚 Fast Delivery Across Bahrain</h3>
                <p className="text-sm">Manama • Riffa • Muharraq • Isa Town • Hamad Town</p>
              </div>
              <div className="flex gap-4">
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <span>📞</span>
                  Call Now
                </a>
                <a 
                  href={`https://wa.me/${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>💬</span>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Contact Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Enhanced Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-gray-800 mb-3">Send Message</h2>
                  <p className="text-gray-600">Get personalized quotes and technical support</p>
                </div>

                {formSent && (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6 animate-fade-in">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">✓</span>
                      </div>
                      <div>
                        <p className="font-semibold">Message Sent Successfully!</p>
                        <p className="text-sm">We'll contact you within 24 hours</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name" 
                        className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jpsawan@gmail.com" 
                        className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+973 XXXX XXXX" 
                        className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company" 
                        className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                      <select 
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        required
                      >
                        <option value="">Select Country</option>
                        {GCC_COUNTRIES.map(country => (
                          <option key={country.code} value={country.code}>{country.name}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Product Interest</label>
                      <select 
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      >
                        <option value="">Select Product</option>
                        {PRODUCTS.map(product => (
                          <option key={product.id} value={product.id}>{product.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements, quantity needed, timeline, and any specific requirements..."
                      rows={5} 
                      className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2 group"
                  >
                    {formSent ? (
                      <>
                        <span className="text-green-300">✓</span>
                        Message Sent Successfully
                      </>
                    ) : (
                      <>
                        <span>🚀</span>
                        Send Message & Get Quote
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Enhanced Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Ready to start your construction project? Contact us for competitive pricing, 
                    technical specifications, and delivery information across Bahrain and GCC.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-xl">📞</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-gray-400">Phone & WhatsApp</h3>
                        <a href={`tel:${COMPANY_INFO.phone}`} className="text-blue-600 hover:text-blue-700 text-xl font-semibold block mb-1">
                          {COMPANY_INFO.phone}
                        </a>
                        <p className="text-gray-600 text-sm">Available 7:00 AM - 7:00 PM</p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 text-xl">📧</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-gray-400">Email</h3>
                        <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-600 hover:text-blue-700 font-semibold block mb-1">
                          {COMPANY_INFO.email}
                        </a>
                        <p className="text-gray-600 text-sm">Quick response within 2 hours</p>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-yellow-600 text-xl">📍</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-gray-400">Bahrain Office</h3>
                        <p className="text-gray-800 font-medium mb-1">{COMPANY_INFO.address}</p>
                        <p className="text-gray-600 text-sm">Visit our office or schedule a meeting</p>
                      </div>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600 text-xl">⏰</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-gray-400">Working Hours</h3>
                        <p className="text-gray-800 font-medium mb-1">Saturday - Thursday: 7:00 AM - 7:00 PM</p>
                        <p className="text-gray-600 text-sm">Friday: 8:00 AM - 12:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* GCC Coverage */}
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="font-bold text-lg mb-4 text-blue-900">🌍 Serving GCC Countries</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {GCC_COUNTRIES.map(country => (
                      <div key={country.code} className="bg-white rounded-lg p-3 text-center hover:shadow-md transition-shadow">
                        <div className="text-lg mb-1"></div>
                        <span className="text-sm font-medium text-gray-700">{country.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Action CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance in Bahrain?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Call us now for urgent inquiries, emergency supplies, or on-site support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <span>📞</span>
                Call {COMPANY_INFO.phone}
              </a>
              <a 
                href={`https://wa.me/${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>💬</span>
                WhatsApp Quick Chat
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Common Footer Component */}
      <Footer />
    </>
  )
}