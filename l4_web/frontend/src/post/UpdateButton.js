import React from 'react'; 
import { useState, useContext, useEffect } from "react";

import { useResource } from "react-request-hook";

import { ThemeContext, StateContext } from "../contexts";

export default function UpdateButton({ id,titleUpdated,contentUpdated}) { 
	  const {state, dispatch} = useContext(StateContext);

 const [upd, updateTodo] = useResource(() =>  ({
    url: "/posts/"+id, 
    method: "put",
    data: {
      title: titleUpdated,
      content: contentUpdated,
    }
  })); 

  console.log(upd);
  useEffect(updateTodo, []); 



  function handleUpdate(e) {
 
      e.preventDefault();
      updateTodo();
      dispatch({type:"UPDATE_TODO", titleUpdated,contentUpdated,id})

  }

	return (

		<div>
			<button type="submit" value="UPDATE" style={{ float: "right" ,background:'rgba(200, 20, 100, 0.5)', color: "white", border: 0 }} onClick={e=>handleUpdate(e)}>UPDATE</button>           
		</div>

		);
	}