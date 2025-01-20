import PostFooter from "@/app/components/PostFooter"

const books = [
  {
    title: "Life 3.0: Being Human in the Age of Artificial Intelligence",
    author: "Max Tegmark",
    status: "পড়া শেষ",
  },
  {
    title: "The Singularity Is Near",
    author: "Ray Kurzweil",
    status: "পড়ছি",
  },
  {
    title: "Superintelligence: Paths, Dangers, Strategies",
    author: "Nick Bostrom",
    status: "পড়ার পরিকল্পনা আছে",
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

