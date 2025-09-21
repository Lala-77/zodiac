"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa6";

export default function Home() {
  const [formSent, setFormSent] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("wall-putty");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // simple UI feedback — integrate with your API/endpoint as needed
    setFormSent(true);
    setTimeout(() => setFormSent(false), 3000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const navHeight = 80;
    if (element) {
      window.scrollTo({
        top: element.offsetTop - navHeight,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <Head>
        <title>
          Zodiac Enterprise - Premium Construction Materials Supplier in GCC |
          Bahrain
        </title>
        <meta
          name="title"
          content="Zodiac Enterprise - Premium Construction Materials Supplier in GCC | Bahrain"
        />
        <meta
          name="description"
          content="New Zealand's Zodiac Enterprise in Bahrain supplies premium wall putty, drywall panels, cement blocks, precast concrete, and specialized glass panels for solar installations across the GCC. Get quality construction materials delivered to Bahrain, Saudi Arabia, UAE, Qatar, Oman, Kuwait."
        />
        <link rel="canonical" href="https://www.zodiacenterprise.com" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.zodiacenterprise.com/" />
        <meta
          property="og:title"
          content="Zodiac Enterprise - Premium Construction Materials Supplier in GCC"
        />
        <meta
          property="og:description"
          content="Supplier of premium construction materials including wall putty, drywall panels, cement blocks, precast concrete and glass panels for solar installations across GCC countries."
        />
        <meta property="og:image" content="https://www.zodiacenterprise.com/og-image.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.zodiacenterprise.com/" />
        <meta
          property="twitter:title"
          content="Zodiac Enterprise - Premium Construction Materials Supplier in GCC"
        />
        <meta
          property="twitter:description"
          content="Supplier of premium construction materials including wall putty, drywall panels, cement blocks, precast concrete and glass panels for solar installations across GCC countries."
        />
        <meta property="twitter:image" content="https://www.zodiacenterprise.com/twitter-image.jpg" />
        <meta name="geo.region" content="BH" />
        <meta name="geo.placename" content="Manama" />
        <meta name="geo.position" content="26.2235;50.5876" />
        <meta name="ICBM" content="26.2235, 50.5876" />
        <meta
          name="keywords"
          content="construction materials Bahrain, wall putty GCC, drywall panels Saudi Arabia, cement blocks UAE, solar glass panels Qatar, precast concrete panels Oman, building supplies Kuwait, zodiac enterprise Bahrain, solar panel installation materials, construction supplies Dubai, Abu Dhabi construction materials, Doha building supplies, Muscat construction products, Kuwait building materials"
        />
        <meta name="author" content="Zodiac Enterprise" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="distribution" content="global" />
        {/* Replace with your real verification tokens */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ConstructionBusiness",
              name: "Zodiac Enterprise",
              description:
                "Premium supplier of construction materials including wall putty, drywall panels, cement blocks, precast concrete and glass panels for solar installations across GCC countries.",
              url: "https://www.zodiacenterprise.com",
              telephone: "+973-1234-5678", // replace with real
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Gulf Road",
                addressLocality: "Manama",
                addressCountry: "Bahrain",
                postalCode: "12345",
              },
              areaServed: ["BH", "SA", "AE", "QA", "OM", "KW"],
              sameAs: [
                "https://www.facebook.com/zodiacenterprise",
                "https://www.linkedin.com/company/zodiacenterprise",
                "https://www.instagram.com/zodiacenterprise",
              ],
            }),
          }}
        />
      </Head>

      <div className="bg-white font-sans">
        {/* Navigation */}
        <nav
          className={`bg-white fixed w-full top-0 z-50 transition-all duration-300 ${
            isScrolled ? "shadow-lg" : ""
          }`}
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 md:h-20">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  {/* Use Image for logo for performance */}
                  <Image
                    src="/logo.png"
                    alt="Zodiac Enterprise Logo - Premium Construction Materials Supplier in GCC Countries"
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
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {["home", "products", "gallery", "about", "contact"].map(
                    (section) => (
                      <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium transition-colors"
                      >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </button>
                    )
                  )}
                </div>
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-gray-900 focus:outline-none"
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                >
                  {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {["home", "products", "gallery", "about", "contact"].map(
                  (section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="bg-gradient-to-br from-blue-800 to-blue-400 min-h-screen flex items-center pt-16 md:pt-20"
          role="region"
          aria-label="Hero"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-white order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Premium Construction Materials for the{" "}
                <span className="text-yellow-400">GCC Region</span>
              </h1>
              <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100 leading-relaxed">
                Zodiac Enterprise is a New Zealand company operating in Bahrain,
                delivering the highest standards in wall putty, drywall panels,
                cement blocks, precast concrete, and specialized glass panels
                for solar installations across the GCC.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("products")}
                  className="bg-yellow-500 hover:bg-yellow-400 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors shadow-lg"
                >
                  View Products
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors"
                >
                  Get Quote
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              {/* Hero image as responsive Image */}
              <div className="w-full h-64 sm:h-80 md:h-[80vh] relative rounded-xl md:rounded-2xl shadow-lg overflow-hidden">
                <Image
                  src="/hero-banner.jpg"
                  alt="Premium Construction Materials in GCC Countries - Wall Putty, Drywall Panels, Cement Blocks, Precast Concrete, Solar Glass"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section
          id="products"
          className="py-16 md:py-32 bg-gradient-to-r from-gray-50 to-gray-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Premium Products
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                We supply the highest quality construction materials across the
                GCC region including Bahrain, Saudi Arabia, UAE, Qatar, Oman,
                and Kuwait. Our products meet the highest international standards
                for durability and performance in extreme climate conditions.
              </p>
            </div>

            {/* Product Tabs */}
            <div className="mb-8 md:mb-12">
              <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-200">
                {[
                  { id: "wall-putty", label: "Wall Putty" },
                  { id: "drywall", label: "Drywall Panels" },
                  { id: "solar-blocks", label: "Solar Cement Blocks" },
                  { id: "glass-panels", label: "Glass Panels" },
                  { id: "precast", label: "Precast Concrete" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-3 px-4 md:py-4 md:px-6 font-medium text-base md:text-lg whitespace-nowrap ${
                      activeTab === tab.id
                        ? "border-b-2 border-blue-600 text-blue-600"
                        : "text-gray-600 hover:text-blue-500"
                    }`}
                    aria-pressed={activeTab === tab.id}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="py-6 md:py-8">
                {activeTab === "wall-putty" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                        Premium Wall Putty for GCC Construction
                      </h3>
                      <p className="text-base md:text-lg text-gray-600 mb-4">
                        Our high-quality wall putty is specially formulated to
                        withstand the extreme climate conditions of the GCC
                        region. It provides excellent adhesion, water resistance,
                        and durability for both interior and exterior
                        applications.
                      </p>
                      <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                        Key Features:
                      </h4>
                      <ul className="text-gray-600 space-y-2 mb-4 md:mb-6">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Superior
                          whiteness and smooth finish
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Excellent
                          water resistance and weatherproofing
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> High
                          adhesive strength for all masonry surfaces
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Crack
                          resistance and durability in high temperatures
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Low
                          consumption and easy application
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          Environmentally friendly and non-toxic formulation
                        </li>
                      </ul>
                      <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                        Applications:
                      </h4>
                      <p className="text-gray-600">
                        Ideal for interior and exterior walls in residential,
                        commercial, and industrial buildings across Bahrain,
                        Saudi Arabia, UAE, Qatar, Oman, and Kuwait. Suitable
                        for concrete, cement plaster, and other masonry
                        surfaces.
                      </p>
                    </div>
                    <div className="h-64 md:h-96 flex items-center justify-center overflow-hidden rounded-xl shadow-lg bg-white">
                      <Image
                        src="/products/wall-putty1.png"
                        alt="Premium Wall Putty for Construction Projects in GCC Countries"
                        width={600}
                        height={600}
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}

                {activeTab === "drywall" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                        High-Performance Drywall Panels
                      </h3>
                      <p className="text-base md:text-lg text-gray-600 mb-4">
                        Our drywall panels are engineered for the specific needs
                        of GCC construction projects. They offer exceptional fire
                        resistance, moisture control, and acoustic insulation
                        properties perfect for the region's climate and building
                        requirements.
                      </p>
                      <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                        Key Features:
                      </h4>
                      <ul className="text-gray-600 space-y-2 mb-4 md:mb-6">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Enhanced
                          fire resistance (Type X drywall)
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Moisture
                          and mold resistance for humid climates
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Superior
                          sound insulation properties
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> High
                          durability and impact resistance
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Easy
                          installation and finishing
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Environmentally
                          friendly manufacturing
                        </li>
                      </ul>
                      <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                        Applications:
                      </h4>
                      <p className="text-gray-600">
                        Perfect for interior walls and ceilings in residential,
                        commercial, and hospitality projects throughout the GCC.
                        Ideal for creating partition walls, false ceilings, and
                        other interior applications in Dubai, Abu Dhabi, Doha,
                        Riyadh, Manama, Muscat, and Kuwait City.
                      </p>
                    </div>
                    <div className="h-64 md:h-96 flex items-center justify-center overflow-hidden rounded-xl shadow-lg">
                      <Image
                        src="/products/drywall-putty.png"
                        alt="High-Quality Drywall Panels for GCC Construction Projects"
                        width={800}
                        height={600}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                )}

                {activeTab === "solar-blocks" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                        Solar Panel Cement Blocks
                      </h3>
                      <p className="text-base md:text-lg text-gray-600 mb-4">
                        Our specialized cement blocks are engineered specifically
                        for solar panel installations in the GCC region. These
                        high-strength blocks provide secure mounting for solar
                        arrays while withstanding extreme weather conditions.
                      </p>
                      <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                        Key Features:
                      </h4>
                      <ul className="text-gray-600 space-y-2 mb-4 md:mb-6">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> High
                          compressive strength for secure mounting
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Weather
                          and UV resistant formulation
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Pre-designed
                          mounting points for easy installation
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Thermal
                          stability in extreme temperatures
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Corrosion-resistant
                          reinforcement
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Custom
                          sizes available for different solar panel types
                        </li>
                      </ul>
                      <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                        Applications:
                      </h4>
                      <p className="text-gray-600">
                        Specifically designed for solar farm installations,
                        rooftop solar projects, and commercial solar applications
                        across the GCC. Ideal for large-scale renewable energy
                        projects in Saudi Arabia, UAE, Qatar, and other Gulf
                        countries with high solar energy potential.
                      </p>
                    </div>
                    <div className="h-64 md:h-96 flex items-center justify-center overflow-hidden rounded-xl shadow-lg">
                      <Image
                        src={solarBlockImages[solarIndex]}
                        alt="Solar Panel Cement Blocks for GCC Solar Projects and Renewable Energy Installations"
                        width={900}
                        height={600}
                        className="object-cover w-full h-full transition-all duration-700"
                      />
                    </div>
                  </div>
                )}

                {activeTab === "glass-panels" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                        Premium Glass Panels for Solar Applications
                      </h3>
                      <p className="text-base md:text-lg text-gray-600 mb-4">
                        Our high-performance glass panels are specifically
                        designed for solar energy applications in the GCC's harsh
                        climate. They offer exceptional transparency, durability,
                        and thermal resistance for maximum energy efficiency.
                      </p>
                      <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                        Key Features:
                      </h4>
                      <ul className="text-gray-600 space-y-2 mb-4 md:mb-6">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> High
                          light transmittance for maximum energy generation
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Exceptional
                          thermal stability and heat resistance
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Anti-reflective
                          coating for improved efficiency
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Enhanced
                          durability against sand and dust storms
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Multiple
                          thickness options for different applications
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Low iron
                          content for superior clarity
                        </li>
                      </ul>
                      <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                        Applications:
                      </h4>
                      <p className="text-gray-600">
                        Ideal for solar panel covers, photovoltaic modules, solar
                        thermal systems, and green building applications
                        throughout the GCC region. Suitable for both residential
                        and commercial solar projects in extreme climate
                        conditions.
                      </p>
                    </div>
                    <div className="h-64 md:h-96 flex items-center justify-center overflow-hidden rounded-xl shadow-lg">
                      <Image
                        src={glassImages[glassIndex]}
                        alt="Premium Glass Panels for Solar Installations in GCC Countries"
                        width={900}
                        height={600}
                        className="object-cover w-full h-full transition-all duration-700"
                      />
                    </div>
                  </div>
                )}

                {activeTab === "precast" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                        Precast Concrete Panels
                      </h3>
                      <p className="text-base md:text-lg text-gray-600 mb-4">
                        Our precast concrete panels offer superior quality,
                        durability, and faster construction times for projects
                        across the GCC. Manufactured under controlled conditions,
                        they ensure consistent quality and performance in the
                        region's challenging environment.
                      </p>
                      <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                        Key Features:
                      </h4>
                      <ul className="text-gray-600 space-y-2 mb-4 md:mb-6">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> High
                          strength and durability for long-lasting structures
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Excellent
                          thermal mass for energy efficiency
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Fire
                          resistance and weather protection
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Reduced
                          construction time and labor costs
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Consistent
                          quality through controlled manufacturing
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Custom
                          designs and finishes available
                        </li>
                      </ul>
                      <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                        Applications:
                      </h4>
                      <p className="text-gray-600">
                        Ideal for residential, commercial, and infrastructure
                        projects across the GCC. Suitable for wall systems,
                        flooring, architectural cladding, and structural
                        components in Saudi Arabia, UAE, Qatar, Oman, Kuwait,
                        and Bahrain.
                      </p>
                    </div>
                    <div className="h-64 md:h-96 flex items-center justify-center overflow-hidden rounded-xl shadow-lg">
                      <Image
                        src="/products/precast-concrete.jpg"
                        alt="Precast Concrete Panels for Construction Projects in GCC Countries"
                        width={900}
                        height={600}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Location-specific content for GCC SEO */}
            <div className="mt-12 md:mt-20 bg-blue-50 p-6 md:p-8 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
                Serving All GCC Countries
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 text-center">
                {[
                  { name: "Bahrain", code: "BH" },
                  { name: "Saudi Arabia", code: "SA" },
                  { name: "UAE", code: "AE" },
                  { name: "Qatar", code: "QA" },
                  { name: "Oman", code: "OM" },
                  { name: "Kuwait", code: "KW" },
                ].map((country) => (
                  <div
                    key={country.code}
                    className="bg-white p-3 md:p-4 rounded-lg shadow text-sm md:text-base"
                  >
                    <span className="font-bold text-blue-800">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-12 md:py-20 bg-blue-800 text-white text-center rounded-lg mx-4 my-12 md:my-16 shadow-lg">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              High-Quality Construction Materials Across GCC
            </h3>
            <p className="text-base md:text-lg mb-6">
              Durable, weather-resistant, and solar-optimized products for your projects in Bahrain, Saudi Arabia, UAE, Qatar, Oman, and Kuwait.
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-yellow-500 hover:bg-yellow-400 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition"
            >
              Request a Quote
            </button>
          </div>
        </section>

        {/* Gallery Section */}
        <section
          id="gallery"
          className="py-16 md:py-32 bg-gradient-to-l from-white to-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Product Gallery
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our premium range of construction materials and installations
                in high-resolution images from projects across the GCC region.
              </p>
            </div>

            <div className="flex overflow-x-auto gap-4 md:gap-6 scrollbar-hide py-4 px-2 md:px-0">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="min-w-[250px] md:min-w-[300px] rounded-xl shadow-lg overflow-hidden flex-shrink-0"
                >
                  <Image
                    src={`/gallery/img-${idx + 1}.jpg`}
                    alt={`Zodiac Enterprise Construction Materials Project ${idx + 1} in GCC Countries`}
                    width={600}
                    height={400}
                    className="w-full h-48 md:h-64 object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-32 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                About Zodiac Enterprise
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                Zodiac Enterprise, a New Zealand company operating in Bahrain,
                upholds the highest standards in construction materials. We specialize
                in wall putty, drywall panels, cement blocks, precast concrete, and
                glass panels for solar installations across the GCC.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                With our strategic location in Bahrain, we efficiently serve all GCC countries
                including Saudi Arabia, UAE, Qatar, Oman, and Kuwait with premium construction
                materials that meet the region's specific climate and construction requirements.
                Our products are engineered to perform exceptionally well in high temperatures,
                humidity, and harsh environmental conditions typical of the Arabian Peninsula.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Our team of experts understands the unique challenges of construction in the GCC
                and provides technical support and guidance to ensure the success of your projects.
                We work with architects, contractors, and developers to deliver solutions that meet
                international quality standards while being perfectly suited to local conditions.
              </p>

              {/* Feature Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8 text-center">
                <div className="bg-white p-4 rounded-lg shadow">
                  <Image
                    src="/icons/quality.jpeg"
                    width={48}
                    height={48}
                    alt="Premium Quality Construction Materials GCC"
                    className="mx-auto mb-2 md:mb-4"
                  />
                  <h4 className="font-bold text-lg md:text-xl text-gray-900 mb-1 md:mb-2">
                    Premium Quality
                  </h4>
                  <p className="text-gray-800 text-sm md:text-base">Top-notch construction materials trusted across GCC.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <Image
                    src="/icons/delivery.png"
                    width={48}
                    height={48}
                    alt="Fast Delivery GCC Countries"
                    className="mx-auto mb-2 md:mb-4"
                  />
                  <h4 className="font-bold text-lg md:text-xl text-gray-900 mb-1 md:mb-2">Fast Delivery</h4>
                  <p className="text-gray-800 text-sm md:text-base">Reliable and on-time delivery for your projects.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <Image
                    src="/icons/support.png"
                    width={48}
                    height={48}
                    alt="Customer Support GCC Construction"
                    className="mx-auto mb-2 md:mb-4"
                  />
                  <h4 className="font-bold text-lg md:text-xl text-gray-900 mb-1 md:mb-2">Customer Support</h4>
                  <p className="text-gray-800 text-sm md:text-base">Professional assistance from inquiry to delivery.</p>
                </div>
              </div>
            </div>

            {/* Carousel Image */}
            <div className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl md:rounded-2xl shadow-lg">
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
        <section id="contact" className="py-16 md:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Reach out to Zodiac Enterprise for inquiries, quotes, or partnership opportunities across GCC countries. Our experts are ready to assist you with your construction material needs.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-xl p-6 md:p-8 space-y-4 border border-gray-300"
                aria-label="Contact form"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                  name="country"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Country</option>
                  <option value="BH">Bahrain</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="AE">UAE</option>
                  <option value="QA">Qatar</option>
                  <option value="OM">Oman</option>
                  <option value="KW">Kuwait</option>
                  <option value="Other">Other</option>
                </select>

                <select
                  name="product"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Interested In</option>
                  <option value="wall-putty">Wall Putty</option>
                  <option value="drywall">Drywall Panels</option>
                  <option value="solar-blocks">Solar Cement Blocks</option>
                  <option value="glass-panels">Glass Panels</option>
                  <option value="precast">Precast Concrete</option>
                  <option value="other">Other</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="flex items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition"
                    aria-label="Submit contact form"
                  >
                    {formSent ? "Sent ✓" : "Send Message"}
                  </button>

                  <div className="text-sm text-gray-600">
                    <p>Or call us: <a href="tel:+97312345678" className="text-blue-700 hover:underline">+973 1234 5678</a></p>
                  </div>
                </div>
              </form>

              {/* Quick contact / small map or address */}
              <div className="mt-6 text-center text-gray-700">
                <p className="mb-1">Address: 123 Gulf Road, Manama, Bahrain</p>
                <p className="text-sm">Working Hours: Sun - Thu, 8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/logo-white.png"
                alt="Zodiac Enterprise logo"
                width={180}
                height={48}
                className="mb-4"
              />
              <p className="text-sm">
                Zodiac Enterprise — Premium construction materials supplier operating from Bahrain and serving the GCC.
              </p>
              <div className="flex items-center gap-3 mt-4">
                <a href="https://www.facebook.com/zodiacenterprise" aria-label="Facebook" className="hover:text-white">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com/zodiacenterprise" aria-label="Twitter" className="hover:text-white">
                  <FaXTwitter />
                </a>
                <a href="https://www.linkedin.com/company/zodiacenterprise" aria-label="LinkedIn" className="hover:text-white">
                  <FaLinkedinIn />
                </a>
                <a href="https://www.instagram.com/zodiacenterprise" aria-label="Instagram" className="hover:text-white">
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection("home")} className="hover:underline">Home</button></li>
                <li><button onClick={() => scrollToSection("products")} className="hover:underline">Products</button></li>
                <li><button onClick={() => scrollToSection("gallery")} className="hover:underline">Gallery</button></li>
                <li><button onClick={() => scrollToSection("about")} className="hover:underline">About</button></li>
                <li><button onClick={() => scrollToSection("contact")} className="hover:underline">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <p className="text-sm">Phone: <a href="tel:+97312345678" className="hover:underline">+973 1234 5678</a></p>
              <p className="text-sm">Email: <a href="mailto:info@zodiacenterprise.com" className="hover:underline">info@zodiacenterprise.com</a></p>
              <p className="text-sm mt-4">Address: 123 Gulf Road, Manama, Bahrain</p>
            </div>
          </div>

          <div className="border-t border-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-500">
              © {new Date().getFullYear()} Zodiac Enterprise. All rights reserved.
            </div>
          </div>
        </footer>

        {/* Back to top (small floating button) */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed right-4 bottom-6 z-40 bg-yellow-500 hover:bg-yellow-400 text-white p-3 rounded-full shadow-lg"
        >
          ↑
        </button>
      </div>
    </>
  );
}
