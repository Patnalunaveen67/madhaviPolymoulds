const clients = ["Coca-Cola", "Bisleri", "Parle", "AJE", "Oxyrich"]

export default function ClientsSection() {
    return (
        <section className="py-20 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-8">Global Clients</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {clients.map((client) => (
                    <div key={client} className="bg-white px-6 py-4 rounded-lg shadow">
                        {client}
                    </div>
                ))}
            </div>
        </section>
    )
}