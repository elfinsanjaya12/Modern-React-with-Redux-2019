import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

// import component
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Elfin Sanjaya"
          timeAgo="Todoy A 4:46PM"
          content="Nice blog post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Itce Diasari"
          timeAgo="Todoy A 5:50PM"
          content="Oke gan"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Fari Madyan"
          timeAgo="Todoy A 10:20PM"
          content="Lanjutkan mas"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
