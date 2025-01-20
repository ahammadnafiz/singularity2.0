import PostFooter from "@/app/components/PostFooter"

const thoughts = [
  {
    date: "ডিসেম্বর ১০, ২০২৩",
    content: "এআই এর দ্রুত উন্নতি আমাদের সমাজকে কীভাবে প্রভাবিত করবে? আমাদের কি এর জন্য প্রস্তুত?",
  },
  {
    date: "ডিসেম্বর ৫, ২০২৩",
    content: "ক্বান্টাম কম্পিউটিং এর উন্নতি কি সিঙ্গুলারিটিকে ত্বরান্বিত করবে?",
  },
  {
    date: "নভেম্বর ৩০, ২০২৩",
    content: "মানব মস্তিষ্কের সাথে কম্পিউটার ইন্টারফেস: এটি কি আমাদের চিন্তার ধরণকে পরিবর্তন করবে?",
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

