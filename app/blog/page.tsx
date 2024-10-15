import { blogs } from "./data";
import BlogCard from "../Components/BlogCard";
import Link from "next/link";
import Image from "next/image";

const BlogPage = () => {
  const importantBlog = blogs[0];
  const otherBlogs = blogs.slice(1);

  const truncateDescription = (description: string, wordLimit: number) => {
    const words = description.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : description;
  };

  return (
    <div className="max-w-7xl mx-auto ">
      <Image src="/logo.png" alt="logo" height={40} width={40} className="mx-4 my-10 mb-36" />
      <div className="flex">
        <div className="w-1/2 h-fit bg-white p-4">
          <div>
            <p className="text-sm text-gray-500">{importantBlog.date}</p>
            <h2 className="text-4xl my-4 font-bold">{importantBlog.title}</h2>
            <p className=" text-lg text-gray-500 leading-relaxed">
              {truncateDescription(importantBlog.description, 40)}
            </p>

            <Link
              href={`/blog/${importantBlog.id}`}
              className="text-blue-500 text-sm font-semibold hover:underline mt-4 block"
            >
              Continue Reading
            </Link>
          </div>
          <hr className="my-10" />
          <div className="flex gap-4 mt-4 items-center">
            <Image
              src={importantBlog.avatar}
              alt={importantBlog.author}
              height={40}
              width={40}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-semibold text-gray-600">
                {importantBlog.author}
              </p>
              <p className="text-sm text-gray-500">{importantBlog.role}</p>
            </div>
          </div>
        </div>
        <main className="ml-32 w-3/5 overflow-y-auto h-screen space-y-4">
          {otherBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default BlogPage;
