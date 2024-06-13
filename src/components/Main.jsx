import TagsList from "./TagsList";
import PostList from "./PostsList";

const Main = () => {
  return (
    <main className="py-10">
      <div className="grid grid-cols-7">
        <TagsList></TagsList>
        <PostList></PostList>
      </div>
    </main>
  );
};

export default Main;
