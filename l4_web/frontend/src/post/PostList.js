import { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useResource } from "react-request-hook";
import Post from "./Post";

import { StateContext } from "../contexts";

export default function PostList() {
  const { state } = useContext(StateContext);
  const { posts } = state;
console.log( posts);
  console.log(typeof posts.data);
  return (
    <a>
      {(typeof posts !== 'undefined') ? posts?.map((p, i) => (
        <Post {...p} key={p.id} />
      )): null}

    </a>

  );
}
