import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProductsGallery() {
    const products = [
        {
            name: "PET Bottle Moulds",
            description: "High-precision moulds for various bottle sizes and shapes",
            image: "/product-1.jpg"
        },
        {
            name: "Custom Blow Moulds",
            description: "Tailored solutions for unique packaging requirements",
            image: "/product-2.jpg"
        },
        {
            name: "Industrial Moulds",
            description: "Heavy-duty moulds for industrial applications",
            image: "/product-3.jpg"
        },
        {
            name: "Multi-Cavity Moulds",
            description: "High-efficiency moulds for mass production",
            image: "/product-4.jpg"
        },
        {
            name: "Preform Moulds",
            description: "Quality preforms for PET bottle manufacturing",
            image: "/product-5.jpg"
        },
        {
            name: "Hot Runner Systems",
            description: "Advanced hot runner technology for optimal production",
            image: "/product-6.jpg"
        }
    ]

    return (
        <section id="products" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Our Products</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We manufacture a wide range of PET blow moulds with precision engineering and quality materials
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {products.map((product, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                <div className="text-blue-600 text-6xl font-bold">
                                    {product.name.charAt(0)}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                <Button variant="outline" asChild className="w-full">
                                    <Link href="/contact">Get Details</Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button asChild size="lg">
                        <Link href="/contact">Request Custom Quote</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}