import Post from "./Post";

export default function PostList({ posts = [], dispatch}) {
  return (

    <div style={{padding: '3% 5%'}}>
      <h1 style={ {display:'flex',  alignItems: 'normal',
            justifyContent: 'center' ,color: 'rgba(153, 0, 0, 1)'}}> ~ TO-DO ~ </h1>
      {posts.map((p, i) => (
        <Post {...p} key={p.id} dispatch={dispatch}/>
      ))}
    </div>
  );
}