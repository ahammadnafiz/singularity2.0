import Link from "next/link"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/thoughts", label: "Thoughts" },
  { href: "/reading-list", label: "Reading List" },
  { href: "/goals", label: "Goals" },
  { href: "/predictions", label: "Predictions" },
]

export default function Header() {
  return (
    <header className="bg-black text-white py-4">
      <nav className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center gap-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

