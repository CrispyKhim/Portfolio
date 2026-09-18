type Nav = {
    text: string;
    href: string;
}

const links: Nav[] = [
    {
        text: "About",
        href: "/#about"
    },
    {
        text: "Career",
        href: "/career"
    },
    {
        text: "Projects",
        href: "/projects"
    },
    {
        text: "Contact",
        href: "/#contact"
    }
]

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 w-full bg-white shadow-md flex items-center justify-between">
            <ul className="flex space-x-4 p-4">
                <a href="/">Home</a>
                {links.map((link) => (
                    <li key={link.href}>
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}