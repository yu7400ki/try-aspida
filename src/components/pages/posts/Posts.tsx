import Link from "next/link";
import { useFetchPosts } from "@/hooks";

export const Posts = () => {
  const { data, isLoading } = useFetchPosts();

  return (
    <div>
      <h1>Posts</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data?.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
