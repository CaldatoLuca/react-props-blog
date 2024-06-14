import TagsList from "./TagsList";
import PostList from "./PostsList";
import { useState } from "react";

const Main = () => {
  const [selectedTag, setSelectedTag] = useState([]);
  const handleTagClick = (tag) => {
    setSelectedTag([...selectedTag, tag]);
  };
  const handleTagRemove = (tag) => {
    setSelectedTag(selectedTag.filter((t) => t !== tag));
  };
  const handleTagEmpty = () => {
    setSelectedTag([]);
  };

  return (
    <main className="py-10">
      <div className="grid grid-cols-7">
        <TagsList onTagClick={handleTagClick}></TagsList>
        <PostList
          selectedTag={selectedTag}
          onXClick={handleTagRemove}
          onClearClick={handleTagEmpty}
        ></PostList>
      </div>
    </main>
  );
};

export default Main;
