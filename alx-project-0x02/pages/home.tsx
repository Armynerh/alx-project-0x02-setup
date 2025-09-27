import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { Post } from "@/interfaces";
const HomePage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (newPost: Post) => {
    setPosts([newPost, ...posts]); // Add new post to the beginning of the array
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>

      {/* Button to open modal */}
      <button
        onClick={() => setShowModal(true)}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add Post
      </button>

      {/* PostModal */}
      {showModal && (
        <PostModal
          onClose={() => setShowModal(false)}
          onSubmit={(post) => {
            handleAddPost(post);
            setShowModal(false);
          }}
        />
      )}

      {/* Render submitted posts */}
      <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts yet.</p>
        ) : (
          posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
