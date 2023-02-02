import { useFetchPost, useFetchComments } from "@/hooks";

type Props = {
  postId: number;
};

export const Post: React.FC<Props> = ({ postId }) => {
  const { data: postData, isLoading: postIsLoading } = useFetchPost(postId);
  const { data: commentsData, isLoading: commentsIsLoading } =
    useFetchComments(postId);

  return (
    <div>
      <h1>Post</h1>
      {postIsLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{postData?.title}</h2>
          <p>{postData?.body}</p>
        </div>
      )}
      <h2>Comments</h2>
      {commentsIsLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {commentsData?.map((comment) => (
            <li key={comment.id}>
              <h3>{comment.name}</h3>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
