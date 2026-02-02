'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-starcl-black/90 via-starcl-black/70 to-transparent z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1920&q=80)',
        }}
      />

      {/* Animated Background Elements */}
      <div className={`absolute inset-0 z-10 opacity-20 ${
        isLoaded ? 'animate-fade-in' : ''
      }`}>
        <div className="absolute top-20 left-10 w-64 h-64 bg-starcl-gold/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-starcl-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className={`relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
        isLoaded ? 'animate-slide-up' : 'opacity-0'
      }`}>
        <div className="max-w-2xl">
          {/* Brand Tagline */}
          <p className="text-starcl-gold text-sm tracking-[0.3em] uppercase mb-4">
            Since 2024
          </p>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Walk in
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-starcl-gold to-starcl-primary">
              Elegance
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg">
            Discover our exquisite collection of luxury high heels, crafted for the modern sophisticate who demands nothing but perfection.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/collection"
              className="btn-luxury text-center"
            >
              Explore Collection
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 border-2 border-white text-white font-serif tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-starcl-black text-center"
            >
              Our Story
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-serif font-bold text-starcl-gold">50+</p>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Designs</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-starcl-gold">Global</p>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Shipping</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-starcl-gold">100%</p>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Luxury</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
