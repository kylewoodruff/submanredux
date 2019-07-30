import React from "react";


function DeleteBtn(props) {
  return (
    <button className="btn btn-danger delete-btn" {...props} role="button" tabIndex="0" >
      Delete Show
    </button>
  );
}

export default DeleteBtn;