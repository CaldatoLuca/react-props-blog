import PostCard from "./PostCard";
import { posts } from "../../posts";

const PostList = () => {
  return (
    <div className="col-span-6 flex flex-col items-center gap-10 ">
      {posts.map((p) => (
        <PostCard
          title={p.title}
          image={p.image}
          content={p.content}
          tags={p.tags}
          published={p.published}
          key={p.id}
        ></PostCard>
      ))}
    </div>
  );
};

export default PostList;
