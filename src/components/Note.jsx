import React from "react";
//To add an icon firstly we add "material ui/icons" dependency
//After we import this module from React framework:
//adding an icon from https://v3.material-ui.com/style/icons/
//After we add this module as an separate component in a place where we need this icon
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
