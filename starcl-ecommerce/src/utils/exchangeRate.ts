// Currency exchange rate utilities
// Uses free API to fetch daily exchange rates

const EXCHANGE_RATE_API = 'https://api.exchangerate-api.com/v4/latest/CNY'

// Default fallback rate (can be updated monthly)
const DEFAULT_USD_RATE = 0.14

export interface ExchangeRate {
  usd: number
  lastUpdated: string
}

let cachedRate: ExchangeRate | null = null

export async function getExchangeRate(): Promise<ExchangeRate> {
  // Check cache first
  if (cachedRate && isToday(cachedRate.lastUpdated)) {
    return cachedRate
  }

  try {
    const response = await fetch(EXCHANGE_RATE_API)
    const data = await response.json()

    const rate = {
      usd: data.rates?.USD || DEFAULT_USD_RATE,
      lastUpdated: new Date().toISOString(),
    }

    // Cache the rate
    cachedRate = rate
    localStorage.setItem('starcl_exchange_rate', JSON.stringify(rate))

    return rate
  } catch (error) {
    console.error('Failed to fetch exchange rate:', error)
    // Return cached rate or default
    const cached = localStorage.getItem('starcl_exchange_rate')
    if (cached) {
      return JSON.parse(cached)
    }
    return {
      usd: DEFAULT_USD_RATE,
      lastUpdated: new Date().toISOString(),
    }
  }
}

function isToday(dateString: string): boolean {
  const date = new Date(dateString)
  const today = new Date()
  return date.toDateString() === today.toDateString()
}

export function convertCNYtoUSD(cnyAmount: number, rate?: number): number {
  const exchangeRate = rate || DEFAULT_USD_RATE
  const usdAmount = cnyAmount * exchangeRate
  // Round to 2 decimal places
  return Math.round(usdAmount * 100) / 100
}

export function formatCurrency(amount: number, currency: 'USD' | 'CNY' = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}
