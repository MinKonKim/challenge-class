import { useLoaderData } from "react-router-dom";

const PostDetailPage = () => {
  const post = useLoaderData();
  return (
    <div>
      <h1>PostDetailPage</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetailPage;
