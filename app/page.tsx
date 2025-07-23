import Header from './components/Header'
import Hero from './components/Hero'
import Courses from './components/Courses'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Features from './components/Features'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <main className="bg-[#1e1e1e] text-white font-sans">
      <Header />
      <Hero />
      <Courses />
      <About />
      <Testimonials />
      <Features />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
