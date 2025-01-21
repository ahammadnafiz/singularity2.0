import Link from "next/link"
import PostFooter from "@/app/components/PostFooter"

const posts = [
  {
    date: "জানুয়ারি ২০, ২০২৫",
    title: "সিঙ্গুলারিটি: আমরা কতটা কাছে?",
    path: "/posts/post_1",
  },
]

export default function Home() {
  return (
    <div>
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold font-jetbrains-mono">Recent Posts</h2>
        {posts.map((post) => (
          <div key={post.path} className="group">
            <div className="text-gray-600 text-sm mb-1">{post.date}</div>
            <Link href={post.path} className="text-blue-600 hover:underline text-base font-medium">
              {post.title}
            </Link>
          </div>
        ))}
      </div>
      <PostFooter />
    </div>
  )
}
