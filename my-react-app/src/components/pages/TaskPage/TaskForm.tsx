import { useEffect, useState } from "react";

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

interface AppTaskForm {
    editingTask: Task | null;
    setEditingTask: any;
}


const TaskForm: React.FC<AppTaskForm> = ({ editingTask, setEditingTask }) => {
    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [remuneration, setRemuneration] = useState<number | "">("");
    const [vehicle, setVehicle] = useState(false);
    const [mode, setMode] = useState("manuel");
    const [taskStatus, setTaskStatus] = useState("ouverte");

    const handleSubmit = async () => {
        try {
            if (editingTask) {
                fetch(`http://localhost:4000/tasks/${editingTask.id}`,
                    {
                        method: 'PUT',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            taskName,
                            description,
                            dueDate,
                            remuneration,
                            vehicle,
                            mode,
                            taskStatus
                        })
                    }
                )
            } else {

                const taskname = (document.getElementById("taskName") as HTMLInputElement).value;
                const descriptions = (document.getElementById("description") as HTMLInputElement).value;
                const duedate = (document.getElementById("dueDate") as HTMLInputElement).value;
                const remunerations = (document.getElementById("remuneration") as HTMLInputElement).value;
                const vehicles = (document.getElementById("vehicle") as HTMLInputElement).value;
                const modes = (document.getElementById("mode") as HTMLInputElement).value;
                const statuts = (document.getElementById("statut") as HTMLInputElement).value;
                fetch("http://localhost:4000/tasks",
                    {
                        method: 'POST',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            taskName: taskname,
                            description: descriptions,
                            dueDate: duedate,
                            remuneration: remunerations,
                            vehicle: vehicles,
                            mode: modes,
                            taskStatus: statuts
                        })
                    }
                )
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (editingTask) {
            setTaskName(editingTask.taskName);
            setDescription(editingTask.description);
            setDueDate(editingTask.dueDate);
            setRemuneration(editingTask.remuneration);
            setVehicle(editingTask.vehicle);
            setMode(editingTask.mode);
            setTaskStatus(editingTask.taskStatus);
        }
        console.log(editingTask + "huh")
    }, [editingTask]);

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="taskName">Nom:</label>
            <input type="text" id="taskName" name="taskName" required placeholder="Nom de la tache"
                aria-required="true" value={taskName} onChange={(e) => {
                    setTaskName(e.target.value);
                }} /> <br></br>

            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" required placeholder="Details de la tache"
                aria-required="true" value={description} onChange={(e) => {
                    setDescription(e.target.value);
                }}></textarea> <br></br>

            <label htmlFor="dueDate">Date:</label>
            <input type="date" id="dueDate" name="dueDate" aria-required="true" value={dueDate} onChange={(e) => {
                setDueDate(e.target.value);
            }} /> <br></br>

            <label htmlFor="remuneration">remuneration:</label>
            <input type="number" id="remuneration" name="remuneration" aria-required="true" value={remuneration} onChange={(e) => {
                setRemuneration(Number(e.target.value));
            }} /> <br></br>

            <label htmlFor="vehicle">Besoin de vehicule:</label>
            <input type="checkbox" id="vehicle" name="vehicle" aria-required="true" value={vehicle.toString()} onChange={(e) => {
                setVehicle(e.target.checked);
            }} /> <br></br>

            <label htmlFor="mode">Mode d'affectation </label>
            <select name="mode" id="mode" value={mode}
                onChange={(e) => {
                    setMode(e.target.value);
                }}>
                <option value="manuel">Manuel</option>
                <option value="semi">semi-automatise</option>
                <option value="auto">Automatise</option>
            </select><br />

            <label htmlFor="status">Status :</label>
            <select name="statut" id="statut" value={taskStatus}
                onChange={(e) => {
                    setTaskStatus(e.target.value);
                }}>
                <option value="ouverte">Ouverte</option>
                <option value="en-cours">En cours</option>
                <option value="terminee">terminee</option>
            </select><br />

            <button className="submit-btn" type="submit">{editingTask ? "Modifer Tache" : "Ajouter Tache"}</button>
        </form >
    );
};
export default TaskForm;