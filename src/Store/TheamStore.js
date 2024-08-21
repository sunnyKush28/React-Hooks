import { createContext, useEffect, useReducer } from 'react';

const ThemeContext = createContext();
const intialTheme = {
  theamState: 'light',
  themCheck: function () {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  },
};

const theamReduce = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return state === 'light' ? 'dark' : 'light';
    case 'SET_LIGHT_THEME':
      return 'light';
    case 'SET_DARK_THEME':
      return 'dark';
    default:
      return state;
  }
};
const TheamProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(theamReduce, 'light', () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { TheamProvider, ThemeContext };
