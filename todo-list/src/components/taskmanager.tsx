import { useState } from "react";
import TaskInput from "./taskinput";
export interface ITask {
    id: number;
    tx_name: string;
    st_status: boolean;
}

const TaskManager = () => {
    const[tasks,setTasks] = useState<ITask[]>([]);

    const addTask = (title: string) => {
        const newTask = {
            id: tasks.length + 1,
            tx_name:title,
            st_status: false,
        };
        setTasks([...tasks, newTask]);
    };

    const toggleTaskCompletion = (id:number) => {
        setTasks(
            tasks.map((task) =>
                task.id === id? {...task, st_status: !task.st_status}: task
            )
        );
    }

    return (
        <div className="flex flex-col items-center gab-y-6 p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg min-w-[40%]">
            <h1 className="text-3x1 font-bold text-indigo-700">Gestor de Tareas</h1>

            <TaskInput addTask={addTask} />
        </div>  
    );
};

export default TaskManager;


