"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import MobileCallButton from './components/MobileCallButton';
import SEOHead from './components/SEOHead';
import { COMPANY_INFO, GCC_COUNTRIES, PRODUCTS } from './lib/constants';

import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaXmark,
  FaBars,
} from "react-icons/fa6";

export default function Home() {
  const [formSent, setFormSent] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("wall-putty");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Image arrays
  const productsCarousel = [
    "/products/glass2.webp",
    "/products/glass3.webp", 
    "/products/glass5.webp",
  ];

  const glassImages = [
    "/products/glass1.webp",
    "/products/glass2.webp",
    "/products/glass3.webp",
    "/products/glass4.webp",
    "/products/glass5.webp",
  ];

  const solarBlockImages = [
    "/products/solar-blocks1.webp",
    "/products/solar-blocks2.webp",
    "/products/solar-blocks3.webp",
  ];

  const [glassIndex, setGlassIndex] = useState(0);
  const [solarIndex, setSolarIndex] = useState(0);

  // Effects
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
  }, [glassImages.length, solarBlockImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productsCarousel.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [productsCarousel.length]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      <SEOHead page="Homepage" />
      
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
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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
                <Link href="/contact" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                  Contact
                </Link>
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
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors text-center"
                >
                  Call {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-full h-64 sm:h-80 md:h-[80vh] relative rounded-xl md:rounded-2xl shadow-lg overflow-hidden">
                <Image
                  src="/hero-banner.webp"
                  alt="Premium Construction Materials in GCC Countries - Wall Putty, Drywall Panels, Cement Blocks, Precast Concrete, Solar Glass"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Add the rest of your original homepage sections here */}
        {/* GCC Countries Banner, Products Section, Contact Section, etc. */}
        
        <Footer />
        
        {/* Back to top */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="fixed right-4 bottom-6 z-40 bg-yellow-500 hover:bg-yellow-400 text-white p-3 rounded-full shadow-lg">
          ↑
        </button>

        {/* Mobile Call Button */}
        <MobileCallButton />
      </div>
    </>
  );
}
