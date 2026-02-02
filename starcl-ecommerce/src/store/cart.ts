import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Product {
  id: number
  name: string
  price: number
  cnyPrice: number // Cost price in CNY
  image: string
  images: string[]
  description: string
  sizes: number[]
  colors: string[]
  tag?: string
}

export interface CartItem extends Product {
  quantity: number
  selectedSize: number
  selectedColor: string
}

interface CartState {
  items: CartItem[]
  addItem: (product: Product, quantity: number, size: number, color: string) => void
  removeItem: (productId: number, size: number, color: string) => void
  updateQuantity: (productId: number, quantity: number, size: number, color: string) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, quantity, size, color) => {
        const items = get().items
        const existingIndex = items.findIndex(
          (item) =>
            item.id === product.id &&
            item.selectedSize === size &&
            item.selectedColor === color
        )

        if (existingIndex > -1) {
          const newItems = [...items]
          newItems[existingIndex].quantity += quantity
          set({ items: newItems })
        } else {
          set({
            items: [...items, { ...product, quantity, selectedSize: size, selectedColor: color }],
          })
        }
      },

      removeItem: (productId, size, color) => {
        set({
          items: get().items.filter(
            (item) => !(item.id === productId && item.selectedSize === size && item.selectedColor === color)
          ),
        })
      },

      updateQuantity: (productId, quantity, size, color) => {
        if (quantity <= 0) {
          get().removeItem(productId, size, color)
          return
        }
        set({
          items: get().items.map((item) =>
            item.id === productId && item.selectedSize === size && item.selectedColor === color
              ? { ...item, quantity }
              : item
          ),
        })
      },

      clearCart: () => set({ items: [] }),

      getTotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
      },

      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0)
      },
    }),
    {
      name: 'starcl-cart',
    }
  )
)
