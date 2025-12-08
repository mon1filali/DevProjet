import React from "react";

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

interface AppTaskTable {
    tasks: Array<any>;
    onDelete: (task: Task) => void;
    onEdit: (task: Task) => void;
}

const TaskTable: React.FC<AppTaskTable> = ({ tasks, onDelete, onEdit }) => {
    const content = tasks.map(task => (
        <tr key={task.id}>
            <td>{task.taskName}</td>
            <td>{task.description}</td>
            <td>{task.dueDate}</td>
            <td>{task.taskStatus}</td>
            <td>
                <button className="danger" onClick={() => {
                    onDelete(task);
                }}>Supprimer</button>
                <button className="success" onClick={() => {
                    onEdit(task);
                }}>Editer</button>
            </td>
        </tr>

    ))

    return (
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Statut</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody id="taskTableBody">
                {content}
            </tbody>
        </table>
    );
};
export default TaskTable;