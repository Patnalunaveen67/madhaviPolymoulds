"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            title: "Leading PET Blow Mould Manufacturers",
            subtitle: "Since 1990, delivering quality moulds to global brands",
            image: "/hero-1.jpg"
        },
        {
            title: "Exporting to 20+ Countries",
            subtitle: "Trusted by Coca-Cola, Bisleri, and Parle",
            image: "/hero-2.jpg"
        },
        {
            title: "Custom Mould Solutions",
            subtitle: "From concept to production moulds with precision engineering",
            image: "/hero-3.jpg"
        }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [slides.length])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/90 z-10"></div>
            
            <div className="absolute inset-0 transition-opacity duration-1000">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800"></div>
            </div>

            <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    {slides[currentSlide].title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                    {slides[currentSlide].subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                        <Link href="/contact">Get Quote</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                        <Link href="/products">View Products</Link>
                    </Button>
                </div>
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-4 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentSlide ? "bg-white" : "bg-white/50"
                        }`}
                    />
                ))}
            </div>
        </section>
    )
}