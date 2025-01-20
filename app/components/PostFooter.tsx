import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function PostFooter() {
  return (
    <footer className="mt-12 pt-4 border-t border-gray-200">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 flex justify-center space-x-4">
        <Link href="https://github.com/yourusername" className="text-gray-600 hover:text-gray-900">
          <Github size={24} />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link href="https://linkedin.com/in/yourusername" className="text-gray-600 hover:text-gray-900">
          <Linkedin size={24} />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </div>
    </footer>
  )
}

