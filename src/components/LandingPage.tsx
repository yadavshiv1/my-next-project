'use client'
import MediaSlider from "@/components/MediaSlider";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import ReviewSlider from "@/components/ReviewSlider";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import dynamic from "next/dynamic";

const AnimatedSection = dynamic(() => import('@/components/AnimatedSection'), {
  ssr: false,
});

export default function LandingPage() {
  return (
    <div className="scroll-smooth">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-black text-white sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <span className="text-lg font-bold">Logo</span>
          <ul className="flex gap-6">
            <li className="bg-amber-200 px-4 py-1 rounded-full text-black">
              <a href="#about" className="hover:text-yellow-600">About</a>
            </li>
            <li className="bg-amber-200 px-4 py-1 rounded-full text-black">
              <a href="#menu" className="hover:text-yellow-600">Our Menu</a>
            </li>
            <li className="bg-amber-200 px-4 py-1 rounded-full text-black">
              <a href="#review" className="hover:text-yellow-600">Review</a>
            </li>
            <li className="bg-amber-200 px-4 py-1 rounded-full text-black">
              <a href="#contact" className="hover:text-yellow-600">Contact</a>
            </li>
          </ul>
        </div>
        <button className="bg-yellow-500 px-4 py-2 rounded-lg text-black hover:bg-yellow-600">
          Book Table
        </button>
      </div>

      {/* Hero Section */}
      <div className="min-h-screen bg-black text-white">
        <MediaSlider />
      </div>

      {/* Animated Sections */}
      <div id="menu">
        <AnimatedSection>
          <MenuSection name={""} />
        </AnimatedSection>
      </div>

      <AnimatedSection>
        <GallerySection name={""} />
      </AnimatedSection>

      <div id="review">
        <AnimatedSection>
          <ReviewSlider name={""} />
        </AnimatedSection>
      </div>

      <div id="about">
        <AnimatedSection>
          <AboutSection name={""} />
        </AnimatedSection>
      </div>

      <div id="contact">
        <AnimatedSection>
          <Footer />
        </AnimatedSection>
      </div>
    </div>
  );
}
