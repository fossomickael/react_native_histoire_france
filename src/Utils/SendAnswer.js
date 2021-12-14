import questionsAPI from "../apis/questions";

const sendAnswer = (choice_id, timeToAnswer) => {
  try {
    questionsAPI.post("/stats/answerquestion", {
      choice_id: choice_id,
      seconds: timeToAnswer,
    });
  } catch (err) {
    console.log(err);
  }
};

export default sendAnswer;
