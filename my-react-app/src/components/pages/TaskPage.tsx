import React, { useEffect, useState } from "react";
import TaskForm from "./TaskPage/TaskForm";
import TaskTable from "./TaskPage/TaskTable";

interface HomePage {
    closeSidebar: () => void;
}

interface Task {
    id: string;
    taskName: string;
    description: string;
    dueDate: string;
    remuneration: number;
    vehicle: boolean;
    mode: string;
    taskStatus: string;
}

const TaskPage: React.FC<HomePage> = ({ closeSidebar }) => {
    const [tasks, setTasks] = useState<Array<Task>>([]);
    const [editingTask, setEditingTask] = useState<Task | null>(null)

    const getTasks = async () => {
        try {
            const response = await fetch("http://localhost:4000/tasks",
                { method: "GET" });
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleDeleteTask = async (task: Task) => {
        const newTasks = tasks.filter(temp => temp.id !== task.id)
        setTasks(newTasks);
    }

    const deleteTask = async (task: Task) => {
        const id = task.id;
        window.confirm();
        const newTasks = await fetch(`http://localhost:4000/tasks/${id}`, { method: "DELETE" });
        if (newTasks.ok) {
            handleDeleteTask(task);
        }
    }

    const handleEditClick = (task: Task) => {
        setEditingTask(task);
    }

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <main className="main-content" onClick={closeSidebar}>
            <aside>
                <TaskForm editingTask={editingTask} setEditingTask={setEditingTask} />
                <TaskTable tasks={tasks} onDelete={deleteTask} onEdit={handleEditClick} />
            </aside>
        </main>
    );
};
export default TaskPage;