import { Link } from "react-router-dom";
import { StoryItem } from "../components/StoryItem";
import { useStories } from "../hooks/useStories";

export default function Home() {
  const { stories, isLoading, error } = useStories("topstories");
  return (
    <div>
      <h1 className="text-4xl font-bold capitalize">Top Stories</h1>
      <div className="my-5">
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {stories && (
          <ul>
            {stories.map((story: IStory) => (
              <Link to={`story/${story.id}`} key={story.id}>
                <StoryItem story={story} />
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
