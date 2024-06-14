// page.tsx
"use client"
import React, { createContext, useEffect, useState } from 'react';
import Form from './components/Form';
import TaskCard from './components/display/TaskCard';
import TaskView from './components/display/TaskView';

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
    updateTag:false,
    setUpdateTag: ()=>{},
});

const Page: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [updateTag, setUpdateTag] = useState<boolean>(false);

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

    const handleUpdateTask=()=>{
        console.log("hehe")
    }

    return (
        <TaskContext.Provider value={{ tasks, setTasks,updateTag,setUpdateTag }}>
            <div>
                <Form saveTask={saveTask} />
                <TaskView tasks={tasks} updateTask={updateTask} removeTask={removeTask} />
            </div>
        </TaskContext.Provider>
    );
};

export default Page;
