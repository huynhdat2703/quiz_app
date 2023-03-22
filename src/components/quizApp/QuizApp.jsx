import Question from "../question/Question";
import { useEffect } from "react";
import questionService from "../../services/QuestionService";

function QuizApp() {

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const res = await questionService.fetchData();
        console.log(res.data);
    }

    return (
        <>
            <h1>QuizApp</h1>
            <Question />
        </>
    );
}
export default QuizApp;
