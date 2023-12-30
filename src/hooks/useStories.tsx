import useSWR from "swr";
import instance from "../api/instance";
import { useEffect, useState } from "react";
import { getItem } from "../api/stories";

const fetcher = (url: string): number[] =>
  instance
    .get(`${url}.json`)
    .then((res) => res.data)
    .catch((err) => console.error(err));

export const useStories = (type: string) => {
  const { data, error, isLoading } = useSWR(type, fetcher);
  const [stories, setStories] = useState<IStory[]>([]);

  useEffect(() => {
    if (!data) return;
    const list = data.slice(0, 10);
    (async () => {
      const collections = await Promise.all(
        list.map(async (id: number) => await getItem(id)),
      );
      setStories(collections);
    })();
  }, [data]);

  return {
    stories,
    error,
    isLoading: isLoading || !stories,
  };
};
