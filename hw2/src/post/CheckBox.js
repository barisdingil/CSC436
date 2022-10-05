import React, {useState} from 'react'; 

export default function Checkbox({id, dispatch}) { 

const [checked, setChecked] = useState(false);
const handleChange = (event) => { 
    
    setChecked(!checked);
    dispatch({ type: "TOGGLE_TODO", checked,id});
  }; 
  
  return (
    <div style={ {display:'flex',  alignItems: 'normal',
            justifyContent: 'center' ,color: 'rgba(150, 20, 160, 0.7)'}}>
        <input type="checkbox" value = {checked} onChange={handleChange} />
    </div>

  ); 
}; 
