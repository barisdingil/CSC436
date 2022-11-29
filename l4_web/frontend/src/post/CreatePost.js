import { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useResource } from "react-request-hook";

import { StateContext } from "../contexts";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  const checked = false;
  const dateCompleted = "";

  const { state, dispatch } = useContext(StateContext);
  const { user } = state;

  const [post, createPost] = useResource(({ title, content, author,dateCreated,questionId,checked,dateCompleted }) => ({
    url: "/posts",
    method: "post",
    data: { title, content, author, dateCreated,questionId,checked,dateCompleted},
  }));

  // ensure the newly created post didn't return an error, handle if it did
  // useEffect(() => {
  //   if (post?.data?.error) {
  //     setError(true)
  //     //alert(post.data.error.code); 
  //   }
  // }, [post]);

  return (
    <form
      onSubmit={(e) => {
        const date = new Date();
        var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate()
        + "  " + date.getHours()+":" +date.getMinutes()+":"+date.getSeconds(); 
  
        e.preventDefault();
        createPost({ title, content, author: user,questionId:uuidv4(),dateCreated:current_date,checked,dateCompleted });
        dispatch({
          type: "CREATE_POST",
          title,
          content,
          author: user,
          questionId: uuidv4(),
          dateCreated: current_date,
          checked: false,
          dateCompleted: "",
        });
        alert("TO-DO CREATED");
      }}
    >
    <br></br>
    <br></br>
      <div><label> Author: <b>{user}</b> </label></div>
      <div>
        <label htmlFor="create-title"></label>
        <input
          type="text"
          placeholder='TITLE'
          name="create-title"
          id="create-title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <textarea
        value={content}
        placeholder='CONTENT'
        onChange={(event1) => setContent(event1.target.value)}
      />
      <div><input type="submit" value="Create" /></div>
    </form>
  );
}
