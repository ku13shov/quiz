const Start = ({ questions, setThemeName, setThemeIndex }) => {
    const selectThemeHandler = (themeName, themeIndex) => {
        setThemeName(themeName);
        setThemeIndex(themeIndex);
    };

    return (
        <div className="start">
            <img
                className="start__img"
                src="https://cdn-icons-png.flaticon.com/512/8476/8476172.png"
                alt="Frontend Quiz icon"
            />
            <h1>Frontend Quiz</h1>

            <ul>
                {!questions ? (
                    <img
                        className="start__loading"
                        src="https://cdn-icons-png.flaticon.com/512/10976/10976976.png"
                        alt="loading icon"
                    />
                ) : (
                    questions.map((item, i) => {
                        const themeName = Object.keys(item)[0];

                        return (
                            <li
                                key={themeName}
                                onClick={() => {
                                    selectThemeHandler(themeName, i);
                                }}>
                                {themeName}
                                <img className="start__icon" src={item.icon} alt="icon" />
                            </li>
                        );
                    })
                )}
            </ul>
        </div>
    );
};

export default Start;
