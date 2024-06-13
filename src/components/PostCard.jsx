import tagColor from "../../utils/tagColor";

const PostCard = ({ title, content, image, tags, published }) => {
  return (
    <div
      className={`w-3/5 rounded-lg shadow-2xl bg-slate-700 grid grid-cols-6 ${
        published ? "" : "hidden"
      }`}
    >
      {/* Colonna destra */}
      <div className="col-span-5 p-4">
        {/* Titolo e contenuto */}
        <h3 className="text-lg font-semibold text-emerald-500 mb-2">{title}</h3>
        <p className="mb-4">{content}</p>

        {/* Immagine */}
        <div className="mb-2">
          <img src={image} alt="" className="w-full rounded-md" />
        </div>

        {/* User */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
          <span className="text-slate-200">Username</span>
        </div>
      </div>

      {/* Colonna di destra */}
      <div className="col-span-1 py-4 rounded-lg shadow-2xl bg-slate-600 flex justify-center items-center text-center">
        {/* Tags */}
        <ul>
          {tags.map((t, i) => (
            <li key={`tag${i}`} className={tagColor(t)}>
              #{t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostCard;