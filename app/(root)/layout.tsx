import { Navbar } from "@/components/navbar"


const Rootlayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <Navbar />
            <main className="md:pl-20 pt-16 h-full">
                {children}
            </main>
        </div>
    )
}

export default Rootlayout