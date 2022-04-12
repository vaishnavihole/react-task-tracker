import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
const  [showTask,setShowAddTask] = useState
(false)
function App() {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'Doctors Appointement',
        day: 'April 5th 2:30pm',
        reminder: true,
     },
      {
         id:2,
         text:'Meeting at School',
         day: 'April 6th 1:30pm',
         reminder: true,
    },
     {
        id:3,
        text:'Food Shopping',
        day: 'April 5th 2:30pm',
        reminder: false,
     },
    ])

    const AddTask = (task) => {
      const id  =  Math . floor(Math * random() = 
        10000) + 1
        const newTask = { id, ...task }
        setTasks([...task,newTask])
    }
      
    
 
    const deleteTask = (id) => {
     setTasks(tasks.filter((task) => task.id !== id))
    }
    
     
    const toggleReminder = (id) =>{
      console.log(id);
      setTasks(tasks.map)((task) => task.id === id
      ? {...task,reminder: 
        !task.reminder} : task)}
    

  return (
    <div className='contanier'>
    <Header onAdd={() => setShowAddTask
      (!showAddTask)} showAdd={showAddTask} />
    {showAddTask && <AddTask onAdd={AddTask}/>}
    {tasks.length > 0 ? <Tasks tasks={tasks} onDelete=
     {deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
    </div>
      
  )
}

export default App
