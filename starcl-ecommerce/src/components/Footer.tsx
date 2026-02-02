'use client'

import Link from 'next/link'
import { Instagram, Facebook, Twitter, Mail, CreditCard, Shield, Truck } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-starcl-charcoal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-3xl font-bold tracking-wider text-white">
                STARCL
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Luxury high heels crafted for the modern sophisticate. Every pair is a masterpiece of design and craftsmanship.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/starcl" className="p-2 bg-white/10 rounded-full hover:bg-starcl-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/starcl" className="p-2 bg-white/10 rounded-full hover:bg-starcl-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/starcl" className="p-2 bg-white/10 rounded-full hover:bg-starcl-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Collection', 'New Arrivals', 'Best Sellers', 'Sale', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-starcl-gold transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Customer Service</h4>
            <ul className="space-y-4">
              {['Shipping Info', 'Track Order', 'Returns & Exchanges', 'Size Guide', 'FAQ', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-starcl-gold transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Stay Connected</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to receive updates on new arrivals and exclusive offers.
            </p>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-starcl-gold focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-starcl-primary text-white font-medium tracking-wide uppercase hover:bg-starcl-gold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 py-8 border-t border-b border-white/10">
          <div className="flex items-center gap-2 text-gray-400">
            <CreditCard className="w-5 h-5 text-starcl-gold" />
            <span className="text-sm">Secure Payment</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Truck className="w-5 h-5 text-starcl-gold" />
            <span className="text-sm">Global Shipping</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Shield className="w-5 h-5 text-starcl-gold" />
            <span className="text-sm">Quality Guarantee</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Starcl. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png" alt="Stripe" className="h-8 opacity-50" />
            <img src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg" alt="PayPal" className="h-8 opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  )
}
