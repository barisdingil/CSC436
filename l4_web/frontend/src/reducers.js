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
  switch (action.type) {
    case "CREATE_POST":
      const newPost = {
        title: action.title,
        content: action.content,
        author: action.author,
        id: action.id,
        questionId: action.questionId,
        dateCreated: action.dateCreated,
        complete: false,
        dateCompleted : "",
      };
      return [newPost, ...state];
    case "FETCH_POSTS":
      return action.posts;

    case "UPDATE_TODO":
      state.map((st,i) => {
          if(action.id === st.id) {
            state[i].title = action.titleUpdated;
            state[i].content = action.contentUpdated;
          }     
      })
      return state;
    case "DELETE_TODO":
      state.map((st,index) => {

        if(action.id === st.id) {

            return state.splice(index, 1);
          }
          
      })
      return state;

    case "TOGGLE_TODO":

      state.map((st,i) => {
        if(action.id === st.id && !action.checked) {
         
          state[i].complete = !action.check;
          state[i].dateCompleted = action.dat;

        }else if ((action.id === st.id && action.check) ){
         
          state[i].complete = !action.check;
          state[i].dateCompleted = "";

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
