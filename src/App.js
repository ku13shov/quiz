import React from 'react';

import Game from './components/Game';
import Result from './components/Result';
import './index.scss';

const questions = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
        correct: 1,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
    },
];

const App = () => {
    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);

    return (
        <div className="App">
            {step < questions.length ? (
                <Game questions={questions} step={step} setStep={setStep} correct={correct} setCorrect={setCorrect} />
            ) : (
                <Result correct={correct} questions={questions} />
            )}
        </div>
    );
};

export default App;
