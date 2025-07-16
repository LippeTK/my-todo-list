import './Form.css'

import type { ITask } from '../../interfaces/Task'
import { useState, type ChangeEvent, type FormEvent } from 'react'

interface Props{
    btnText:string,
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form({btnText, taskList, setTaskList}:Props){

    const [title, setTitle] = useState<string>("")
    const [category, setCategory] = useState<string>("work")

    const addTask = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const id = Math.floor(Math.random() * 10000)
        
        const newTask: ITask = {id, title, category}

        setTaskList!([...taskList, newTask])
        setTitle("")
    }

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        if (e.target.name === "title"){
            setTitle(e.target.value)
        }else{
            setCategory(e.target.value)
        }
    }
    return(
        <div>
            <form onSubmit={addTask} className="form">
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