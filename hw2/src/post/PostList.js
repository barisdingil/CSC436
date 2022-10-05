import Post from "./Post";

export default function PostList({ posts = [], dispatch}) {
  return (

    <div style={{padding: '3% 5%'}}>
      <h1> TO-DO </h1>
      {posts.map((p, i) => (
        <Post {...p} key={p.id} dispatch={dispatch}/>
      ))}
    </div>
  );
}