import Question from "../question/Question";
import { useEffect, useState } from "react";
import questionService from "../../services/QuestionService";

function QuizApp() {

    const [questionList, setQuestionList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnswerChecked, setIsAnswerChecked] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const res = await questionService.fetchData();
            console.log(res.data);
            setQuestionList(res.data);
        }

        fetchData();
    }, []);

    function onNextBtnCLick(counter) {
        if (isAnswerChecked) {
            setCurrentIndex(current => current + counter);
            setIsAnswerChecked(false);
        }
    }

    function onFinishBtnCLick() {
        console.log("FINISH");
    }

    function onCheckedChange(checkedAnswer) {

    }

    function isChecked(value) {
        setIsAnswerChecked(value);
    }

    return (
        <div className="container">
            <h1>QuizApp</h1>
            {questionList.length > 0 &&
            <>
                <Question
                question={questionList[currentIndex]}
                isChecked={(value) => isChecked(value)}
                onChange={(checkedAnswer) => onCheckedChange(checkedAnswer)} />
                {currentIndex < 9 && <input type="button" value="NEXT >>>" onClick={() => onNextBtnCLick(1)} />}
                {currentIndex >= 9 && <input type="button" value="FINISH !" onClick={() => onFinishBtnCLick()} />}
            </>
            }
        </div>
    );
}
export default QuizApp;
