import React, {createContext, useCallback, useEffect, useMemo, useState} from "react";
import {DarkTheme, LighTheme} from "@/util/theme";
import {Box, ThemeProvider} from "@mui/system";
import logger from "@/util/next-pino/logger";

interface IThemeContext {
    themeName: 'light' | 'dark'
    toggleTheme: () => void;
}

export const ThemeContext = createContext({} as IThemeContext);

interface Iprops {
    children: React.ReactNode
}

export const AppThemeProvider = (props: Iprops) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

    logger.info("RENDERIZA AppThemeProvider");
    const toggleTheme = useCallback(() => {
        logger.info("Chama toggleTheme");
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
    }, []);

    /* const toggleTheme = () => {
         logger.info("Chama toggleTheme");
         setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
     }
 */

    const theme = useMemo(() => {
        logger.info("Chama useMemo");
        if (themeName === 'light') return LighTheme;
        return DarkTheme;
    }, [themeName])

    return (
        <ThemeContext.Provider value={{themeName, toggleTheme}}>
            <ThemeProvider theme={theme}>
                <Box sx={{width: 1, height: '100%'}} bgcolor={theme.palette.background.default}>
                    {props.children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}