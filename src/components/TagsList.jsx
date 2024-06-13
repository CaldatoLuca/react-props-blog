import { posts } from "../../posts";
import tagColor from "../../utils/tagColor";

const TagsList = () => {
  const tags = posts.reduce((acc, curr) => {
    curr.tags.forEach((t) => {
      if (!acc.includes(t)) {
        acc.push(t);
      }
    });

    return acc;
  }, []);

  return (
    <div className="col-span-1 ">
      <div className="fixed">
        <h2 className="text-emerald-500 font-semibold text-lg mb-2 ms-1">
          Tags
        </h2>

        <input
          type="text"
          placeholder="Search tag"
          className="mb-2 rounded-md bg-slate-500 bg-opacity-50 p-1 cursor-pointer focus:outline-none focus:border-transparent "
        />

        <ul>
          <li className="text-ellipsis"></li>
          {tags.map((t, i) => (
            <li
              key={`tagItem${i}`}
              className={`hover:bg-slate-500 hover:bg-opacity-50 hover:font-semibold transition px-1 rounded-md  ${tagColor(
                t
              )} cursor-pointer`}
            >
              #{t.length > 25 ? `${t.substring(0, 20)}...` : t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TagsList;
