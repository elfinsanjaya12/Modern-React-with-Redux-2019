import React from "react";
import ReactDOM from "react-dom";

// import component
import CommentDetail from "./components/CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Elfin Sanjaya" />
      <CommentDetail author="Itce Diasari" />
      <CommentDetail author="Fari Madyan" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
