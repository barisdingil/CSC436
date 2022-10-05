import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import UserBar from "./user/UserBar";
import PostList from "./post/PostList";
import CreatePost from "./post/CreatePost";

import appReducer from "./reducers";

function App() {
  const initialPosts = [
    {
      title: "My first post",
      content: "Some content",
      author: "Paul",
      id: uuidv4(),
      complete: false,
      dateCreated: "2022-12-12 12:12:12",
      dateCompleted: "",
    },
    {
      title: "My second post",
      content: "Some content",
      author: "Paul",
      id: uuidv4(),
      complete: false,
      dateCreated: "2022-12-12 12:12:12",
      dateCompleted: "",
    },
  ];

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: initialPosts,
  });


  return (
    <div>
      <UserBar user={state.user} dispatch={dispatch} />
      <PostList posts={state.posts} dispatch={dispatch}/>
      {state.user && (
        <CreatePost user={state.user} posts={state.posts} dispatch={dispatch} />
      )}
    </div>
  );
}

export default App;