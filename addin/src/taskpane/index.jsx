import * as React from "react";
import { createRoot } from "react-dom/client";
import { App }  from "./components/App";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});
const lightTheme = createTheme({
    palette: {
        mode: "light"
    }
});

const rootElement = document.getElementById("container");
const root = createRoot(rootElement);

/* Render application after Office initializes */
Office.onReady(() => {
    root.render(
        <ThemeProvider theme={lightTheme}>
            <CssBaseline>
                <App />
            </CssBaseline>
        </ThemeProvider>
    );
});

if (module.hot) {
    module.hot.accept("./components/App", () => {
        const NextApp = require("./components/App").default;
        root.render(NextApp);
    });
}
