import Image from "next/image";
import Link from "next/link";

interface Blog {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string; 
  author: string;
  avatar: string;
  role: string;
}

const BlogCard = ({ blog }: { blog: Blog }) => {
  const truncateDescription = (description: string, wordLimit: number) => {
    const words = description.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : description;
  };

  return (
    <Link href={`/blog/${blog.id}`}>
      <div className="p-6 border-b">
        <p className="text-sm text-gray-500">{blog.date}</p>
        <h2 className="text-lg text-gray-800 font-semibold mt-2">{blog.title}</h2>
        <p className="mt-4 leading-relaxed text-sm text-gray-500">
          {truncateDescription(blog.description, 60)}
        </p>
        <div className="flex items-center mt-6">
          <Image
            src={blog.avatar}
            alt={blog.author}
            height={40}
            width={40}
            className="rounded-full object-cover mr-4"
          />
          <div className="text-sm">
            <p className="font-semibold text-gray-700">{blog.author}</p>
            <p className="text-gray-500">{blog.role}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
