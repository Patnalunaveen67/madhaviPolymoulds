import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
    {
        title: "Quick Change Moulds",
        description: "Rotary blowing machines require high precision moulds that operate at extremely high speeds.",
    },
    {
        title: "Rotary Machine Moulds",
        description: "Compatible with global machines including Sidel, Krones, SIPA, Sacmi, and Techlong.",
    },
    {
        title: "Custom Bottle Design",
        description: "Complete bottle design, mould manufacturing, and testing solutions tailored to your application.",
    },
]

export default function ProductsSection() {
    return (
        <section id="products" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <Card key={product.title}>
                            <CardHeader>
                                <CardTitle>{product.title}</CardTitle>
                            </CardHeader>
                            <CardContent>{product.description}</CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}