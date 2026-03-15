import Navbar from "@/components/navbar"
import HeroSlider from "@/components/hero-slider"
import AboutSection from "@/components/about-section"
import ProductsGallery from "@/components/products-gallery"
import MachinesLogos from "@/components/machines-logos"
import ExportMap from "@/components/export-map"
import VideoSection from "@/components/video-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <ProductsGallery />
      <MachinesLogos />
      <ExportMap />
      <VideoSection />
      <ContactSection />
      <Footer />
    </div>
  )
}