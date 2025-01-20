import Link from "next/link"

// This would typically come from a database or CMS
const blogPosts = [
  { id: 1, title: "Next.js 13 এর নতুন বৈশিষ্ট্য", date: "২০২৩-০৫-১৫" },
  { id: 2, title: "React Server Components কী এবং কেন?", date: "২০২৩-০৫-১০" },
  { id: 3, title: "Tailwind CSS দিয়ে দ্রুত UI ডিজাইন", date: "২০২৩-০৫-০৫" },
]

export default function BlogPage() {
  return (
    <div className="prose prose-lg mx-auto">
      <h1 className="text-4xl font-bold mb-6">ব্লগ পোস্ট</h1>
      <ul className="space-y-4">
        {blogPosts.map((post) => (
          <li key={post.id} className="border-b border-gray-200 pb-4">
            <Link href={`/blog/${post.id}`} className="block hover:underline">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

