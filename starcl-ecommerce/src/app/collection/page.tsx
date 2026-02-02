'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Search, Filter, Heart } from 'lucide-react'

// Sample product data
const products = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Starcl Signature ${i + 1}`,
  price: 499 + (i * 20),
  cnyPrice: 3500 + (i * 100),
  image: `https://images.unsplash.com/photo-${[
    '1543163521-1bf539c55dd2',
    '1562634029-54e1a266f77c',
    '1575537302964-96cd47c06b1b',
    '1491553895911-0055eca6402d',
    '1560769629-975ec94e6a86',
  ][i % 5]}?w=600&q=80`,
  tag: i < 4 ? ['Bestseller', 'New', 'Limited', 'Exclusive'][i] : undefined,
}))

export default function CollectionPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  return (
    <div className="min-h-screen bg-starcl-cream">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-b from-starcl-black/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-starcl-black mb-4">
            Our Collection
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our exquisite range of {products.length} luxury high heels, each crafted with precision and passion.
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search our collection..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-b-2 border-gray-200 bg-transparent focus:border-starcl-primary focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border-b-2 border-gray-200 bg-transparent py-2 pr-8 focus:border-starcl-primary focus:outline-none"
              >
                <option value="all">All Categories</option>
                <option value="stilettos">Stilettos</option>
                <option value="platforms">Platforms</option>
                <option value="wedges">Wedges</option>
                <option value="boots">Booties</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-sm mb-6">
            Showing {filteredProducts.length} products
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group card-hover bg-white rounded-lg overflow-hidden"
              >
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
                    width={600}
                    height={800}
                    className="w-full h-full object-cover product-image-hover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-serif font-bold text-starcl-black mb-2 group-hover:text-starcl-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">Italian Leather • Handcrafted</p>
                  <span className="text-xl font-bold text-starcl-primary">
                    ${product.price}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No products found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
