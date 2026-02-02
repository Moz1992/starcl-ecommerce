'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShoppingBag, Heart } from 'lucide-react'

// Sample product data - will be replaced with actual product data
const products = [
  {
    id: 1,
    name: 'Classic Red Sole',
    price: 599,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80',
    tag: 'Bestseller'
  },
  {
    id: 2,
    name: 'Midnight Black',
    price: 549,
    image: 'https://images.unsplash.com/photo-1562634029-54e1a266f77c?w=600&q=80',
    tag: 'New'
  },
  {
    id: 3,
    name: 'Pearl White',
    price: 629,
    image: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=600&q=80',
    tag: 'Limited'
  },
  {
    id: 4,
    name: 'Gold Edition',
    price: 799,
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80',
    tag: 'Exclusive'
  }
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-starcl-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-starcl-primary text-sm tracking-[0.3em] uppercase mb-2">
            Handcrafted Excellence
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-starcl-black mb-4">
            Featured Collection
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-starcl-gold to-starcl-primary mx-auto" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className={`group card-hover bg-white rounded-lg overflow-hidden ${
                index >= 2 ? 'hidden lg:block' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                {product.tag && (
                  <span className="absolute top-4 left-4 z-10 bg-starcl-primary text-white text-xs px-3 py-1 uppercase tracking-wider">
                    {product.tag}
                  </span>
                )}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-white rounded-full shadow-lg hover:bg-starcl-gold hover:text-white transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover product-image-hover"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-serif font-bold text-starcl-black mb-2 group-hover:text-starcl-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">Italian Leather • Handcrafted</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-starcl-primary">
                    ${product.price}
                  </span>
                  <button className="p-2 bg-starcl-black text-white rounded-full hover:bg-starcl-primary transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/collection"
            className="inline-flex items-center gap-2 text-starcl-primary font-medium tracking-wide hover:text-starcl-gold transition-colors group"
          >
            View All Collection
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
