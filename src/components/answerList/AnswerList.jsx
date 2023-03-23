import Answer from "../answer/Answer";

function AnswerList(props) {

    function onCheckedChange(id) {
        props.onChange(id);
    }

    return (
        <div className="answer-container">
            {props.answerList.map((a, i) =>
                <Answer key={i}
                    id={i}
                    answer={a}
                    onChange={(id) => onCheckedChange(id)} />)}
        </div>
    );
}
export default AnswerList;
