import type { ITask } from "../../interfaces/Task"
import './TaskList.css'
interface Props{
    taskList: ITask[],
    handleDelete: (id:number) => void,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const TaskList = ({taskList, handleDelete, setShowModal}: Props) => {

    return(
        <>
            {taskList.length > 0 ? (
                <div>
                    <div className="tasks-title"><h1>Minhas tarefas:</h1></div>
                    <ul className="list">
                        {taskList.map((task) =>(
                            <div className="list-container" key={task.id}>
                                <li className="list-item">
                                    <div>
                                        <h3>{task.title}</h3>
                                        <p>-{task.category}</p>
                                    </div>
                                    <div className="task-buttons">
                                        <i className="bi bi-pencil-square" onClick={() => {setShowModal(true)}}></i>
                                        <i className="bi bi-trash" onClick={() => {handleDelete(task.id)}}></i>
                                    </div>
                                </li>
                            </div>
                        ) ) }
                    </ul>
                </div>
            ): 
            (<h1>Não há tarefas no momento...</h1>)}
        </>
    )
}
export default TaskList