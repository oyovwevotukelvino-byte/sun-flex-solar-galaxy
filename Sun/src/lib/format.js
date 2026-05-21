export function formatCurrencyNGN(amount) {
  const n = Number(amount)
  if (!Number.isFinite(n)) return '₦0'
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(n)
}

export function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n))
}

