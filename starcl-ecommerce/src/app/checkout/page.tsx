'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCartStore } from '@/store/cart'
import { formatCurrency } from '@/utils/exchangeRate'
import { CreditCard, Wallet, Building2, Shield, Truck, CheckCircle } from 'lucide-react'

type PaymentMethod = 'paypal' | 'crypto' | 'western_union'

export default function CheckoutPage() {
  const { items, getTotal } = useCartStore()
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('paypal')
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
    phone: '',
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsProcessing(false)
    setOrderComplete(true)
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-starcl-cream flex items-center justify-center pt-20">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-starcl-black mb-4">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. You will receive a confirmation email shortly with your order details and tracking information.
          </p>
          <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
            <h3 className="font-serif font-bold text-lg mb-4">Order Summary</h3>
            <p className="text-gray-600">Order Total: <span className="font-bold text-starcl-primary">{formatCurrency(getTotal())}</span></p>
            <p className="text-gray-600">Payment Method: <span className="font-bold">{paymentMethod === 'paypal' ? 'PayPal' : paymentMethod === 'crypto' ? 'Cryptocurrency' : 'Western Union'}</span></p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-starcl-primary text-white font-serif tracking-wider uppercase hover:bg-starcl-gold transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-starcl-cream pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-serif font-bold text-starcl-black mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Shipping Information */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="font-serif font-bold text-xl text-starcl-black mb-6 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-starcl-gold" />
                  Shipping Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input-elegant"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="input-elegant"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="input-elegant"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="input-elegant"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="input-elegant"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="input-elegant"
                    >
                      <option value="">Select Country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="input-elegant"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="input-elegant"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="font-serif font-bold text-xl text-starcl-black mb-6 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-starcl-gold" />
                  Payment Method
                </h2>
                <div className="space-y-4">
                  {/* PayPal */}
                  <label
                    className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      paymentMethod === 'paypal' ? 'border-starcl-primary bg-red-50' : 'border-gray-200 hover:border-starcl-gold'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={() => setPaymentMethod('paypal')}
                      className="sr-only"
                    />
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">PP</span>
                      </div>
                      <div>
                        <p className="font-medium text-starcl-black">PayPal</p>
                        <p className="text-sm text-gray-500">Pay securely with your PayPal account</p>
                      </div>
                    </div>
                    {paymentMethod === 'paypal' && <CheckCircle className="w-6 h-6 text-starcl-primary ml-auto" />}
                  </label>

                  {/* Crypto */}
                  <label
                    className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      paymentMethod === 'crypto' ? 'border-starcl-primary bg-red-50' : 'border-gray-200 hover:border-starcl-gold'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="crypto"
                      checked={paymentMethod === 'crypto'}
                      onChange={() => setPaymentMethod('crypto')}
                      className="sr-only"
                    />
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <Wallet className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <p className="font-medium text-starcl-black">Cryptocurrency</p>
                        <p className="text-sm text-gray-500">USDT, USDC, ETH, BTC - Zero fees</p>
                      </div>
                    </div>
                    {paymentMethod === 'crypto' && <CheckCircle className="w-6 h-6 text-starcl-primary ml-auto" />}
                  </label>

                  {/* Western Union */}
                  <label
                    className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      paymentMethod === 'western_union' ? 'border-starcl-primary bg-red-50' : 'border-gray-200 hover:border-starcl-gold'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="western_union"
                      checked={paymentMethod === 'western_union'}
                      onChange={() => setPaymentMethod('western_union')}
                      className="sr-only"
                    />
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-starcl-black">Western Union</p>
                        <p className="text-sm text-gray-500">Bank transfer or cash pickup</p>
                      </div>
                    </div>
                    {paymentMethod === 'western_union' && <CheckCircle className="w-6 h-6 text-starcl-primary ml-auto" />}
                  </label>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-8 shadow-lg sticky top-24">
                <h2 className="font-serif font-bold text-xl text-starcl-black mb-6">Order Summary</h2>

                {/* Items */}
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm text-starcl-black">{item.name}</p>
                        <p className="text-xs text-gray-500">Size: {item.selectedSize} | {item.selectedColor}</p>
                        <p className="text-sm text-starcl-primary">Qty: {item.quantity} × ${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>{formatCurrency(getTotal())}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                </div>

                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between text-xl font-bold text-starcl-black mb-6">
                    <span>Total</span>
                    <span>{formatCurrency(getTotal())}</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-4 bg-starcl-primary text-white font-serif tracking-wider uppercase hover:bg-starcl-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>Place Order</>
                    )}
                  </button>

                  <div className="mt-4 flex items-center justify-center gap-2 text-gray-400 text-sm">
                    <Shield className="w-4 h-4" />
                    Secure Checkout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
