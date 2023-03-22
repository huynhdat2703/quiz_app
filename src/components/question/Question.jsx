import { useEffect, useState } from "react";
import AnswerList from "../answerList/AnswerList";

function Question(props) {

    const [answers, setAnswers] = useState([]);

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

    return (
        <div className="question-container">
            <h2 className="question">{props.question.question}</h2>
            <AnswerList answerList={answers}/>
        </div>
    );
}
export default Question;
