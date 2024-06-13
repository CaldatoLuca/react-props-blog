const tagColor = (tag) => {
  switch (tag) {
    case "js":
      return "text-yellow-500";
    case "html":
      return "text-orange-500";
    case "css":
      return "text-blue-400";
    case "php":
      return "text-purple-400";
    case "react":
      return "text-cyan-400";
    case "mysql":
      return "text-teal-500";
    case "git":
      return "text-red-400";
    case "typescript":
      return "text-indigo-400";
    case "flutter":
      return "text-blue-400";
    case "docker":
      return "text-blue-500";
    case "node.js":
      return "text-green-300";
    case "express.js":
      return "text-gray-500";
    case "webpack":
      return "text-blue-600";
    default:
      return "text-slate-400";
  }
};

export default tagColor;
