import React from 'react'; 
import CheckBox from './CheckBox'
export default function Post({ title, content, author,dateCreated, complete, dateCompleted,id,dispatch}) {

  return (

    <div style={{border: '2px solid rgba(127, 0, 0, 0.4)', padding: '3% 5%'}}>

    	<h2 style={ {display:'flex',  alignItems: 'normal',
    				justifyContent: 'center' ,color: 'rgba(150, 20, 160, 0.7)'}}>{title}</h2>
    	<h8 style={ {display:'flex',  alignItems: 'normal',
    				justifyContent: 'center' ,color: 'rgba(70, 100, 255, 0.7)'}}><br /><i>  Written by <b>{author}</b></i></h8>
		<h8 style={ {display:'flex',  alignItems: 'normal',
    				justifyContent: 'center' ,color: 'rgba(0, 100, 0, 0.7)'}} > <strong>Created:&nbsp;</strong> <i> {dateCreated}</i></h8>
    	<div style={ {display:'flex',  alignItems: 'normal',
    				justifyContent: 'center' ,color: 'rgba(0, 0, 0, 1)',border: '2px solid rgba(0, 0, 0, 0.4)', padding: '3% 5%'}}>{content}</div>

    	<CheckBox id={id} dispatch={dispatch}/>
    	<h8 style={ { display:'flex',  alignItems: 'normal',
            justifyContent: 'center' ,color: 'rgba(150, 20, 160, 0.7)'}}>
            <strong>Completed: &nbsp;</strong>  <i> {dateCompleted}</i>
      </h8>

    </div>
  );
}
