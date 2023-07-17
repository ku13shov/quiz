const Result = ({ correct, questions, themeName, themeIndex }) => {
    const getQuestionEnding = (number) => {
        const lastDigit = number % 10;

        if (lastDigit === 1) {
            return 'вопрос';
        }

        if (lastDigit >= 2 && lastDigit <= 4) {
            return 'вопроса';
        }

        return 'вопросов';
    };

    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="result icon" />
            <h2>
                Вы правильно ответили на {correct} {getQuestionEnding(correct)} из{' '}
                {questions[themeIndex][`${themeName}`].length}
            </h2>
            <a href="/">
                <button>Попробовать снова</button>
            </a>
        </div>
    );
};

export default Result;
