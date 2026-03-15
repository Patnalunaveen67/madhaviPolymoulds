"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <form className="grid gap-4 max-w-xl mx-auto">
                <Input placeholder="Name" />
                <Input placeholder="Email" />
                <Textarea placeholder="Message" />
                <Button>Send Message</Button>
            </form>
        </section>
    )
}