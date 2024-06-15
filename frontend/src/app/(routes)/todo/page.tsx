// page.tsx
"use client"
import React, { createContext, useEffect, useState } from 'react';
import Form from './components/Form';
import TaskCard from './components/display/TaskCard';
import TaskView from './components/display/TaskView';
import { Box, Button, Fab, Modal, SpeedDial, Typography } from '@mui/material';
import EditRounded from '@mui/icons-material/EditRounded';

interface Task {
    id: number;
    taskName: string;
    deadline: string;
    priority: number;
    status: boolean;
}

const TaskContext = createContext<{
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    updateTag: boolean;
    setUpdateTag: React.Dispatch<React.SetStateAction<boolean>>;
}>
    ({
        tasks: [],
        setTasks: () => { },
        updateTag: false,
        setUpdateTag: () => { },
    });

const Page: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [updateTag, setUpdateTag] = useState<boolean>(false);
    const [formOpen, setFormOpen] = useState<boolean>(false);


    const handleFormOpen = () => setFormOpen(true);
    const handleFormClose = () => setFormOpen(false);


    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('todo-list-tasks') || '[]');
        setTasks(storedTasks);
    }, []);

    const saveTasksToLocalStorage = (updatedTasks: Task[]) => {
        localStorage.setItem('todo-list-tasks', JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
    };

    const saveTask = (newTask: Task) => {
        const updatedTasks = [...tasks, newTask];//apending
        saveTasksToLocalStorage(updatedTasks);
    };

    const updateTask = (updatedTask: Task) => {
        const updatedTasks = tasks.map(task =>
            task.id === updatedTask.id ? { ...task, ...updatedTask } : task
        );
        saveTasksToLocalStorage(updatedTasks);
    };

    const removeTask = (taskId: number) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        saveTasksToLocalStorage(updatedTasks);
    };

    const handleUpdateTask = () => {
        console.log("hehe")
    }

    return (
        <TaskContext.Provider value={{ tasks, setTasks, updateTag, setUpdateTag }}>
            <div>
                <Fab
                    sx={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        backgroundColor:'#3f51b5',
                        color:'white',
                    }}
                    onClick={handleFormOpen}>
                    <EditRounded />
                </Fab>
                <Modal
                    open={formOpen}
                    onClose={handleFormClose}
                    sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                    }}

                >
                    <Box
                        sx={{
                            position: 'absolute',
                            width: '90%',
                            p: 1,
                            bgcolor: 'background.paper',
                            border: '2px solid #ffffff',
                            boxShadow: 24,
                            

                        }}>
                            <Typography variant='h6'>Add your Task ✅</Typography>
                        <Form saveTask={saveTask} />
                                               
                       
                    </Box>

                </Modal>
                <TaskView tasks={tasks} updateTask={updateTask} removeTask={removeTask} />
            </div>
        </TaskContext.Provider>
    );
};

export default Page;
