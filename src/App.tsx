import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Form from './components/layout/Form'
import { useState } from 'react'

import type { ITask } from './interfaces/Task';
import TaskList from './components/layout/TaskList';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])


  return (
    <>
      <Header/>
      <main className="main-container">
        <h1>O que você gostaria de fazer?</h1>
        <Form btnText="Criar tarefa" taskList={taskList} setTaskList={setTaskList}/>
        <TaskList taskList={taskList}/>
      </main>
      <Footer/>
    </>
  )
}

export default App
