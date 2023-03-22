import Question from "../question/Question";
import { useEffect, useState } from "react";
import questionService from "../../services/QuestionService";

function QuizApp() {

    const [questionList, setQuestionList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const res = await questionService.fetchData();
            console.log(res.data);
            setQuestionList(res.data);
        }

        fetchData();
    }, []);

    function onNextBtnCLick(counter) {
        setCurrentIndex(current => current + counter);
    }

    function onFinishBtnCLick() {
        console.log("FINISH");
    }

    return (
        <div className="container">
            <h1>QuizApp</h1>
            {questionList.length > 0 &&
            <>
                <Question question={questionList[currentIndex]} />
                {currentIndex < 9 && <input type="button" value="NEXT >>>" onClick={() => onNextBtnCLick(1)} />}
                {currentIndex >= 9 && <input type="button" value="FINISH !" onClick={() => onFinishBtnCLick()} />}
            </>
            }
        </div>
    );
}
export default QuizApp;
