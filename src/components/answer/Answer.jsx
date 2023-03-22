function Answer(props) {
    return (
        <div className="answer">
            <input type="radio" name="answer" id={props.id} />
            <label htmlFor={props.id}>{props.answer}</label>
        </div>
    );
}
export default Answer;
