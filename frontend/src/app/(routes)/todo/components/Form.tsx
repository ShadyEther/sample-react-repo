import React, { useState } from 'react';
import { Box, TextField, Container, Select, MenuItem, InputLabel, FormControl, Button, Grid } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

interface FormProps {
    saveTask: (newTask: {
        id: number;
        taskName: string;
        deadline: string;
        priority: number;
        status: boolean;
    }) => void;
}

const Form: React.FC<FormProps> = ({ saveTask }) => {
    const [taskName, setTaskName] = useState('');
    const [deadline, setDeadline] = useState('');
    const [priority, setPriority] = useState<number | undefined>(1); // Default to High priority

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!taskName.trim() || !deadline || !priority) {
            return; // Don't add task if fields are empty
        }
        const id = Date.now();

        // Save task via parent component callback
        saveTask({
            id,
            taskName,
            deadline,
            priority,
            status: false, // Assuming status is default false (not completed)
        });

        // Reset form fields after submission
        setTaskName('');
        setDeadline('');
        setPriority(1);
    };

    return (
        <Container
        sx={{
            // position:'absolute'
        }}
        
        >
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} padding={'2%'} justifyContent={'center'} alignItems={'center'}>
                    <Grid item xs={12} sm={12} md={7}>
                        <TextField
                            type="text"
                            label="Task Name 📄"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={5} sm={5} md={2}>
                        <TextField
                            label="Deadline ⌛"
                            name="date"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value)}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={4} sm={4} md={2}>
                        <FormControl fullWidth>
                            <InputLabel id="priority-label">Priority ❗</InputLabel>
                            <Select
                                label="Priority ❗"
                                value={priority}
                                onChange={(e) => setPriority(Number(e.target.value))}
                            >
                                <MenuItem value={1}>High</MenuItem>
                                <MenuItem value={2}>Medium</MenuItem>
                                <MenuItem value={3}>Low</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={3} sm={3} md={1}>
                        <Button type="submit" variant="contained" fullWidth>
                            <AddRoundedIcon />
                            <span>Add</span>
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default Form;
