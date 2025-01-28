import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 px-4 sm:px-10 w-full max-w-screen-xl pt-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <div className="text-3xl sm:text-5xl font-extrabold">
            {blog.title}
          </div>
          <div className="text-slate-500 pt-2">
            {`Posted on ${new Date(blog.publishedDate).toLocaleDateString(
              "en-Us",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}`}
          </div>
          <div className="pt-4 text-lg leading-relaxed">{blog.content}</div>
        </div>

        <div className="col-span-12 md:col-span-4">
          <div className="text-slate-600 text-lg">Author</div>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <div>
              <Avatar size="big" name={blog.author.name || "Anonymous"} />
            </div>
            <div>
              <div className="text-xl font-bold">
                {blog.author.name || "Anonymous"}
              </div>
              <div className="pt-2 text-slate-500">
                Random catch phrase about the author's ability to grab the
                user's attention
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
