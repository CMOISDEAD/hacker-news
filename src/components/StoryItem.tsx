export const StoryItem = ({ story }: { story: IStory }) => {
  return <li className="hover:text-blue-500 hover:underline">{story.title}</li>;
};
