import { useState } from "react";

const Progress = () => {
  const [step, setStep] = useState(1);

  const prevStepHandler = () => {
    setStep((step) => step - 1);
  };

  const nextStepHandler = () => {
    setStep((step) => step + 1);
  };

  return (
    <div className="container">
      <div className="progress-container">
        <div
          className="progress"
          style={{ width: `${((step - 1) / 3) * 100}%` }}
        ></div>
        <div className={step >= 1 ? "circle active" : "circle"}>1</div>
        <div className={step >= 2 ? "circle active" : "circle"}>2</div>
        <div className={step >= 3 ? "circle active" : "circle"}>3</div>
        <div className={step >= 4 ? "circle active" : "circle"}>4</div>
      </div>
      <button
        onClick={prevStepHandler}
        className="btn"
        disabled={step === 1 ? true : false}
      >
        Prev
      </button>
      <button
        onClick={nextStepHandler}
        className="btn"
        disabled={step === 4 ? true : false}
      >
        Next
      </button>
    </div>
  );
};

export default Progress;
