import PostFooter from "@/app/components/PostFooter"

export default function Post4() {
  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">ডিপ লার্নিং: একটি নতুন দৃষ্টিভঙ্গি</h1>
      <div className="text-gray-600 text-sm mb-8">নভেম্বর ২০, ২০২৩</div>
      <div className="whitespace-pre-wrap text-base leading-relaxed">
        {`ডিপ লার্নিং আজ আমাদের জীবনের প্রায় প্রতিটি ক্ষেত্রে ব্যবহৃত হচ্ছে। 
        ছবি শনাক্তকরণ থেকে শুরু করে ভাষা অনুবাদ, সবই এখন ডিপ লার্নিং মডেল দ্বারা 
        সম্ভব হচ্ছে।

        ডিপ লার্নিং এর প্রধান শক্তি হল এর স্বয়ংক্রিয় ফিচার এক্সট্রাকশন ক্ষমতা। 
        এটি ডেটা থেকে নিজে নিজেই প্যাটার্ন খুঁজে বের করতে পারে।

        তবে চ্যালেঞ্জও রয়েছে:
        ১. বড় পরিমাণ ডেটার প্রয়োজন
        ২. কম্পিউটেশনাল সীমাবদ্ধতা
        ৩. মডেলের সিদ্ধান্তের ব্যাখ্যাযোগ্যতা

        ভবিষ্যতে আরও উন্নত ডিপ লার্নিং মডেল আসবে যা এই সীমাবদ্ধতাগুলি অতিক্রম করবে।`}
      </div>
      <PostFooter />
    </article>
  )
}

