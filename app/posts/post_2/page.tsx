import PostFooter from "@/app/components/PostFooter"

export default function Post2() {
  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">জেনারেটিভ এআই এর যুগে প্রোগ্রামিং</h1>
      <div className="text-gray-600 text-sm mb-8">ডিসেম্বর ১, ২০২৩</div>
      <div className="whitespace-pre-wrap text-base leading-relaxed">
        {`প্রোগ্রামিং এর ভবিষ্যৎ এখন এআই এর হাতে। আজকের দিনে প্রোগ্রামিং শেখার 
        ধরণ পুরোপুরি বদলে গেছে। জেনারেটিভ এআই টুলস যেমন GitHub Copilot, 
        ChatGPT প্রোগ্রামারদের কাজকে আরও দক্ষ করে তুলছে।

        তবে এর মানে এই নয় যে প্রোগ্রামিং শেখার প্রয়োজন কমে গেছে। বরং এখন 
        প্রোগ্রামারদের নতুন দক্ষতা অর্জন করতে হবে:

        ১. এআই টুলস ব্যবহার করে কীভাবে আরও ভালো কোড লেখা যায়
        ২. এআই জেনারেটেড কোডের গুণমান যাচাই
        ৩. এআই এর সাথে কাজ করার সময় নিরাপত্তা বিষয়ক সতর্কতা

        আগামীর প্রোগ্রামাররা হবে এআই এর সহযোগী, প্রতিদ্বন্দ্বী নয়।`}
      </div>
      <PostFooter />
    </article>
  )
}

