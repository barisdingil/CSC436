import React from 'react'; 
import { useState, useContext, useEffect } from "react";

import { useResource } from "react-request-hook";

import { ThemeContext, StateContext } from "../contexts";
export default function Checkbox({id, checked}) { 

const {state, dispatch} = useContext(StateContext);




const [check, setChecked] = useState(checked);
const [dat,getDate] = useState("");

 const [upd, updateTodo] = useResource(() =>  ({
    url: "/posts/"+id, 
    method: "put",
    data: {
      checked: check,
      dateCompleted: dat,
    }
  })); 
const handleChange = (event) => { 
    const date = new Date();
    var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate()
   + "  " + date.getHours()+":" +date.getMinutes()+":"+date.getSeconds(); 
   if(check) {
    getDate(current_date); }
    else { getDate("");}
    setChecked(!check);
    dispatch({ type: "TOGGLE_TODO", check,id,dat});
  }; 
  
  return (
    <div style={ {display:'flex',  alignItems: 'normal',
            justifyContent: 'center' ,color: 'rgba(150, 20, 160, 0.7)'}}>
        <input type="checkbox" value = {checked} onChange={handleChange} />
    </div>

  ); 
}; 