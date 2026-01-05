import {  getBlogsByType } from "@/lib/blogs";
import Link from "next/link";
export default function BooksPage() {
  const blogs = getBlogsByType("story");

  return (
     <div className="min-h-screen bg-[#0f0f0f] text-gray-200">
      <h1 className="text-4xl font-semibold mb-12 text-center text-gray-100 pt-10">
        My Stories
      </h1>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 px-8 md:px-16 pb-16">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-[#181818] rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          >
            

            <h2 className="text-2xl font-semibold mt-3 mb-4 text-gray-100">
              {blog.title}
            </h2>

            <p className="text-gray-400 leading-relaxed line-clamp-4">
              {blog.content}
            </p>

            <Link href={`/stories/${blog.slug}`}>
              <button className="mt-6 text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                Read more →
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
