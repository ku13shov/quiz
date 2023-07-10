import React from 'react';

const Game = ({ questions, step, setStep, correct, setCorrect }) => {
    const question = questions[step];
    const persent = (step / questions.length) * 100;

    const onClickVariant = (index) => {
        setStep(step + 1);
        if (question.correct === index) {
            setCorrect(correct + 1);
        }
    };

    return (
        <>
            <div className="progress">
                <div style={{ width: `${persent}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((variant, i) => (
                    <li onClick={() => onClickVariant(i)} key={variant}>
                        {variant}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Game;
