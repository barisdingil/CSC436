import React from 'react'; 
import { useState, useContext, useEffect } from "react";

import { useResource } from "react-request-hook";

import { ThemeContext, StateContext } from "../contexts";

export default function DeleteButton({ id}) { 
	  const {state, dispatch} = useContext(StateContext);
 const [del, deleteTodo] = useResource(() =>  ({
    url: "/posts/"+id, 
    method: "delete",
  })); 

  console.log(del);
  useEffect(deleteTodo, []); 


  function handleDelete(e) {

        e.preventDefault();
        deleteTodo();
        dispatch({
          type: "DELETE_TODO",
          id,
        });
      
  }

	return (

		<div>
			<button type="submit" value="DELETE" style={{ float: "right" ,background:'rgba(160, 20, 0, 0.5)', color: "white", border: 0 }} onClick={e=>handleDelete(e)}>DELETE</button>
		</div>

		);
	}