import React from 'react'; 

export default function DeleteButton({ id, dispatch }) {


	return (

		<form
			onSubmit={(e) => {
				e.preventDefault();
				dispatch({
					type: "DELETE_TODO",
					id
				});
				}
			}
			>
			<input type="submit" value="DELETE" style={{ float: "right" ,background:'rgba(160, 20, 0, 0.5)', color: "white", border: 0 }}  />
		</form>

		);
	}