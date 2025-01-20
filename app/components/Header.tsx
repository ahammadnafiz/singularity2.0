import Link from "next/link"

const navItems = [
  { href: "/", label: "হোম" },
  { href: "/blog", label: "ব্লগ" },
  { href: "/thoughts", label: "চিন্তাভাবনা" },
  { href: "/reading-list", label: "পাঠ্য তালিকা" },
  { href: "/goals", label: "লক্ষ্য" },
  { href: "/predictions", label: "ভবিষ্যদ্বাণী" },
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

