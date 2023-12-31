import { useEffect } from "react";
import useSWR from "swr";
import { getItem } from "../api/stories";

export const CommentItem = ({ kid }: { kid: string }) => {
  const { data, error, isLoading } = useSWR(kid, getItem);

  useEffect(() => { });

  return (
    <div className="border-l border-emerald-500 pl-4">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && <div dangerouslySetInnerHTML={{ __html: data.text }} />}
    </div>
  );
};
