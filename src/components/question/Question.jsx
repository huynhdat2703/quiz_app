import { useEffect, useState } from "react";
import AnswerList from "../answerList/AnswerList";
import ANSWER from "../../enums/ANSWER";

function Question(props) {

    const [answers, setAnswers] = useState([]);
    const [checkedAnswer, setCheckedAnswer] = useState({
        questionId: -1,
        answerId: -1,
        isCorrect: false,
    });

    useEffect(() => {
        function getAnswerList() {
            const answerList = [];
            const answersAsObj = props.question.answers;
            for (let key in answersAsObj) {
                if (answersAsObj.hasOwnProperty(key) && answersAsObj[key] !== null) {
                    answerList.push(answersAsObj[key]);
                }
            }
            return answerList;
        }
        setAnswers(getAnswerList());
    }, [props.question.answers]);

    function onCheckedChange(answerId) {
        const isCorrect = isCorrectAnswer(answerId);
        setCheckedAnswer({
            questionId: props.question.id,
            answerId: answerId,
            isCorrect: isCorrect,
        });
        props.isChecked(true);
        props.onChange(checkedAnswer);
    }

    function isCorrectAnswer(answerId) {
        for (let key in props.question.correct_answers) {
            if (props.question.correct_answers[key] === "true") {
                return answerId === ANSWER.getFromKey(key).value;
            }
        }
    }

    return (
        <div className="question-container">
            <h2 className="question">{props.question.question}</h2>
            <AnswerList answerList={answers} onChange={(id) => onCheckedChange(id)} />
        </div>
    );
}
export default Question;
