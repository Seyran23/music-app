import "../scss/components/_take-quiz.scss";
import takeQuizImg from "../images/task-square.svg";

const TakeQuiz = () => {
  return (
    <section className="take-quiz__sec">
      <div className="take-quiz__sec_content">
        <h1>Take A Quiz</h1>
        <p>
          Find Which Plan Fits <br /> You The Best
        </p>
      </div>

      <div className="quiz__interaction">
        <div className="light-bg__cycle"></div>
        <div className="quiz__interaction_container">
          <img alt="take-quiz-img" src={takeQuizImg} />
          <button className="purple-btn quiz-btn">QUIZ HERE</button>
        </div>
      </div>
    </section>
  );
};

export default TakeQuiz;
