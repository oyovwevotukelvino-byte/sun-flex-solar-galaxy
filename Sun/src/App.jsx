import HomeSection from './pages/HomeSection'
import AboutSection from './pages/AboutSection'
import ProductsSection from './pages/ProductsSection'
import ContactSection from './pages/ContactSection'
import DashboardSection  from './pages/DashboardSection' 
import TestimonialsSection from './pages/TestimonialsSection'
import FinancingSection from './pages/FinancingSection'
import Navbar from './sections/Navbar'
import Footer from './sections/Footer'
import SiteShell from './layouts/SiteShell.jsx'
import FloatingContactButton from './sections/FloatingContactButton.jsx'





export default function App() {
  return (
    <>
      <HomeSection />
      <AboutSection/>
      <ProductsSection />
      <ContactSection />
      <DashboardSection/>
      <TestimonialsSection/>
      <FinancingSection/>
      <Navbar/>
      <Footer/>
      <SiteShell />
      <FloatingContactButton />

      
    </>
  )
}

