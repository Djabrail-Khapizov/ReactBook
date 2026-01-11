import { createContext, useReducer, useEffect } from "react";

export const ThemeContext = createContext();

function themeReducer(state, action) {
  if (action.type === "TOGGLE_THEME") {
    return { theme: state.theme === "light" ? "dark" : "light" };
  }
  return state;
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { theme: "light" });

  useEffect(() => {
    document.body.className = state.theme;
  }, [state.theme]);

  return (
    <ThemeContext.Provider value={{ theme: state.theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
