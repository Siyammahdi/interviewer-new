
import { blogs } from '../data';

const BlogDetails = ({ params }: { params: { id: string } }) => {
  const blog = blogs.find((b) => b.id === parseInt(params.id));

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-semibold">{blog.title}</h1>
      <p className="text-sm text-gray-500 my-5"><span className='text-base font-semibold'>{blog.author}</span> - {blog.date}</p>
      <img src={blog.image} alt={blog.title} className="w-full mt-4 rounded-2xl mb-10" />
      <p className="mt-6">{blog.description}</p>
    </div>
  );
};

export default BlogDetails;
