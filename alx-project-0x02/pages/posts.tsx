import { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        // Map API data to our PostProps structure
        const formattedPosts: PostProps[] = data.map((post: any) => ({
          userId: post.userId,
          title: post.title,
          content: post.body,
          id: post.id,
        }));

        setPosts(formattedPosts);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Posts</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostsPage;
