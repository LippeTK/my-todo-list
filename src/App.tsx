import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Form from './components/layout/Form'
import { useState } from 'react'

import type { ITask } from './interfaces/Task';
import TaskList from './components/layout/TaskList';
import Modal from './components/Modal';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [showModal, setShowModal] = useState<boolean>(false)
  const deleteTask = (id:number) => {
    setTaskList(taskList.filter((task) =>{
      return task.id !== id
    }))
  }
  return (
    <>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <Form
            btnText="Editar tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </Modal>
      )}
      <Header/>
      <main className="main-container">
        <h1>O que você gostaria de fazer?</h1>
        <Form btnText="Criar tarefa" taskList={taskList} setTaskList={setTaskList}/>
        <TaskList taskList={taskList} handleDelete={deleteTask} setShowModal={setShowModal}/>
      </main>
      <Footer/>
    </>
  )
}

export default App
