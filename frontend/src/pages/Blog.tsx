import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import { FullBlogSkeleton } from "../components/FullBlogSkeleton"; // Import the skeleton component
import { useBlog } from "../hooks";
import { useParams, useSearchParams } from "react-router-dom";

export const Blog = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const { loading, blog } = useBlog({
    id: id || "",
  });

  if (loading || !blog) {
    return (
      <div>
        <Appbar name={name as string} />
        <FullBlogSkeleton />
      </div>
    );
  }

  return (
    <div>
      <Appbar name={name as string} />
      <FullBlog blog={blog} />
    </div>
  );
};
