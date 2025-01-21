import PostFooter from "@/app/components/PostFooter"

const thoughts = [
  {
    date: "জানুয়ারি ২০, ২০২৫",
    content: "মানব মস্তিষ্কের সাথে কম্পিউটার ইন্টারফেস: এটি কি আমাদের চিন্তার ধরণকে পরিবর্তন করবে?",
  },
  {
    date: "ডিসেম্বর ১০, ২০২৪",
    content: "এআই এর দ্রুত উন্নতি আমাদের সমাজকে কীভাবে প্রভাবিত করবে? আমাদের কি এর জন্য প্রস্তুত?",
  },
]

export default function Thoughts() {
  return (
    <div>
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold font-jetbrains-mono">Thoughts</h2>
        {thoughts.map((thought, index) => (
          <div key={index} className={`pb-4 ${index !== thoughts.length - 1 ? "border-b border-gray-200" : ""}`}>
            <div className="text-gray-600 text-sm mb-2">{thought.date}</div>
            <p className="text-base">{thought.content}</p>
          </div>
        ))}
      </div>
      <PostFooter />
    </div>
  )
}

