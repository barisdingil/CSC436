import { v4 as uuidv4 } from "uuid";

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return action.username;
    case "LOGOUT":
      return "";
    default:
      return state;
  }
}

function postReducer(state, action) {
  const date = new Date();
  var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate()
   + "  " + date.getHours()+":" +date.getMinutes()+":"+date.getSeconds(); 
  
  switch (action.type) {
    case "CREATE_POST":
      const newPost = {
        title: action.title,
        content: action.content,
        author: action.author,
        dateCreated: current_date,
        complete: false,
        dateCompleted : "",
        id: uuidv4(),

      };
      return [newPost, ...state];
    case "CHECK":

      state.map((st,i) => {
        if(action.id === st.id && !action.checked) {
         
          state[i].complete = !action.checked;
          state[i].dateCompleted = current_date;

          return state;

        }else if ((action.id === st.id && action.checked) ){
         
          state[i].complete = !action.checked;
          state[i].dateCompleted = "";

          return state;

          }
          return state;

        })
      
      return state;
    default:
      return state;
  }
}

export default function appReducer(state, action) {
  return {
    user: userReducer(state.user, action),
    posts: postReducer(state.posts, action),
  };
}
