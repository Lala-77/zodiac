"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

export default function Home() {
  const [formSent, setFormSent] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("wall-putty");

  // For About Section carousel
  const productsCarousel = [
    "/products/glass2.jpg",
    "/products/glass3.jpg",
    "/products/glass5.jpg",
  ];

  // For Product Section carousels
  const glassImages = [
    "/products/glass1.jpg",
    "/products/glass2.jpg",
    "/products/glass3.jpg",
    "/products/glass4.jpg",
    "/products/glass5.jpg",
    "/products/glass6.jpg",
    "/products/glass7.jpg",
    "/products/glass8.jpg",
    "/products/glass9.jpg",
    "/products/glass10.jpg",
  ];
  const solarBlockImages = [
    "/products/solar-blocks1.webp",
    "/products/solar-blocks2.jpg",
    "/products/solar-blocks3.jpg",
    "/products/solar-blocks4.jpg",
    "/products/solar-blocks5.png",
  ];

  const [glassIndex, setGlassIndex] = useState(0);
  const [solarIndex, setSolarIndex] = useState(0);

  useEffect(() => {
    const glassInterval = setInterval(() => {
      setGlassIndex((prev) => (prev + 1) % glassImages.length);
    }, 3000);

    const solarInterval = setInterval(() => {
      setSolarIndex((prev) => (prev + 1) % solarBlockImages.length);
    }, 3000);

    return () => {
      clearInterval(glassInterval);
      clearInterval(solarInterval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productsCarousel.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSent(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const navHeight = 64;
    if (element) {
      window.scrollTo({
        top: element.offsetTop - navHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Head>
        <title>Zodiac Enterprise - Premium Construction Materials Supplier in GCC | Bahrain</title>
        <meta name="title" content="Zodiac Enterprise - Premium Construction Materials Supplier in GCC | Bahrain" />
        <meta name="description" content="New Zealand&apos;s Zodiac Enterprise in Bahrain supplies premium wall putty, drywall panels, cement blocks, solar glass panels & precast concrete across GCC. Get quality construction materials delivered to Bahrain, Saudi Arabia, UAE, Qatar, Oman, Kuwait." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.zodiacenterprise.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.zodiacenterprise.com/" />
        <meta property="og:title" content="Zodiac Enterprise - Premium Construction Materials Supplier in GCC" />
        <meta property="og:description" content="Supplier of premium construction materials including wall putty, drywall panels, cement blocks, precast concrete and glass panels for solar installations across GCC countries." />
        <meta property="og:image" content="https://www.zodiacenterprise.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.zodiacenterprise.com/" />
        <meta property="twitter:title" content="Zodiac Enterprise - Premium Construction Materials Supplier in GCC" />
        <meta property="twitter:description" content="Supplier of premium construction materials including wall putty, drywall panels, cement blocks, precast concrete and glass panels for solar installations across GCC countries." />
        <meta property="twitter:image" content="https://www.zodiacenterprise.com/twitter-image.jpg" />

        {/* GEO Targeting for GCC */}
        <meta name="geo.region" content="BH" />
        <meta name="geo.placename" content="Manama" />
        <meta name="geo.position" content="26.2235;50.5876" />
        <meta name="ICBM" content="26.2235, 50.5876" />
        
        {/* Additional Important Meta Tags */}
        <meta name="keywords" content="construction materials Bahrain, wall putty GCC, drywall panels Saudi Arabia, cement blocks UAE, solar glass panels Qatar, precast concrete panels Oman, building supplies Kuwait, zodiac enterprise Bahrain, solar panel installation materials, construction supplies Dubai, Abu Dhabi construction materials, Doha building supplies, Muscat construction products, Kuwait building materials" />
        <meta name="author" content="Zodiac Enterprise" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="distribution" content="global" />
        
        {/* Verification tags (to be updated with actual verification codes) */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />

        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ConstructionBusiness",
              "name": "Zodiac Enterprise",
              "description": "Premium supplier of construction materials including wall putty, drywall panels, cement blocks, precast concrete and glass panels for solar installations across GCC countries.",
              "url": "https://www.zodiacenterprise.com",
              "telephone": "+973-1234-5678",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Gulf Road",
                "addressLocality": "Manama",
                "addressCountry": "Bahrain",
                "postalCode": "12345"
              },
              "areaServed": ["BH", "SA", "AE", "QA", "OM", "KW"],
              "sameAs": [
                "https://www.facebook.com/zodiacenterprise",
                "https://www.linkedin.com/company/zodiacenterprise",
                "https://www.instagram.com/zodiacenterprise"
              ]
            })
          }}
        />
      </Head>

      <div className="bg-white font-sans">

        {/* Navigation */}
        <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <Image 
                    src="/logo.png" 
                    alt="Zodiac Enterprise Logo - Premium Construction Materials Supplier in GCC Countries" 
                    width={160} 
                    height={48} 
                    className="w-40 h-12 mr-3" 
                  />
                  <span className="text-gray-900 font-bold text-xl">Enterprise</span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {["home", "products", "gallery", "about", "contact"].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium transition-colors"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-br from-blue-800 to-blue-400 min-h-screen flex items-center pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium Construction Materials for the <span className="text-yellow-400">GCC Region</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Zodiac Enterprise is a New Zealand company operating in Bahrain, delivering the highest standards in wall putty, drywall panels, cement blocks, precast concrete, and specialized glass panels for solar installations across the GCC.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection("products")} className="bg-yellow-500 hover:bg-yellow-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg">
                  View Products
                </button>
                <button onClick={() => scrollToSection("contact")} className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Get Quote
                </button>
              </div>
            </div>
            <div>
              <Image 
                src="/hero-banner.jpg" 
                alt="Premium Construction Materials in GCC Countries - Wall Putty, Drywall Panels, Cement Blocks, Precast Concrete, Solar Glass" 
                width={800} 
                height={600} 
                className="w-full h-[80vh] object-cover rounded-2xl shadow-lg" 
              />
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-32 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Premium Products</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We supply the highest quality construction materials across the GCC region including Bahrain, Saudi Arabia, UAE, Qatar, Oman, and Kuwait. Our products meet the highest international standards for durability and performance in extreme climate conditions.
              </p>
            </div>

            {/* Product Tabs */}
            <div className="mb-12">
              <div className="flex flex-wrap border-b border-gray-200">
                {[
                  { id: "wall-putty", label: "Wall Putty" },
                  { id: "drywall", label: "Drywall Panels" },
                  { id: "solar-blocks", label: "Solar Cement Blocks" },
                  { id: "glass-panels", label: "Glass Panels" },
                  { id: "precast", label: "Precast Concrete" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-6 font-medium text-lg ${activeTab === tab.id ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="py-8">
                {activeTab === "wall-putty" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-6">Premium Wall Putty for GCC Construction</h3>
                      <p className="text-lg text-gray-600 mb-4">
                        Our high-quality wall putty is specially formulated to withstand the extreme climate conditions of the GCC region. It provides excellent adhesion, water resistance, and durability for both interior and exterior applications.
                      </p>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="text-gray-600 space-y-2 mb-6">
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Superior whiteness and smooth finish</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Excellent water resistance and weatherproofing</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> High adhesive strength for all masonry surfaces</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Crack resistance and durability in high temperatures</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Low consumption and easy application</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Environmentally friendly and non-toxic formulation</li>
                      </ul>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Applications:</h4>
                      <p className="text-gray-600 mb-4">
                        Ideal for interior and exterior walls in residential, commercial, and industrial buildings across Bahrain, Saudi Arabia, UAE, Qatar, Oman, and Kuwait. Suitable for concrete, cement plaster, and other masonry surfaces.
                      </p>
                    </div>
                    <div className="h-96 flex items-center justify-center overflow-hidden rounded-xl shadow-lg bg-white">
                      <Image 
                        src="/products/wall-putty1.png" 
                        alt="Premium Wall Putty for Construction Projects in GCC Countries" 
                        width={500} 
                        height={400} 
                        className="object-contain max-h-full max-w-full" 
                      />
                    </div>
                  </div>
                )}

                {activeTab === "drywall" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-6">High-Performance Drywall Panels</h3>
                      <p className="text-lg text-gray-600 mb-4">
                        Our drywall panels are engineered for the specific needs of GCC construction projects. They offer exceptional fire resistance, moisture control, and acoustic insulation properties perfect for the region&apos;s climate and building requirements.
                      </p>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="text-gray-600 space-y-2 mb-6">
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Enhanced fire resistance (Type X drywall)</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Moisture and mold resistance for humid climates</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Superior sound insulation properties</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> High durability and impact resistance</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Easy installation and finishing</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Environmentally friendly manufacturing</li>
                      </ul>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Applications:</h4>
                      <p className="text-gray-600 mb-4">
                        Perfect for interior walls and ceilings in residential, commercial, and hospitality projects throughout the GCC. Ideal for creating partition walls, false ceilings, and other interior applications in Dubai, Abu Dhabi, Doha, Riyadh, Manama, Muscat, and Kuwait City.
                      </p>
                    </div>
                    <div className="h-96 flex items-center justify-center overflow-hidden rounded-xl shadow-lg">
                      <Image 
                        src="/products/drywall-putty.png" 
                        alt="High-Quality Drywall Panels for GCC Construction Projects" 
                        width={500} 
                        height={400} 
                        className="object-cover w-full h-full" 
                      />
                    </div>
                  </div>
                )}

                {activeTab === "solar-blocks" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-6">Solar Panel Cement Blocks</h3>
                      <p className="text-lg text-gray-600 mb-4">
                        Our specialized cement blocks are engineered specifically for solar panel installations in the GCC region. These high-strength blocks provide secure mounting for solar arrays while withstanding extreme weather conditions.
                      </p>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="text-gray-600 space-y-2 mb-6">
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> High compressive strength for secure mounting</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Weather and UV resistant formulation</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Pre-designed mounting points for easy installation</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Thermal stability in extreme temperatures</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Corrosion-resistant reinforcement</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Custom sizes available for different solar panel types</li>
                      </ul>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Applications:</h4>
                      <p className="text-gray-600 mb-4">
                        Specifically designed for solar farm installations, rooftop solar projects, and commercial solar applications across the GCC. Ideal for large-scale renewable energy projects in Saudi Arabia, UAE, Qatar, and other Gulf countries with high solar energy potential.
                      </p>
                    </div>
                    <div className="h-96 flex items-center justify-center overflow-hidden rounded-xl shadow-lg">
                      <Image 
                        src={solarBlockImages[solarIndex]} 
                        alt="Solar Panel Cement Blocks for GCC Solar Projects and Renewable Energy Installations" 
                        width={500} 
                        height={400} 
                        className="object-cover w-full h-full transition-all duration-700" 
                      />
                    </div>
                  </div>
                )}

                {activeTab === "glass-panels" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-6">Premium Glass Panels for Solar Applications</h3>
                      <p className="text-lg text-gray-600 mb-4">
                        Our high-performance glass panels are specifically designed for solar energy applications in the GCC&apos;s harsh climate. They offer exceptional transparency, durability, and thermal resistance for maximum energy efficiency.
                      </p>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="text-gray-600 space-y-2 mb-6">
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> High light transmittance for maximum energy generation</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Exceptional thermal stability and heat resistance</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Anti-reflective coating for improved efficiency</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Enhanced durability against sand and dust storms</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Multiple thickness options for different applications</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Low iron content for superior clarity</li>
                      </ul>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Applications:</h4>
                      <p className="text-gray-600 mb-4">
                        Ideal for solar panel covers, photovoltaic modules, solar thermal systems, and green building applications throughout the GCC region. Suitable for both residential and commercial solar projects in extreme climate conditions.
                      </p>
                    </div>
                    <div className="h-96 flex items-center justify-center overflow-hidden rounded-xl shadow-lg">
                      <Image 
                        src={glassImages[glassIndex]} 
                        alt="Premium Glass Panels for Solar Installations in GCC Countries" 
                        width={500} 
                        height={400} 
                        className="object-cover w-full h-full transition-all duration-700" 
                      />
                    </div>
                  </div>
                )}

                {activeTab === "precast" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-6">Precast Concrete Panels</h3>
                      <p className="text-lg text-gray-600 mb-4">
                        Our precast concrete panels offer superior quality, durability, and faster construction times for projects across the GCC. Manufactured under controlled conditions, they ensure consistent quality and performance in the region&apos;s challenging environment.
                      </p>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="text-gray-600 space-y-2 mb-6">
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> High strength and durability for long-lasting structures</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Excellent thermal mass for energy efficiency</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Fire resistance and weather protection</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Reduced construction time and labor costs</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Consistent quality through controlled manufacturing</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Custom designs and finishes available</li>
                      </ul>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Applications:</h4>
                      <p className="text-gray-600 mb-4">
                        Ideal for residential, commercial, and infrastructure projects across the GCC. Suitable for wall systems, flooring, architectural cladding, and structural components in Saudi Arabia, UAE, Qatar, Oman, Kuwait, and Bahrain.
                      </p>
                    </div>
                    <div className="h-96 flex items-center justify-center overflow-hidden rounded-xl shadow-lg">
                      <Image 
                        src="/products/precast-concrete.jpg" 
                        alt="Precast Concrete Panels for Construction Projects in GCC Countries" 
                        width={500} 
                        height={400} 
                        className="object-cover w-full h-full" 
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Location-specific content for GCC SEO */}
            <div className="mt-20 bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Serving All GCC Countries</h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
                {[
                  { name: "Bahrain", code: "BH" },
                  { name: "Saudi Arabia", code: "SA" },
                  { name: "UAE", code: "AE" },
                  { name: "Qatar", code: "QA" },
                  { name: "Oman", code: "OM" },
                  { name: "Kuwait", code: "KW" }
                ].map((country) => (
                  <div key={country.code} className="bg-white p-4 rounded-lg shadow">
                    <span className="font-bold text-blue-800">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 bg-blue-800 text-white text-center rounded-lg mx-4 my-16 shadow-lg">
          <h3 className="text-3xl font-bold mb-4">High-Quality Construction Materials Across GCC</h3>
          <p className="text-lg mb-6">Durable, weather-resistant, and solar-optimized products for your projects in Bahrain, Saudi Arabia, UAE, Qatar, Oman, and Kuwait.</p>
          <button onClick={() => scrollToSection("contact")} className="bg-yellow-500 hover:bg-yellow-400 text-white px-8 py-3 rounded-lg font-semibold transition">
            Request a Quote
          </button>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-32 bg-gradient-to-l from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Product Gallery</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our premium range of construction materials and installations in high-resolution images from projects across the GCC region.
              </p>
            </div>

            <div className="flex overflow-x-auto gap-6 scrollbar-hide py-4">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="min-w-[300px] rounded-xl shadow-lg overflow-hidden flex-shrink-0"
                >
                  <Image
                    src={`/gallery/img-${idx + 1}.jpg`}
                    alt={`Zodiac Enterprise Construction Materials Project ${idx + 1} in GCC Countries`}
                    width={300}
                    height={256}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About Zodiac Enterprise</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Zodiac Enterprise, a New Zealand company operating in Bahrain, upholds the highest standards in construction materials. We specialize in wall putty, drywall panels, cement blocks, precast concrete, and glass panels for solar installations across the GCC.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With our strategic location in Bahrain, we efficiently serve all GCC countries including Saudi Arabia, UAE, Qatar, Oman, and Kuwait with premium construction materials that meet the region&apos;s specific climate and construction requirements. Our products are engineered to perform exceptionally well in high temperatures, humidity, and harsh environmental conditions typical of the Arabian Peninsula.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team of experts understands the unique challenges of construction in the GCC and provides technical support and guidance to ensure the success of your projects. We work with architects, contractors, and developers to deliver solutions that meet international quality standards while being perfectly suited to local conditions.
              </p>

              {/* Feature Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-center">
                <div>
                  <Image src="/icons/quality.jpeg" width={64} height={64} alt="Premium Quality Construction Materials GCC" className="mx-auto mb-4" />
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Premium Quality</h4>
                  <p className="text-gray-800">Top-notch construction materials trusted across GCC.</p>
                </div>
                <div>
                  <Image src="/icons/delivery.png" width={64} height={64} alt="Fast Delivery GCC Countries" className="mx-auto mb-4" />
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Fast Delivery</h4>
                  <p className="text-gray-800">Reliable and on-time delivery for your projects.</p>
                </div>
                <div>
                  <Image src="/icons/support.png" width={64} height={64} alt="Customer Support GCC Construction" className="mx-auto mb-4" />
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Customer Support</h4>
                  <p className="text-gray-800">Professional assistance from inquiry to delivery.</p>
                </div>
              </div>
            </div>

            {/* Carousel Image */}
            <div className="relative w-full h-80 sm:h-96 md:h-[400px] lg:h-[450px] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={productsCarousel[currentSlide]}
                alt="Zodiac Enterprise Construction Materials Bahrain GCC"
                fill
                style={{ objectFit: "cover" }}
                className="transition-all duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Reach out to Zodiac Enterprise for inquiries, quotes, or partnership opportunities across GCC countries. Our experts are ready to assist you with your construction material needs.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <form 
                onSubmit={handleSubmit} 
                className="bg-white shadow-lg rounded-xl p-8 space-y-4 border border-gray-300"
              >
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  required 
                />
                <input 
                  type="text" 
                  placeholder="Company Name" 
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <select className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Country</option>
                  <option value="BH">Bahrain</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="QA">Qatar</option>
                  <option value="OM">Oman</option>
                  <option value="KW">Kuwait</option>
                </select>
                <select className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Product Interest</option>
                  <option value="wall-putty">Wall Putty</option>
                  <option value="drywall">Drywall Panels</option>
                  <option value="solar-blocks">Solar Cement Blocks</option>
                  <option value="glass-panels">Glass Panels</option>
                  <option value="precast">Precast Concrete</option>
                </select>
                <textarea 
                  placeholder="Message" 
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  required 
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors w-full"
                >
                  Send Message
                </button>
                {formSent && <p className="text-green-600 mt-3">Thank you! Your message has been sent.</p>}
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <h4 className="font-bold text-lg mb-4">Zodiac Enterprise</h4>
              <p className="mb-2">NZ-Bahrain | 123 Gulf Road, Manama, Bahrain</p>
              <p className="mb-2">Email: info@zodiacenterprise.com</p>
              <p className="mb-2">Phone: +973 3792 0204</p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection("home")} className="hover:text-blue-200 transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection("products")} className="hover:text-blue-200 transition-colors">Products</button></li>
                <li><button onClick={() => scrollToSection("gallery")} className="hover:text-blue-200 transition-colors">Gallery</button></li>
                <li><button onClick={() => scrollToSection("about")} className="hover:text-blue-200 transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection("contact")} className="hover:text-blue-200 transition-colors">Contact</button></li>
              </ul>
            </div>

            {/* Services/Other Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li><span className="hover:text-blue-200 cursor-pointer">Project Managment</span></li>
                <li><span className="hover:text-blue-200 cursor-pointer">Sales and Services</span></li>
                <li><span className="hover:text-blue-200 cursor-pointer">Maintenance</span></li>
                <li><span className="hover:text-blue-200 cursor-pointer">Consultation</span></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {/* Facebook Icon */}
                <a
                  href="https://www.facebook.com/ZodiacEnterprise" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                  className="bg-white p-2 rounded-full hover:bg-blue-500 transition-colors duration-200"
                >
                  <FaFacebookF className="w-5 h-5 text-blue-800" />
                </a>

                {/* Twitter (X) Icon */}
                <a
                  href="https://www.twitter.com/ZodiacEnterprise"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Twitter profile"
                  className="bg-white p-2 rounded-full hover:bg-black transition-colors duration-200"
                >
                  <FaXTwitter className="w-5 h-5 text-blue-800" />
                </a>

                {/* LinkedIn Icon */}
                <a
                  href="https://www.linkedin.com/company/zodiac-enterprise"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our LinkedIn page"
                  className="bg-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
                >
                  <FaLinkedinIn className="w-5 h-5 text-blue-800" />
                </a>

                {/* Instagram Icon */}
                <a
                  href="https://www.instagram.com/ZodiacEnterprise"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram profile"
                  className="bg-white p-2 rounded-full hover:bg-pink-600 transition-colors duration-200"
                >
                  <FaInstagram className="w-5 h-5 text-blue-800" />
                </a>
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-6">
                <h5 className="font-semibold mb-2">Stay Updated</h5>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="px-3 py-2 text-gray-800 rounded-l focus:outline-none flex-1 text-sm"
                  />
                  <button className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700 transition-colors text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-sm mt-8 text-gray-200 pt-6 border-t border-blue-700">
            © {new Date().getFullYear()} Zodiac Enterprise. All Rights Reserved. | 
            Serving GCC Countries: Bahrain, Saudi Arabia, UAE, Qatar, Oman, Kuwait
          </div>
        </footer>
      </div>
    </>
  );
}