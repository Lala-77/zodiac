import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SEOHead from '../components/SEOHead'
import { PRODUCTS, GCC_COUNTRIES, COMPANY_INFO } from '../lib/constants'
import Footer from '../components/Footer'

export default function ProductsPage() {
  return (
    <>
      <SEOHead 
        title="Premium Construction Materials Supplier in Bahrain | Zodiac Enterprise"
        description="Zodiac Enterprise Bahrain: Leading supplier of wall putty, drywall systems, cement blocks, precast concrete, and solar glass panels. Quality construction materials for Bahrain & GCC projects."
        keywords="construction materials bahrain, wall putty supplier bahrain, drywall panels bahrain, cement blocks bahrain, precast concrete bahrain, solar glass panels bahrain, building materials supplier"
      />
      
      {/* Navigation Menu - Same as Home Page */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.webp" 
                alt="Zodiac Enterprise - Construction Materials Bahrain"
                width={180}
                height={50}
                className="object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About Us
              </Link>
              <Link href="/products" className="text-blue-600 font-medium border-b-2 border-blue-600">
                Products
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="min-h-screen pt-16">
        {/* Enhanced Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Premium Construction
                <span className="block text-yellow-400">Materials</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Quality Building Solutions for Bahrain & GCC Construction Projects
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Get Bahrain Pricing
                </Link>
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Call {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-green-400/20 rounded-full animate-pulse delay-1000"></div>
        </section>

        {/* Bahrain Focus Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Construction Materials <span className="text-blue-600">in Bahrain</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                As Bahrain's leading construction materials supplier, we provide high-quality building solutions 
                tailored for the unique climate and construction requirements of the Kingdom. Our products meet 
                international standards and are trusted by contractors across Bahrain.
              </p>
            </div>

            {/* Bahrain Specific Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-blue-100 rounded-xl">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-400">Bahrain Climate Resistant</h3>
                <p className="text-gray-600">Materials designed to withstand Bahrain's humid climate and high temperatures</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-xl">
  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
    <span className="text-white text-2xl">🚚</span>
  </div>
  <h3 className="text-xl font-bold mb-2 opacity-90 text-gray-400">Fast Bahrain Delivery</h3>
  <p className="text-gray-600">Quick delivery across Manama, Riffa, Muharraq, and all Bahrain regions</p>
</div>
              
              <div className="text-center p-6 bg-yellow-50 rounded-xl">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-400">Quality Certified</h3>
                <p className="text-gray-600">All materials meet Bahraini construction standards and international quality certifications</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Products Grid */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Product Range</h2>
              <p className="text-lg text-gray-600">Premium construction materials for residential, commercial, and industrial projects in Bahrain</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS.map(product => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                >
                  <div className="h-64 bg-gray-100 relative overflow-hidden">
                    <Image
                      src={`/products/${
                        product.id === 'wall-putty' ? 'wall-putty1' :
                        product.id === 'drywall' ? 'drywall-putty' :
                        product.id === 'precast' ? 'precast-concrete' :
                        product.id === 'solar-blocks' ? 'solar-blocks1' :
                        product.id === 'glass-panels' ? 'glass1' : product.id
                      }.webp`}
                      alt={`${product.name} - Construction Materials Bahrain | Zodiac Enterprise`}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                      priority={product.id === 'wall-putty'}
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Bahrain Stock
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                    
                    {/* Product Specific Features */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.id === 'wall-putty' && (
                          <>
                            <li>✅ Superior water resistance for humid climate</li>
                            <li>✅ Excellent adhesion on all surfaces</li>
                            <li>✅ Crack resistance in high temperatures</li>
                            <li>✅ Smooth finish & easy application</li>
                          </>
                        )}
                        {product.id === 'drywall' && (
                          <>
                            <li>✅ Enhanced fire resistance (Type X)</li>
                            <li>✅ Moisture & mold resistant for GCC humidity</li>
                            <li>✅ Superior sound insulation properties</li>
                            <li>✅ Easy installation & finishing</li>
                          </>
                        )}
                        {product.id === 'solar-blocks' && (
                          <>
                            <li>✅ High compressive strength for solar mounting</li>
                            <li>✅ Weather & UV resistant formulation</li>
                            <li>✅ Pre-designed mounting points</li>
                            <li>✅ Thermal stability in extreme heat</li>
                          </>
                        )}
                        {product.id === 'glass-panels' && (
                          <>
                            <li>✅ High light transmittance for solar efficiency</li>
                            <li>✅ Anti-reflective coating technology</li>
                            <li>✅ Sandstorm & impact resistant</li>
                            <li>✅ Thermal stability up to 80°C</li>
                          </>
                        )}
                        {product.id === 'precast' && (
                          <>
                            <li>✅ Faster construction timelines</li>
                            <li>✅ Superior durability & strength</li>
                            <li>✅ Excellent thermal mass properties</li>
                            <li>✅ Custom designs & finishes available</li>
                          </>
                        )}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <Link 
                        href="/contact" 
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                      >
                        <span>Get Quote</span>
                        <span>→</span>
                      </Link>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">GCC Supply</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore More</h2>
              <p className="text-lg text-gray-600">Discover our complete range of construction solutions</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/gallery" className="bg-blue-100 hover:bg-blue-100 p-6 rounded-xl transition-colors group">
                <div className="text-3xl mb-4 text-blue-600">🖼️</div>
                <h3 className="font-bold text-lg mb-2 text-gray-400">Project Gallery</h3>
                <p className="text-gray-600 text-sm">See our materials in action across GCC construction projects</p>
                <span className="text-blue-600 text-sm mt-2 inline-block group-hover:underline">View Gallery →</span>
              </Link>
              
              <Link href="/about" className="bg-green-50 hover:bg-green-100 p-6 rounded-xl transition-colors group">
                <div className="text-3xl mb-4 text-green-600">🏢</div>
                <h3 className="font-bold text-lg mb-2 text-gray-400">About Us</h3>
                <p className="text-gray-600 text-sm">Learn about our expertise in GCC construction materials</p>
                <span className="text-green-600 text-sm mt-2 inline-block group-hover:underline">Our Story →</span>
              </Link>
              
              <Link href="/contact" className="bg-yellow-50 hover:bg-yellow-100 p-6 rounded-xl transition-colors group">
                <div className="text-3xl mb-4 text-yellow-600">📞</div>
                <h3 className="font-bold text-lg mb-2 text-gray-400">Get in Touch</h3>
                <p className="text-gray-600 text-sm">Contact our Bahrain team for quotes and consultations</p>
                <span className="text-yellow-600 text-sm mt-2 inline-block group-hover:underline">Contact Us →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* GCC Coverage Section */}
        <section className="bg-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Serving All GCC Countries</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {GCC_COUNTRIES.map((country) => (
                <div key={country.code} className="bg-blue-700 p-4 rounded-xl hover:bg-blue-600 transition-colors">
                  <div className="text-2xl mb-2">{country.flag}</div>
                  <span className="font-semibold">{country.name}</span>
                </div>
              ))}
            </div>
            <p className="text-blue-200 text-lg">
              Based in Bahrain with supply chain networks across Saudi Arabia, UAE, Qatar, Kuwait, and Oman
            </p>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-6">Start Your Bahrain Construction Project</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get competitive pricing, technical specifications, and delivery timelines for construction materials in Bahrain. 
              Our team is ready to support your residential, commercial, or industrial projects.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl mb-4">🏗️</div>
                <h3 className="font-bold mb-2">Residential Projects</h3>
                <p className="text-sm text-gray-300">Villas, apartments, housing complexes</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl mb-4">🏢</div>
                <h3 className="font-bold mb-2">Commercial Buildings</h3>
                <p className="text-sm text-gray-300">Offices, malls, retail spaces</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl mb-4">🏭</div>
                <h3 className="font-bold mb-2">Industrial Facilities</h3>
                <p className="text-sm text-gray-300">Factories, warehouses, plants</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Request Bahrain Quote
              </Link>
              <a 
                href={`https://wa.me/${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>📱</span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* New Footer Component */}
        <Footer />
      </div>
    </>
  )
}