import { Link } from "react-router-dom";
import moment from "moment";
import useSWR from "swr";
import { getItem } from "../api/stories";

export const StoryItem = ({ id }: { id: string }) => {
  const { data: story, isLoading, error } = useSWR(id, getItem);

  return (
    <li className="group h-10 flex flex-col justify-between">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {story && (
        <Link to={`story/${id}`} key={id}>
          <p className="group-hover:text-blue-500 group-hover:underline truncate">
            {story.title}
          </p>
          <div className="flex content-center gap-1">
            <p className="text-xs text-gray-500">by {story.by}</p>
            <p className="text-xs text-gray-500">
              with {story.kids?.length || 0} comments
            </p>
            <p className="text-xs text-gray-500">
              {moment.unix(story.time).fromNow()} ago
            </p>
          </div>
        </Link>
      )}
    </li>
  );
};
