import { StoryItem } from "../components/StoryItem";
import useSWR from "swr";
import instance from "../api/instance";

interface Props {
  title: string;
  url: string;
}

const fetcher = (url: string) =>
  instance
    .get(`${url}.json`)
    .then((res) => res.data.slice(0, 9))
    .catch((err) => console.log(err));

export const StoryList = ({ title, url }: Props) => {
  const { data, isLoading, error } = useSWR(url, fetcher);

  return (
    <div className="p-2 border border-gray-600 h-full">
      <h1 className="text-4xl font-bold capitalize">{title}</h1>
      <div className="my-2">
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {data && (
          <ul className="flex flex-col gap-2">
            {data.map((id: string) => (
              <StoryItem key={id} id={id} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
