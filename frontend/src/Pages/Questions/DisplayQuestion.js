import React from "react";
import LeftSidebar from "../../components/LeftSideBar/LeftSideBar";
import RightSidebar from "../../components/RightSideBar/RightSideBar";
import QuestionDetails from "./QuestionDetails";

const DisplayQuestion = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
        <QuestionDetails />
        <RightSidebar />
      </div>
    </div>
  );
};

export default DisplayQuestion;