// src/app/glass-supply/page.tsx

export default function GlassSupplyPage() {
  return (
    <main className="p-8 max-w-5xl mx-auto">
      {/* Page Header */}
      <h1 className="text-4xl font-bold mb-6 text-center">
        Glass Supply for Commercial Buildings
      </h1>

      {/* Description */}
      <p className="text-lg mb-8 text-center">
        Zodiac Enterprise Bahrain provides high-quality glass solutions for commercial and architectural projects. 
        We offer a wide range of glass types to meet your building and design requirements.
      </p>

      {/* Product List */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Clear Float Glass</h2>
          <p className="mb-2">Standard clear glass for partitions, windows, and facades.</p>
        </div>

        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Tempered / Toughened Glass</h2>
          <p className="mb-2">High-strength safety glass suitable for heavy-duty installations.</p>
        </div>

        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Laminated Safety Glass</h2>
          <p className="mb-2">Enhanced security and sound insulation for commercial spaces.</p>
        </div>

        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Double-Glazed Glass</h2>
          <p className="mb-2">Energy-efficient glass for temperature control and noise reduction.</p>
        </div>

        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Glass Façade Systems</h2>
          <p className="mb-2">Modern façade solutions for commercial buildings and office towers.</p>
        </div>

        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Office Partitions</h2>
          <p className="mb-2">Custom glass partitions for modern office layouts.</p>
        </div>
      </section>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <a 
          href="/contact" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Enquire Now
        </a>
      </div>
    </main>
  )
}

