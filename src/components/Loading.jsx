import React from 'react';

function Loading({ errorMessage }) {
    return (
        <div>
            {errorMessage ? (
                <p className='error-message'>
                    <span>{`❗ ${errorMessage} ❗`}</span>
                    {`При загрузке данных произошла ошибка!`}
                </p>
            ) : (
                <img
                    className="start__loading"
                    src="https://cdn-icons-png.flaticon.com/512/10976/10976976.png"
                    alt="loading icon"
                />
            )}
        </div>
    );
}

export default Loading;
