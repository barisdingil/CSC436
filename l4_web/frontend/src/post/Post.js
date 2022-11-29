import React from "react";


import { ThemeContext, StateContext } from "../contexts";
import DeleteButton from './DeleteButton'
import UpdateButton from './UpdateButton'
import CheckBox from './CheckBox'
import { useState, useContext, useEffect } from "react";

import { useResource } from "react-request-hook";


function Post({ title, content, author,questionId, dateCreated, id, checked,dateCompleted}) {
  const { secondaryColor } = useContext(ThemeContext);
  const {state, dispatch} = useContext(StateContext);
  console.log("Post rendered");



  const [titleUpdated, updateTitle] = useState(title);
  const [contentUpdated, updateContent] = useState(content);

  const [edit, getEdit] = useState(false);

  const [del, deleteTodo] = useResource(() =>  ({
    url: "/posts/"+id, 
    method: "delete",
  })); 

  console.log(del);
  useEffect(deleteTodo, []); 


  function handleDelete(e) {
    if(!edit){
        e.preventDefault();
        deleteTodo();
        dispatch({
          type: "DELETE_TODO",
          id,
        });
      }
  }


  function handleEdit(e) {
      getEdit(!edit);
  }


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
    if(edit){
      e.preventDefault();
      updateTodo();
      dispatch({type:"UPDATE_TODO", titleUpdated,contentUpdated,id})
      getEdit(!edit);
}
  }


  return (
    <div>
      <div style={{border: '2px solid rgba(127, 0, 0, 0.4)', padding: '3% 5%'}}>
        {!edit && 
             <h2 style={ {display:'flex',  alignItems: 'normal', justifyContent: 'center' ,color: secondaryColor }}>{title}</h2>}
        
        {!edit &&
       <div style={ {display:'flex',  alignItems: 'normal', justifyContent: 'center' ,color: 'rgba(0, 0, 0, 1)',border: '2px solid rgba(0, 0, 0, 0.4)', padding: '3% 5%'}}>{content}</div> }


         {edit &&

          <div>Update Title:<textarea
            value={titleUpdated}
            placeholder={titleUpdated} 
            onChange={(event) => updateTitle(event.target.value)} /></div> }

       
        {edit &&
          <div>Update Content:<textarea
          value={contentUpdated}
           placeholder={contentUpdated} 
          onChange={(event) => updateContent(event.target.value)} /></div> }

       
          <br />
          <h6 style={ {display:'flex',  alignItems: 'normal',
            justifyContent: 'center' ,color: 'rgba(70, 100, 255, 0.7)'}}><br /><i>  Written by <b>{author}</b></i></h6>
      <h6 style={ {display:'flex',  alignItems: 'normal',
            justifyContent: 'center' ,color: 'rgba(0, 100, 0, 0.7)'}} > <strong>Created:&nbsp;</strong> <i> {dateCreated}</i></h6>
      <CheckBox id={id} checked = {checked} />
      <h8 style={ { display:'flex',  alignItems: 'normal',
            justifyContent: 'center' ,color: 'rgba(150, 20, 160, 0.7)'}}>
            <strong>Completed: &nbsp;</strong>  <i> {dateCompleted}</i>
      </h8>
      {true && 
        <div>
        <button type="submit" value="EDIT" style={{ float: "left" ,background:'rgba(160, 20, 0, 0.5)', color: "white", border: 0 }} onClick={e=>handleEdit(e)}>EDIT</button>

        <DeleteButton id ={id} />
        </div>
    }
      
      {true && 
            <div>
              <button type="submit" value="CANCEL" style={{ float: "left" ,background:'rgba(200, 20, 100, 0.5)', color: "white", border: 0 }} onClick={e=>handleEdit(e)}>CANCEL</button>
          <UpdateButton id ={id} titleUpdated={titleUpdated} contentUpdated={contentUpdated} />
      
            </div>
      }
  
    </div>
    </div>
    
  );
}

export default React.memo(Post);
//export default Post;
