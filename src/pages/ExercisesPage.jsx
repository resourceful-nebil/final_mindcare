import React, { useState } from "react";
import MindfulnessExercise from "./Exercises/Mindfulness";
import RelaxationExercise from "./Exercises/Relaxation";
import StressReductionTechnique from "./Exercises/StressReduction";
import "./ExercisesPage.css";

// import Arrow from "../asset/arrow.png";
import photo from '../asset/photo.jpg'


const ExercisesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseSelect = (event) => {
    setSelectedExercise(event.target.value);
  };

  const renderExercise = () => {
    switch (selectedExercise) {
      case "relaxation":
        return <RelaxationExercise />;
      case "mindfulness":
        return <MindfulnessExercise />;
      case "stressReduction":
        return <StressReductionTechnique />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="ourteam">
        <div className="ourteamTitles">
          <span className="ourteamTitleLg">Exercises</span>
        </div>
        <img className="ourteamImg" src={photo} alt="" />
      </div>
      {/* <h1>MindCare Exercises</h1> */}
      <div className="select-container">
        <select
          className="select-box"
          value={selectedExercise}
          onChange={handleExerciseSelect}
        >
          <option value="">Select an Exercise</option>
          <option value="relaxation">Relaxation Exercise</option>
          <option value="mindfulness">Mindfulness Exercise</option>
          <option value="stressReduction">Stress Reduction Technique</option>
        </select>
      </div>

      <div className="exercise-container">{renderExercise()}</div>
    </div>
  );
};

export default ExercisesPage;

{
  /* <div className="icon-container">
<img src={Arrow} alt="" />

</div> */
}
