import { FaCheck } from "react-icons/fa";
import type { ITask } from "./TaskManager";

type Props = {
    task: ITask[];
    toggleTaskCompletion: (id:number) => void;
};

const TaskItem = ({
    task,
    toggleTaskCompletion,
}: {
    task: ITask;
    toggleTaskCompletion: (id: number) => void;
})=> {
    return(
        <li
            key={task.id}
            onClick={()=> toggleTaskCompletion(task.id)}
            className={`p-4 flex justify-between items-center cursor-pointer transition hover:bg-gray-50 ${
                task.st_status ? "bg-green-50": ""
            }`}
            >
        <div className="flex items-center gap-3">
            <div 
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    task.st_status ? "bg-green-500 border-green-500" : "border-gray-300"
                }`}
            >
                {task.st_status && <FaCheck className="text-white text-xs" />}
            </div>
            <span
                className={`${
                    task.st_status ? "line-through text-gray-500" : "text-gray-800"
                }`}
            >
            {task.tx_name}
            </span>
        </div>
    </li>
    );
};