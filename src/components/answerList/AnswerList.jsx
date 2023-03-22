import Answer from "../answer/Answer";

function AnswerList(props) {

    return (
        <div className="answer-container">
            {props.answerList.map((a, i) => <Answer key={i} id={i} answer={a}/>)}
        </div>
    );
}
export default AnswerList;
