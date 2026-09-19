type Nav = {
    text: string;
    href: string;
}

const links: Nav[] = [
    {
        text: "Home",
        href: "/"
    },
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
        <nav className="fixed top-0 left-0 right-0 w-fit mx-auto bg-white flex items-center justify-center border rounded-lg mt-4">
            <ul className="flex space-x-8 py-4 px-8 text-lg border rounded-lg">
                {links.map((link) => (
                    <li key={link.href} className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
                        <a href={link.href} className="">{link.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}