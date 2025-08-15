import React from 'react';

const goals = [
  {
    title: "LLM এর Internal Workings সম্পূর্ণ বুঝা",
    deadline: "অক্টোবর ২০২৫",
    status: "চলমান",
  },
  {
    title: "Dive into Deep Learning (D2L) বই শেষ করা",
    deadline: "ডিসেম্বর ২০২৫",
    status: "চলমান",
  },
  {
    title: "Research পেপার পাবলিশ করা",
    deadline: "ডিসেম্বর ২০২৫",
    status: "পরিকল্পনাধীন",
  },
];

export default function Goals() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">২০২৫ সালের লক্ষ্যসমূহ</h1>
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold font-jetbrains-mono">Goals</h2>
        {goals.map((goal, index) => (
          <div 
            key={index} 
            className={`pb-4 ${index !== goals.length - 1 ? "border-b border-gray-200" : ""}`}
          >
            <h3 className="text-base font-medium">{goal.title}</h3>
            <p className="text-sm">সময়সীমা: {goal.deadline}</p>
            <p className="text-sm mt-2">স্ট্যাটাস: {goal.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}