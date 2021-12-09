import questionsAPI from "../apis/questions";

const sendAnswer = (choice_id) => {
  try {
    questionsAPI.post("/stats/answerquestion", {
      choice_id: choice_id,
    });
  } catch (err) {
    console.log(err);
  }
};

export default sendAnswer;
