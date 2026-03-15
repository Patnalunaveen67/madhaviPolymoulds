export default function MachinesLogos() {
    const machines = [
        { name: "SIDEL", country: "France" },
        { name: "KRONES", country: "Germany" },
        { name: "SIPA", country: "Italy" },
        { name: "ASB", country: "Japan" },
        { name: "NISSEI", country: "Japan" },
        { name: "HUSKY", country: "Canada" }
    ]

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Compatible With Major Blowing Lines</h2>
                    <p className="text-lg text-gray-600">
                        Our moulds work seamlessly with equipment from leading manufacturers worldwide
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {machines.map((machine, index) => (
                        <div key={index} className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <div className="w-20 h-20 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-3">
                                {machine.name.substring(0, 2)}
                            </div>
                            <h3 className="font-semibold text-gray-900">{machine.name}</h3>
                            <p className="text-sm text-gray-500">{machine.country}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}