import React from 'react';
import axios from 'axios';

import Game from './components/Game';
import Result from './components/Result';
import './index.scss';

const App = () => {
    const [questions, setQuestions] = React.useState('');
    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);

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

    return (
        <div className="App">
            {step < questions.length ? (
                <Game
                    questions={questions}
                    step={step}
                    setStep={setStep}
                    correct={correct}
                    setCorrect={setCorrect}
                />
            ) : (
                <Result correct={correct} questions={questions} />
            )}
        </div>
    );
};

export default App;
