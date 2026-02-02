'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="py-20 bg-starcl-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Craftsmanship"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-starcl-gold" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-starcl-gold" />
          </div>

          {/* Content Side */}
          <div>
            <p className="text-starcl-gold text-sm tracking-[0.3em] uppercase mb-2">
              Our Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Crafted for the
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-starcl-gold to-starcl-secondary">
                Extraordinary
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              At Starcl, we believe that every step should be a statement. Our luxury high heels are meticulously crafted by skilled artisans using the finest Italian leathers and materials. Each pair is a testament to our commitment to excellence, designed for the sophisticated woman who demands both style and comfort.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-starcl-gold rounded-full mt-2" />
                <div>
                  <h4 className="font-serif font-bold mb-1">Premium Materials</h4>
                  <p className="text-gray-500 text-sm">100% Italian leather</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-starcl-gold rounded-full mt-2" />
                <div>
                  <h4 className="font-serif font-bold mb-1">Master Craftsmanship</h4>
                  <p className="text-gray-500 text-sm">Handmade in Italy</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-starcl-gold rounded-full mt-2" />
                <div>
                  <h4 className="font-serif font-bold mb-1">Global Shipping</h4>
                  <p className="text-gray-500 text-sm">Worldwide delivery</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-starcl-gold rounded-full mt-2" />
                <div>
                  <h4 className="font-serif font-bold mb-1">Secure Payment</h4>
                  <p className="text-gray-500 text-sm">Multiple payment options</p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3 border border-starcl-gold text-starcl-gold hover:bg-starcl-gold hover:text-starcl-black transition-all duration-300 uppercase tracking-wider font-medium"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
