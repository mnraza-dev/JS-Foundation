import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react"

const AddHabbitForm: React.FC = () => {
    const [name, setName] = useState<String>("");
    const [frequency, setFrequency] = useState<"daily" | "weekly">("daily")
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

    }
    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <TextField id="outlined-basic" label="Enter Habbit Name" variant="outlined" fullWidth onChange={(e) => setName(e.target.value)} />
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Frequency</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={frequency}
                        label="Frequency"
                        onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}
                    >
                        <MenuItem value={"daily"}>Daily</MenuItem>
                        <MenuItem value={"weekly"}>Weekly</MenuItem>
                    </Select>
                </FormControl>
                <Button type="submit" color="primary" variant="contained">Add Habbit</Button>

            </Box>
        </form>
    )
}

export default AddHabbitForm