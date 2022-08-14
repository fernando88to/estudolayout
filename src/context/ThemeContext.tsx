import React, {createContext, useCallback, useContext, useMemo, useState} from "react";
import {ThemeProvider} from "@mui/material";
import {DarkTheme, LighTheme} from "@/util/theme";
import {Box} from "@mui/system";
import logger from "@/util/next-pino/logger";

interface IThemeContextData {
    themeName: 'light' | 'dark'
    toggleTheme: () => void;

}

interface Iprops {
    children: React.ReactNode
}

export const ThemeContext = createContext({} as IThemeContextData);


export const AppThemeProvider = (props: Iprops) => {


    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');


    const toggleTheme = useCallback(() => {
        logger.info("Chama toggleTheme");
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
    }, []);

    const theme = useMemo(() => {
        if (themeName === 'light') return LighTheme;
        return DarkTheme;
    }, [themeName])

    return (

        <ThemeContext.Provider value={{themeName, toggleTheme}}>
            <ThemeProvider theme={theme}>
                <Box width="100vh" height="100vh" bgcolor={theme.palette.background.default}>
                    {props.children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}


