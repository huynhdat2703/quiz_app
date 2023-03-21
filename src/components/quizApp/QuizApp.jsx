import Question from "../question/Question";
import { useEffect } from "react";
import questionService from "../../services/QuestionService";

function QuizApp() {

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        questionService.fetchData();
    }

    return (
        <>
            <h1>QuizApp</h1>
            <Question />
        </>
    );
}
export default QuizApp;
