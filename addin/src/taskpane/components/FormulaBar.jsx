import * as React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";


export const FormulaBar = () => {
    const [formula, setFormula] = useState("");

    const handleFormulaChange = (event) => {
        let newText = event.target.value;
        setFormula(newText);
    };

    return (
        <TextField
            multiline
            sx={{
                display: "flex",
                flexGrow: 1
            }}
            InputProps={{
                sx: {
                    minHeight: "100%",
                    alignItems: "start",
                }
            }}
            spellCheck={false}
            label="Formula"
            onChange={handleFormulaChange}
            value={formula}
        />
    );
};
