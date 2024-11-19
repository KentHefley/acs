import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SuccessRoute() {
    return (
        <section className="h-screen w-screen flex flex-col items-center justify-center -mt-10">
            <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
                <div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
                    <Check className="size-10 text-primary"/>
                </div>
                <h2 className="mt-6 text-xl font-semibold">Success! We got your message.</h2>
                <p className="mt-2 mb-8 text-center text-sm text-muted-foreground">Our team will get back to you shortly.</p>
                <Button asChild><Link href="/">Go Back to Homepage</Link></Button>
            </div>
        </section>
    )
}