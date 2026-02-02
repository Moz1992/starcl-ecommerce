'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCartStore } from '@/store/cart'
import { formatCurrency, getExchangeRate } from '@/utils/exchangeRate'
import { Trash2, Plus, Minus, ArrowRight, CreditCard, Wallet, Building2 } from 'lucide-react'

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore()
  const [exchangeRate, setExchangeRate] = useState(0.14)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    getExchangeRate().then((rate) => {
      setExchangeRate(rate.usd)
    })
  }, [])

  const handleShare = async () => {
    const total = getTotal()
    const shareText = `🛒 Starcl Luxury Shopping Cart\nTotal: ${formatCurrency(total)}\n\nCheck out my selected luxury heels!`

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Starcl Shopping Cart',
          text: shareText,
          url: window.location.href,
        })
      } catch (err) {
        console.log('Share cancelled')
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareText)
      alert('Cart details copied to clipboard!')
    }
  }

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner" />
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-starcl-cream">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-starcl-black mb-4">Your Cart is Empty</h1>
          <p className="text-gray-500 mb-8">Discover our exquisite collection of luxury heels.</p>
          <Link
            href="/collection"
            className="inline-flex items-center gap-2 px-8 py-3 bg-starcl-primary text-white font-serif tracking-wider uppercase hover:bg-starcl-gold transition-colors"
          >
            Shop Collection
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-starcl-cream pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-serif font-bold text-starcl-black mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="bg-white rounded-lg p-6 shadow-md card-hover">
                <div className="flex gap-6">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-serif font-bold text-xl text-starcl-black">{item.name}</h3>
                        <p className="text-gray-500 text-sm">Size: {item.selectedSize} | Color: {item.selectedColor}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.selectedSize, item.selectedColor)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize, item.selectedColor)}
                          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize, item.selectedColor)}
                          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xl font-bold text-starcl-primary">
                        {formatCurrency(item.price)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-8 shadow-lg sticky top-24">
              <h2 className="font-serif font-bold text-2xl text-starcl-black mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatCurrency(getTotal())}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Estimated CNY Cost</span>
                  <span>¥{Math.round(getTotal() / exchangeRate)}</span>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-xl font-bold text-starcl-black">
                  <span>Total</span>
                  <span>{formatCurrency(getTotal())}</span>
                </div>
              </div>

              {/* Share Button */}
              <button
                onClick={handleShare}
                className="w-full mb-4 py-3 border-2 border-starcl-gold text-starcl-gold font-medium tracking-wide uppercase hover:bg-starcl-gold hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                Share Cart
              </button>

              {/* Checkout Button */}
              <Link
                href="/checkout"
                className="w-full py-4 bg-starcl-primary text-white font-serif tracking-wider uppercase hover:bg-starcl-gold transition-colors flex items-center justify-center gap-2"
              >
                Proceed to Checkout
                <ArrowRight className="w-5 h-5" />
              </Link>

              {/* Payment Methods */}
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-gray-500 text-center mb-4">Accepted Payment Methods</p>
                <div className="flex justify-center gap-4 text-gray-400">
                  <CreditCard className="w-8 h-8" />
                  <Wallet className="w-8 h-8" />
                  <Building2 className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
