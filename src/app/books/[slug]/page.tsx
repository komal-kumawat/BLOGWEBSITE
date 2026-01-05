import { getBlogBySlug } from "@/lib/blogs";
import { notFound } from "next/navigation";



export default async function BookPage({
    params
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const blog = getBlogBySlug(slug);

    if (!blog || blog.type !== "book") {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-gray-200 px-10 py-14 w-full w-screen ">
            <div className="flex flex-col mx-auto items-center justify-center max-w-3xl ">

                <span className="text-xl uppercase tracking-widest text-emerald-400 py-5">
                    {blog?.title}

                </span>

                

                <article className="text-gray-400 leading-relaxed whitespace-pre-line ">
                    {blog?.content}
                </article>

            </div>
        </div>
    );
}
