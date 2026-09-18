export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            {/* Header */}
            <p className="text-lg">Advanced Computer Science Student @ UNSW</p>
            <h1 className="text-4xl font-bold">Christopher Khim</h1>

            {/* Links */}
            <div>
                <a href="mailto:christopherkhim668@gmail.com" className="inline-flex items-center px-5 py-2.5 rounded-md text-sm font-medium bg-accent text-white border border-accent hover:bg-accent-dark hover:border-accent-dark transition-all duration-200 no-underline">Get in Touch!</a>
                <a href="https://github.com/crispykhim" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 rounded-md text-sm font-medium bg-transparent text-ink border border-border hover:border-muted transition-all duration-200 no-underline">GitHub</a>
                <a href="https://www.linkedin.com/in/ckhim" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 rounded-md text-sm font-medium bg-transparent text-ink border border-border hover:border-muted transition-all duration-200 no-underline">LinkedIn</a>
            </div>
        </section>
    )
}