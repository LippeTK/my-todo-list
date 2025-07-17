import './Form.css'

import type { ITask } from '../../interfaces/Task'
import { useState, type ChangeEvent, type FormEvent, useEffect } from 'react'

interface Props{
    btnText:string,
    taskList: ITask[],
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>,
    task?: ITask | null,
    handleUpdate?(id:number, title:string, category:string): void 
}

function Form({btnText, taskList, setTaskList, task, handleUpdate}:Props){

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [category, setCategory] = useState<string>("Trabalho")

    useEffect(() => {
        if(task) {
            setId(task.id)
            setTitle(task.title)
            setCategory(task.category)
        }
    }, [task])

    const addOrUpdateTask = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(handleUpdate){
            handleUpdate(id, title, category)
        }else{
        const id = Math.floor(Math.random() * 10000)
        
        const newTask: ITask = {id, title, category}

        setTaskList!([...taskList, newTask])
        setTitle("")
        }
    }

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        if (e.target.name === "title"){
            setTitle(e.target.value)
        }else{
            setCategory(e.target.value)
        }
    }
    return(
        <div className='form-container'>
            <form onSubmit={addOrUpdateTask} className="form">
                <div className='input-container'>
                    <label>Título:</label>
                    <input type="text" name="title" value={title} onChange={handleChange} />
                </div>
                <div className='input-container'>
                    <label>Categoria:</label>
                    <select name="category" onChange={handleChange}>
                        <option value="Trabalho">Trabalho</option>
                        <option value="Estudos">Estudos</option>
                        <option value="Saúde">Saúde</option>
                        <option value="Pessoal">Pessoal</option>
                    </select>
                </div>
                <input type="submit" value={btnText}/>
            </form>
        </div>
    )
}
export default Form