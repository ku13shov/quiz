const Result = ({ correct, questions, themeName, themeIndex }) => {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="result icon" />
            <h2>
                Вы правильно ответили на {correct} вопроса из {questions[themeIndex][`${themeName}`].length}
            </h2>
            <a href="/">
                <button>Попробовать снова</button>
            </a>
        </div>
    );
};

export default Result;
