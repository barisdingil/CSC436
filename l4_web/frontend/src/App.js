import React, { useState, useEffect, useReducer } from "react";
import { useResource } from "react-request-hook";
import { v4 as uuidv4 } from "uuid";
        
import UserBar from "./user/UserBar";
import PostList from "./post/PostList";
import CreatePost from "./post/CreatePost";
import Header from "./Header"; 
import ChangeTheme from "./ChangeTheme";
  
import appReducer from "./reducers";
   
import { ThemeContext, StateContext } from "./contexts";

function App() {
  const initialPosts = [];

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: initialPosts,
  });
   
 
  const { user } = state;
  
  var a = "";
  useEffect(() => {
    if (user) {
      a = user+"’s Blog";
      document.title = a;
    } else {
      document.title = "Blog";
    }
  }, [user]);

  const [theme, setTheme] = useState({
    primaryColor: "deepskyblue",
    secondaryColor: "coral",
  });
         
  var user_posts = "/posts?author="+user;
   const [posts, getPosts] = useResource(() => ({
    url: "/posts?author="+user, 
    method: "get",
  }));  
            
  useEffect(getPosts, []); 
   
  useEffect(() => {
    user_posts = "/posts?author="+user;
    console.log(user_posts)
    if (posts && posts.data) {
      dispatch({ type: "FETCH_POSTS", posts: posts.data.reverse() });
    }
  }, [posts]);     

/*
  const [time, setTime] = useState(Date.now());

useEffect(() => {
  const interval = setInterval(() => setTime(Date.now()), 1500);
  return () => {
    clearInterval(interval);
  };
}, []);


*/
  return (
    <div>
      <StateContext.Provider value={{ state, dispatch }}>
        <ThemeContext.Provider value={theme}>
          <Header title={document.title }/>
          <ChangeTheme theme={theme} setTheme={setTheme} />
          <React.Suspense fallback={"Loading..."}>
            <UserBar /> 
          </React.Suspense>
            {state.user && <PostList />}
            {state.user && <CreatePost />}
        </ThemeContext.Provider>
      </StateContext.Provider>
    </div>
  );
}

export default App;
