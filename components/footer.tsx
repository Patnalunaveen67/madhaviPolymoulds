"use client"

import Link from "next/link"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Madhavi Polymoulds LTD</h3>
                        <p className="text-gray-400">
                            Specializing in PET blow moulds since 1990. Exporting quality moulds to over 20 countries worldwide.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                            <li><Link href="/products" className="text-gray-400 hover:text-white">Products</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Products</h4>
                        <ul className="space-y-2">
                            <li><Link href="/products" className="text-gray-400 hover:text-white">PET Bottles</Link></li>
                            <li><Link href="/products" className="text-gray-400 hover:text-white">Blow Moulds</Link></li>
                            <li><Link href="/products" className="text-gray-400 hover:text-white">Custom Moulds</Link></li>
                            <li><Link href="/products" className="text-gray-400 hover:text-white">Industrial Solutions</Link></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Pune, Maharashtra, India</li>
                            <li>info@madhavipolymoulds.com</li>
                            <li>+91 12345 67890</li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        © {currentYear} Madhavi Polymoulds LTD. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}