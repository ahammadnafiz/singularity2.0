import "./globals.css"
import { Noto_Serif_Bengali, JetBrains_Mono } from "next/font/google"

const notoSerifBengali = Noto_Serif_Bengali({
  weight: ["400", "700"],
  subsets: ["bengali"],
  variable: "--font-noto-serif-bengali",
})

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata = {
  title: "Singularity 2.0",
  description: "Thoughts on technology, AI, and the future",
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/thoughts", label: "Thoughts" },
  { href: "/reading-list", label: "Reading List" },
  { href: "/goals", label: "Goals" },
  { href: "/about", label: "About" },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning={true} lang="bn">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body suppressHydrationWarning={true} className={`${notoSerifBengali.variable} ${jetbrainsMono.variable} font-noto-serif-bengali`}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <header className="mb-12">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 font-jetbrains-mono">
              <a href="/">Singularity 2.0</a>
            </h1>
            <div className="h-px bg-gray-200 mb-6"></div>
            <nav>
              <ul className="flex flex-wrap gap-4 sm:gap-6 text-base">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-blue-600 hover:underline">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}