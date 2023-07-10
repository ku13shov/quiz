import { Link } from "react-router-dom";

const Result = ({ correct, questions }) => {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Вы правильно ответили на {correct} вопроса из {questions.length}</h2>
            <Link >
            </Link>
            <button>Попробовать снова</button>
        </div>
    );
}

export default Result;