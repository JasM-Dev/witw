import React, { useState } from 'react';
 export const ThemeContext = React.createContext();
const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(true);
	const value = {
		theme: theme,
		setTheme: setTheme,
	};
	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
