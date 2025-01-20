import PostFooter from "@/app/components/PostFooter"

const goals = [
  {
    title: "এআই এথিক্স নিয়ে একটি গবেষণা প্রকল্প সম্পন্ন করা",
    deadline: "জুন ২০২৪",
    status: "চলমান",
  },
  {
    title: "কৃত্রিম বুদ্ধিমত্তা বিষয়ক একটি বই লেখা",
    deadline: "ডিসেম্বর ২০২৪",
    status: "পরিকল্পনাধীন",
  },
  {
    title: "সিঙ্গুলারিটি বিষয়ক একটি আন্তর্জাতিক সম্মেলনে অংশগ্রহণ",
    deadline: "সেপ্টেম্বর ২০২৪",
    status: "পরিকল্পনাধীন",
  },
]

export default function Goals() {
  return (
    <div>
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold font-jetbrains-mono">Goals</h2>
        {goals.map((goal, index) => (
          <div key={index} className={`pb-4 ${index !== goals.length - 1 ? "border-b border-gray-200" : ""}`}>
            <h3 className="text-base font-medium">{goal.title}</h3>
            <p className="text-sm">সময়সীমা: {goal.deadline}</p>
            <p className="text-sm mt-2">স্ট্যাটাস: {goal.status}</p>
          </div>
        ))}
      </div>
      <PostFooter />
    </div>
  )
}

