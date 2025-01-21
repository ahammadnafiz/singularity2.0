import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function PostFooter() {
  return (
    <footer className="mt-8 pt-4 border-t border-gray-200">
      <div className="flex justify-center space-x-4">
        <Link href="https://github.com/ahammadnafiz" className="text-gray-600 hover:text-gray-900">
          <Github size={20} />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link href="https://linkedin.com/in/ahammad-nafiz" className="text-gray-600 hover:text-gray-900">
          <Linkedin size={20} />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </div>
    </footer>
  )
}

