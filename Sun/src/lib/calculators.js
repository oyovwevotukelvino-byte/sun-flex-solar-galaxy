import { clamp } from './format'

// Simplified (marketing-friendly) estimate:
// - monthly kWh usage from household size guess
// - solar generation factor by roof rating (0.75 - 0.95)
// - savings uses avg tariff (₦ per kWh)
export function estimateSolarSavings({
  monthlyKwh = 320,
  solarOffsetPct = 0.7,
  tariffNgnPerKwh = 250,
}) {
  const safeKwh = Math.max(0, Number(monthlyKwh) || 0)
  const offset = clamp(Number(solarOffsetPct) || 0, 0, 1)
  const tariff = Math.max(0, Number(tariffNgnPerKwh) || 0)

  const solarKwh = safeKwh * offset
  const avoidedCost = solarKwh * tariff

  return {
    solarKwh,
    avoidedCost,
  }
}

export function estimateMonthlyPayment({
  systemCost,
  downPaymentPct = 0.1,
  months = 24,
  apr = 0.24,
}) {
  const cost = Math.max(0, Number(systemCost) || 0)
  const down = clamp(Number(downPaymentPct) || 0, 0, 1) * cost
  const principal = Math.max(0, cost - down)

  const m = Math.max(1, Math.floor(Number(months) || 1))
  const monthlyRate = Math.max(0, Number(apr) || 0) / 12

  if (monthlyRate === 0) return { monthly: principal / m, principal, down }

  // amortizing loan payment
  const monthly =
    (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -m))

  return { monthly, principal, down }
}

