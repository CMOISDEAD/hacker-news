import { StoryList } from "../components/StoryList";

const collection = [
  {
    title: "Top Stories",
    url: "topstories",
  },
  {
    title: "New Stories",
    url: "newstories",
  },
  {
    title: "Best Stories",
    url: "beststories",
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {collection.map((collection, i) => (
          <StoryList {...collection} key={i} />
        ))}
      </div>
    </div>
  );
}
