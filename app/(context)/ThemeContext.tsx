import React, { createContext, useContext, useState } from 'react';

type ThemeContextType = {
  darkMode: boolean;
  toggleDark: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleDark: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDark = () => setDarkMode((prev) => !prev);
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
