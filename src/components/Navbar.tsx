import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between content-center items-center gap-2 w-full mb-5 border-b border-gray-600">
      <Link className="text-2xl font-bold capitalize" to="/">
        Hacker News
      </Link>
      <div className="flex gap-2">
        <a href="/#">New</a>
        <a href="/#">Top</a>
        <a href="/#">Best</a>
      </div>
    </div>
  );
};
