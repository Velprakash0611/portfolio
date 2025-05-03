import React, { createContext, useContext, ReactNode } from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
};

const ThemeContext = createContext<ThemeContextType>({ isDarkMode: true });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // We're using dark mode by default as per requirements
  const isDarkMode = true;

  return (
    <ThemeContext.Provider value={{ isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};