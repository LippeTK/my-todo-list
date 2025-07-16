import type { ITask } from "../../interfaces/Task"
import './TaskList.css'
interface Props{
    taskList: ITask[]
}

const TaskList = ({taskList}: Props) => {

    return(
        <>
            {taskList.length > 0 ? (
                <ul className="list">
                    {taskList.map((task) =>(
                        <div className="list-container" key={task.id}>
                            <li className="list-item">
                                <div>
                                    <h3>{task.title}</h3>
                                    <p>-{task.category}</p>
                                </div>
                                <div className="task-buttons">
                                    <p>Editar</p>
                                    <p>Excluir</p>
                                </div>
                            </li>
                        </div>
                    ) ) }
                </ul>
            ): 
            (<h1>Não há tarefas no momento</h1>)}
        </>
    )
}
export default TaskList