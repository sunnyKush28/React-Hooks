import React, { useContext } from 'react';
import { ThemeContext } from '../../Store/TheamStore';

const Theme = () => {
  const { theme, dispatch } = useContext(ThemeContext);
  console.log(dispatch);
  console.log(theme);

  return (
    <div
      className={`appTheme ${theme} col-md-6 p-5  d-flex justify-content-center`}
    >
      <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default Theme;
