import React, { useState } from 'react';
import { Card, Checkbox, IconButton, Typography, TextField, FormControl, MenuItem, Select, InputLabel, Grid } from '@mui/material';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface Task {
    id: number;
    taskName: string;
    deadline: string;
    priority: number;
    status: boolean;
}

interface TaskCardProps {
    task: Task;
    updateTask: (updatedTask: Task) => void;
    removeTask: (taskId: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, updateTask, removeTask }) => {

    const getColor = (value: any): string => {
        switch (value) {
            case 1:
                return '#ffb5b5';
            case 2:
                return '#def6ff';
            case 3:
                return '#feffb5';
            case true:
                return '#b5ffbc';
            default:
                return 'white';
        }
    };

    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState<Task>({
        id: task.id,
        taskName: task.taskName,
        deadline: task.deadline,
        priority: task.priority,
        status: task.status,
    });

    const handleUpdateTaskStatus = () => {
        const updatedTask = { ...task, status: !task.status };
        updateTask(updatedTask);
    };

    const handleEditTask = () => {
        setIsEditing(true);
    };

    const handleSaveEdit = () => {
        updateTask(editedTask);
        setIsEditing(false);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditedTask({
            id: task.id,
            taskName: task.taskName,
            deadline: task.deadline,
            priority: task.priority,
            status: task.status,
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEditedTask({
            ...editedTask,
            [e.target.name]: e.target.value,
        });
    };

    const handlePriorityChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setEditedTask({
            ...editedTask,
            priority: e.target.value as number,
        });
    };

    const handleDeleteTask = () => {
        removeTask(task.id);
    };

    const backgroundColor = () => {
        return task.status ? getColor(task.status) : getColor(task.priority);
    };

    if (isEditing) {
        return (
            <Card
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1em',
                    gap: '1em',
                    backgroundColor: backgroundColor,
                    flexWrap: 'wrap',
                }}
            >
                <TextField
                    label='Task Name'
                    name='taskName'
                    value={editedTask.taskName}
                    onChange={handleChange}
                    variant='standard'
                    fullWidth
                />

                <TextField
                    label='Deadline'
                    name='deadline'
                    type='date'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={editedTask.deadline}
                    onChange={handleChange}
                    variant='standard'
                    fullWidth
                />

                <FormControl variant='standard' fullWidth>
                    <InputLabel id='priority-label'>Priority</InputLabel>
                    <Select
                        labelId='priority-label'
                        label='Priority'
                        value={editedTask.priority}
                        onChange={handlePriorityChange}
                    >
                        <MenuItem value={1}>High</MenuItem>
                        <MenuItem value={2}>Medium</MenuItem>
                        <MenuItem value={3}>Low</MenuItem>
                    </Select>
                </FormControl>

                <div>
                    <IconButton onClick={handleSaveEdit}>
                        <DoneRoundedIcon />
                    </IconButton>
                    <IconButton onClick={handleCancelEdit}>
                        <CloseRoundedIcon />
                    </IconButton>
                </div>
            </Card>
        );
    } else {
        return (
            <Card
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1em',
                    gap: '1em',
                    backgroundColor: backgroundColor,
                    flexWrap: 'wrap',
                }}
            >
                <TextField
                    label='Task Name'
                    name='taskName'
                    value={editedTask.taskName}
                    onChange={handleChange}
                    variant='standard'
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                />

                <TextField
                    label='Deadline'
                    name='deadline'
                    type='date'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={editedTask.deadline}
                    onChange={handleChange}
                    variant='standard'
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                />

                <FormControl
                    sx={{
                        "& .MuiInputBase-input.Mui-disabled": {
                            WebkitTextFillColor: "#000000",
                        },
                    }}
                    variant='standard'
                    disabled={true}
                    fullWidth
                >
                    <InputLabel id='priority-label'>Priority</InputLabel>
                    <Select
                        labelId='priority-label'
                        label='Priority'
                        value={editedTask.priority}
                        onChange={handlePriorityChange}
                    >
                        <MenuItem value={1}>High</MenuItem>
                        <MenuItem value={2}>Medium</MenuItem>
                        <MenuItem value={3}>Low</MenuItem>
                    </Select>
                </FormControl>

                <div>
                    <Checkbox
                        icon={<CheckCircleOutlineRoundedIcon />}
                        checkedIcon={<CheckCircleRoundedIcon />}
                        checked={task.status}
                        onChange={handleUpdateTaskStatus}
                        sx={{
                            width: '25%'
                        }}
                    />
                    <IconButton onClick={handleEditTask}>
                        <EditRoundedIcon />
                    </IconButton>
                    <IconButton onClick={handleDeleteTask}>
                        <DeleteRoundedIcon />
                    </IconButton>
                </div>
            </Card>
        );
    }
};

export default TaskCard;
