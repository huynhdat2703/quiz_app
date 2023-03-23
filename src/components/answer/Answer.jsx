function Answer(props) {

    function onCheckedChange(id) {
        props.onChange(id);
    }

    return (
        <div className="answer">
            <input type="radio"
                name="answer"
                id={props.answer}
                onChange={() => onCheckedChange(props.id)} />
            <label htmlFor={props.answer}>{props.answer}</label>
        </div>
    );
}
export default Answer;
