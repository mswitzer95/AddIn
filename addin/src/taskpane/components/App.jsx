import * as React from "react";
import { FormulaBar } from "./FormulaBar";
import { Container } from "@mui/material";

export const App = () => {
    return (
        <Container
            sx={{
                minHeight: "100vh",
                padding: "10px",
                display: "flex"
            }}
        >
            <FormulaBar />
        </Container>
    );
};
