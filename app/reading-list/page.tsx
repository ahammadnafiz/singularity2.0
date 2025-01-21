import PostFooter from "@/app/components/PostFooter"

const books = [
  {
    title: "Neural Networks from Scratch in Python",
    author: "Harrison Kinsley & Daniel Kukieła",
    status: "পড়ছি",
  },
]

export default function ReadingList() {
  return (
    <div>
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold font-jetbrains-mono">Reading List</h2>
        {books.map((book, index) => (
          <div key={index} className={`pb-4 ${index !== books.length - 1 ? "border-b border-gray-200" : ""}`}>
            <h3 className="text-base font-medium">{book.title}</h3>
            <p className="text-gray-600 text-sm">{book.author}</p>
            <p className="text-sm mt-2">স্ট্যাটাস: {book.status}</p>
          </div>
        ))}
      </div>
      <PostFooter />
    </div>
  )
}

