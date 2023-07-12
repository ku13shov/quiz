import React from 'react';
import axios from 'axios';

import Game from './components/Game';
import Result from './components/Result';
import './index.scss';
import Start from './components/Start';

const App = () => {
    const [questions, setQuestions] = React.useState('');
    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);
    const [themeName, setThemeName] = React.useState('');
    const [themeIndex, setThemeIndex] = React.useState('');

    React.useEffect(() => {
        const getQuestions = async () => {
            try {
                const { data } = await axios.get('https://4805f9918df2294c.mokky.ru/questions');
                setQuestions(data);
            } catch (error) {
                console.error(error.message);
            }
        };

        getQuestions();
    }, []);

    if (!themeName) {
        return (
            <div className="App">
                <Start
                    questions={questions}
                    setThemeName={setThemeName}
                    setThemeIndex={setThemeIndex}
                />
            </div>
        );
    }

    return (
        <div className="App">
            {step < questions[themeIndex][`${themeName}`].length ? (
                <Game
                    questions={questions}
                    step={step}
                    setStep={setStep}
                    correct={correct}
                    setCorrect={setCorrect}
                    themeName={themeName}
                    themeIndex={themeIndex}
                />
            ) : (
                <Result
                    correct={correct}
                    questions={questions}
                    themeName={themeName}
                    themeIndex={themeIndex}
                />
            )}
        </div>
    );
};

export default App;
