import Image from 'next/image';
import Link from 'next/link';
import * as constants from '../lib/constants';
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';

const { COMPANY_INFO, SOCIAL_LINKS, PRODUCTS, GCC_COUNTRIES } = constants;
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Dark Night Sky Background */}
      <div className="absolute inset-0 bg-black">
        {/* Subtle Stars */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: `${Math.random() * 1.5 + 0.5}px`,
              height: `${Math.random() * 1.5 + 0.5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Animated Planes from Bahrain to GCC Countries */}
      <div className="absolute inset-0 opacity-40">
        {/* Bahrain Center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-6 bg-yellow-500 rounded-full animate-pulse shadow-2xl shadow-yellow-500/30">
            <div className="w-2 h-2 bg-yellow-300 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 h-12 border border-yellow-500/30 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Plane to Saudi Arabia */}
        <div className="absolute top-1/2 left-1/2 animate-fly-ksa">
          <div className="w-4 h-4 text-blue-400">✈️</div>
          <div className="absolute top-2 left-4 w-32 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
        </div>

        {/* Plane to UAE */}
        <div className="absolute top-1/2 left-1/2 animate-fly-uae">
          <div className="w-4 h-4 text-green-400">✈️</div>
          <div className="absolute top-2 left-4 w-28 h-0.5 bg-gradient-to-r from-green-400 to-transparent"></div>
        </div>

        {/* Plane to Qatar */}
        <div className="absolute top-1/2 left-1/2 animate-fly-qatar">
          <div className="w-4 h-4 text-purple-400">✈️</div>
          <div className="absolute top-2 left-4 w-24 h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
        </div>

        {/* Plane to Kuwait */}
        <div className="absolute top-1/2 left-1/2 animate-fly-kuwait">
          <div className="w-4 h-4 text-red-400">✈️</div>
          <div className="absolute top-2 left-4 w-20 h-0.5 bg-gradient-to-r from-red-400 to-transparent"></div>
        </div>

        {/* Plane to Oman */}
        <div className="absolute top-1/2 left-1/2 animate-fly-oman">
          <div className="w-4 h-4 text-pink-400">✈️</div>
          <div className="absolute top-2 left-4 w-26 h-0.5 bg-gradient-to-r from-pink-400 to-transparent"></div>
        </div>

        {/* Destination Points */}
        <div className="absolute top-1/4 left-3/4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 left-4/5 w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-2/3 left-3/4 w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center mb-6">
              <Image 
                src="/logo.webp" 
                alt="Zodiac Enterprise - Premium Construction Materials Supplier in GCC"
                width={200}
                height={60}
                className="object-contain"
                priority
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
              Leading supplier of premium construction materials across Bahrain, Saudi Arabia, UAE, Qatar, Oman, and Kuwait. Quality certified for GCC climate conditions.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-green-900/30 px-3 py-2 rounded-lg border border-green-700/30">
                <span className="text-green-400">✓</span>
                <span className="text-sm font-medium text-white">ISO 9001</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-900/30 px-3 py-2 rounded-lg border border-blue-700/30">
                <span className="text-blue-400">🏗️</span>
                <span className="text-sm font-medium text-white">Quality Certified</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/zodiacenterprise"
                aria-label="Follow us on Facebook"
                className="w-12 h-12 bg-white/10 hover:bg-blue-600 border border-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-xl text-white" />
              </a>
              <a 
                href="https://twitter.com/zodiacenterprise"
                aria-label="Follow us on Twitter"
                className="w-12 h-12 bg-white/10 hover:bg-blue-400 border border-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="text-xl text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/company/zodiacenterprise"
                aria-label="Follow us on LinkedIn"
                className="w-12 h-12 bg-white/10 hover:bg-blue-700 border border-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-700/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-xl text-white" />
              </a>
              <a 
                href="https://www.instagram.com/zodiacenterprise"
                aria-label="Follow us on Instagram"
                className="w-12 h-12 bg-white/10 hover:bg-pink-600 border border-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Products', href: '/products' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
              Our Products
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></span>
            </h3>
            <ul className="space-y-3">
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <Link 
                    href={`/products#${product.id}`}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></span>
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & GCC Coverage */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
              Contact Bahrain
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500"></span>
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <span className="text-blue-300">📞</span>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Phone</p>
                  <a 
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-white font-semibold hover:text-blue-300 transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                  <span className="text-green-300">📧</span>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-white font-semibold hover:text-green-300 transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                  <span className="text-yellow-300">📍</span>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Address</p>
                  <p className="text-white font-semibold">{COMPANY_INFO.address}</p>
                </div>
              </div>
            </div>

            {/* GCC Countries */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-gray-300">Serving GCC</h4>
              <div className="flex flex-wrap gap-2">
                {GCC_COUNTRIES.map((country) => (
                  <span 
                    key={country.code}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:bg-white/10 transition-colors"
                  >
                    {country.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved. | Premium Construction Materials Supplier
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}