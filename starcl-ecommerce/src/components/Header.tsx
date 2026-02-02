'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingBag, Menu, X, Search, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className={`font-serif text-3xl font-bold tracking-wider ${
              isScrolled ? 'text-starcl-primary' : 'text-white'
            }`}>
              STARCL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Collection', 'New Arrivals', 'Best Sellers', 'About'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                className={`font-medium tracking-wide transition-colors duration-300 animated-underline ${
                  isScrolled ? 'text-gray-800 hover:text-starcl-primary' : 'text-white hover:text-starcl-gold'
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className={`p-2 transition-colors duration-300 ${
              isScrolled ? 'text-gray-800 hover:text-starcl-primary' : 'text-white hover:text-starcl-gold'
            }`}>
              <Search className="w-5 h-5" />
            </button>
            <Link href="/cart" className={`p-2 transition-colors duration-300 relative ${
              isScrolled ? 'text-gray-800 hover:text-starcl-primary' : 'text-white hover:text-starcl-gold'
            }`}>
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-starcl-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <div className="flex items-center space-x-3">
              <a href="https://instagram.com/starcl" target="_blank" rel="noopener noreferrer" className={`p-2 transition-colors duration-300 ${
                isScrolled ? 'text-gray-800 hover:text-starcl-primary' : 'text-white hover:text-starcl-gold'
              }`}>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/starcl" target="_blank" rel="noopener noreferrer" className={`p-2 transition-colors duration-300 ${
                isScrolled ? 'text-gray-800 hover:text-starcl-primary' : 'text-white hover:text-starcl-gold'
              }`}>
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            {['Collection', 'New Arrivals', 'Best Sellers', 'About'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                className="block text-gray-800 font-medium py-2 hover:text-starcl-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="flex items-center justify-around pt-4 border-t">
              <button className="p-2 text-gray-800">
                <Search className="w-5 h-5" />
              </button>
              <Link href="/cart" className="p-2 text-gray-800 relative">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-starcl-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              <a href="https://instagram.com/starcl" className="p-2 text-gray-800">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
