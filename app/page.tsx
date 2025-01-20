import Link from "next/link"
import PostFooter from "@/app/components/PostFooter"

const posts = [
  {
    date: "ডিসেম্বর ৭, ২০২৩",
    title: "সিঙ্গুলারিটি: আমরা কতটা কাছে?",
    slug: "singularity-how-close",
  },
  {
    date: "ডিসেম্বর ১, ২০২৩",
    title: "জেনারেটিভ এআই এর যুগে প্রোগ্রামিং",
    slug: "programming-in-ai-era",
  },
  {
    date: "নভেম্বর ২৯, ২০২৩",
    title: "কৃত্রিম বুদ্ধিমত্তার নৈতিকতা",
    slug: "ai-ethics",
  },
  {
    date: "নভেম্বর ২০, ২০২৩",
    title: "ডিপ লার্নিং: একটি নতুন দৃষ্টিভঙ্গি",
    slug: "deep-learning-perspective",
  },
]

export default function Home() {
  return (
    <div>
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold font-jetbrains-mono">Recent Posts</h2>
        {posts.map((post) => (
          <div key={post.slug} className="group">
            <div className="text-gray-600 text-sm mb-1">{post.date}</div>
            <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:underline text-base font-medium">
              {post.title}
            </Link>
          </div>
        ))}
      </div>
      <PostFooter />
    </div>
  )
}

