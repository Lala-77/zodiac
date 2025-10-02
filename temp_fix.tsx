        {/* Product Highlights Section - UPDATED */}
        <section className="py-16 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Product Highlights
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our premium construction solutions featuring innovative glass technology and solar-ready materials for GCC projects.
              </p>
            </div>

            {/* Fancy Scrolling Product Showcase */}
            <div className="relative overflow-hidden mb-12">
              <div className="flex space-x-6 animate-scroll hover:pause">
                {[...glassImages, ...glassImages].map((src, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-80 h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Image
                      src={src}
                      alt={`Product highlight ${index + 1}`}
                      width={320}
                      height={256}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              
              {/* Gradient overlays for smooth edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
            </div>

            {/* Product Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🏗️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">GCC Climate Optimized</h3>
                <p className="text-gray-600">Materials engineered for extreme heat, humidity, and sand conditions</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Solar Ready</h3>
                <p className="text-gray-600">Specialized blocks and glass panels designed for solar energy projects</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border border-yellow-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🚚</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Fast GCC Delivery</h3>
                <p className="text-gray-600">Quick supply chain across Bahrain, Saudi Arabia, UAE, Qatar, Oman, Kuwait</p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/gallery">
                <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Explore Full Product Gallery
                </button>
              </Link>
            </div>
          </div>
        </section>
