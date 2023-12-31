import { useParams } from "react-router-dom";
import useSWR from "swr";
import instance from "../../api/instance";
import { CommentItem } from "../../components/CommentItem";

const fetcher = (id: string) =>
  instance.get(`/item/${id}.json`).then((res) => res.data);

export const Story = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useSWR(id, fetcher);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && (
        <div>
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <a
            href={data.url}
            target="_blank"
            className="text-xs italic hover:text-blue-500 hover:underline"
          >
            {data.url}
          </a>
          <hr />
          <div className="flex flex-col gap-2 py-5">
            {data.kids && data.kids.length ? (
              data.kids.map((kid: string) => (
                <CommentItem key={kid} kid={kid} />
              ))
            ) : (
              <p>No Comments</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
