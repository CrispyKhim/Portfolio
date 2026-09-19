export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            {/* Header */}
            <p className="text-lg">Advanced Computer Science Student @ UNSW</p>
            <h1 className="text-4xl font-bold">Christopher Khim</h1>

            {/* Links */}
            <div>
                <a href="mailto:christopherkhim668@gmail.com" className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white border">Get in Touch!</a>
                <a href="https://github.com/crispykhim" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-transparent border border-border">GitHub</a>
                <a href="https://www.linkedin.com/in/ckhim" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-transparent border border-border">LinkedIn</a>
            </div>
        </section>
    )
}