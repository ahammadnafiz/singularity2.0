import PostFooter from "@/app/components/PostFooter"

export default function Post3() {
  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">কৃত্রিম বুদ্ধিমত্তার নৈতিকতা</h1>
      <div className="text-gray-600 text-sm mb-8">নভেম্বর ২৯, ২০২৩</div>
      <div className="whitespace-pre-wrap text-base leading-relaxed">
        {`এআই এর নৈতিক দিকগুলি নিয়ে আলোচনা করা খুবই গুরুত্বপূর্ণ। যত দ্রুত এআই 
        সিস্টেমগুলি উন্নত হচ্ছে, ততই এর নৈতিক প্রভাব নিয়ে চিন্তা করা জরুরি হয়ে পড়ছে।

        মূল বিবেচ্য বিষয়গুলি:
        ১. এআই সিদ্ধান্তের স্বচ্ছতা
        ২. ব্যক্তিগত তথ্যের গোপনীয়তা
        ৩. এআই ব্যবহারে সামাজিক প্রভাব
        ৪. কর্মসংস্থানের উপর প্রভাব

        আমাদের লক্ষ্য হওয়া উচিত এমন এআই সিস্টেম তৈরি করা যা মানবতার কল্যাণে কাজ করে।`}
      </div>
      <PostFooter />
    </article>
  )
}

