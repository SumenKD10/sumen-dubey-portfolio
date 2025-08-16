import { ThemeProvider as NextThemeProvider } from "next-themes";
import { createContext, useContext } from "react";

const ThemeContext = createContext({});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <ThemeContext.Provider value={{}}>
        {children}
      </ThemeContext.Provider>
    </NextThemeProvider>
  );
};