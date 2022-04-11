import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


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
  return (
    <div className='contanier'>
    <Header />
    <Tasks tasks={tasks}/>
    </div>
      
  )
}

export default App
