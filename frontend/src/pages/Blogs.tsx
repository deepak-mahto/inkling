import { useSearchParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <Appbar name={name as string} />
        <div className="flex justify-center">
          <div className="w-full max-w-screen-md">
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Appbar name={name as string} />
      <div className="flex justify-center">
        <div className="w-full max-w-screen-md">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={"2nd Feb 2024"}
              name={name as string}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
