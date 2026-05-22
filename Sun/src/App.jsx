import SiteShell from './layouts/SiteShell.jsx'
import FloatingContactButton from './sections/FloatingContactButton.jsx'

import HomeSection from './pages/HomeSection.jsx'
import AboutSection from './pages/AboutSection.jsx'
import ProductsSection from './pages/ProductsSection.jsx'
import FinancingSection from './pages/FinancingSection.jsx'
import DashboardSection from './pages/DashboardSection.jsx'
import TestimonialsSection from './pages/TestimonialsSection.jsx'
import ContactSection from './pages/ContactSection.jsx'

export default function App() {
  return (
    <SiteShell>
      <HomeSection />
      <AboutSection />
      <ProductsSection />
      <FinancingSection />
      <DashboardSection />
      <TestimonialsSection />
      <ContactSection />
      <FloatingContactButton />
    </SiteShell>
  )
}

