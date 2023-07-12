import React from 'react';

const Game = ({ questions, step, setStep, correct, setCorrect, themeName, themeIndex }) => {
    const question = questions[themeIndex][`${themeName}`][step];
    const iconPath = questions[themeIndex].icon;
    const persent = (step / questions[themeIndex][`${themeName}`].length) * 100;

    const onClickVariant = (index) => {
        setStep(step + 1);
        if (question.correct === index) {
            setCorrect(correct + 1);
        }
    };

    return (
        <>
            <img className='game-icon' src={iconPath} alt='game icon' />
            <div className="progress">
                <div style={{ width: `${persent}%` }} className="progress__inner"></div>
            </div>
            <h2>{question.title}</h2>
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
