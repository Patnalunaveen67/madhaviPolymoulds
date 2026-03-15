const machines = ["Sidel", "Krones", "SIPA", "Sacmi", "Techlong", "SMI", "KHS"]

export default function MachinesSection() {
    return (
        <section className="py-20 container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Compatible Machines</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {machines.map((machine) => (
                    <div key={machine} className="bg-gray-100 px-6 py-4 rounded-lg shadow">
                        {machine}
                    </div>
                ))}
            </div>
        </section>
    )
}