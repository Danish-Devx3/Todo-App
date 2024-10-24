import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import {v4 as uuid4} from 'uuid'


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleAdd=()=>{
    setTodos([...todos, {id: uuid4(), todo, isCompleted: false}])
    setTodo("")
  }

  const handleEdit=(e, id)=>{
    let t = todos.filter(i=>i.id === id) 
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id!==id
    }); 
    setTodos(newTodos)
  }

  const handleDelete=(e, id)=>{
    let newTodos = todos.filter(item=>{
      return item.id!==id
    });
    setTodos(newTodos)
  }

  const handleChange=(e)=>{
    setTodo(e.target.value)
  }

  const handleCheckbox=(e)=>{
      let id = e.target.name
      let index = todos.findIndex(item=>{
        return item.id===id
      })
    
    let newTodos=[...todos]
    newTodos[index].isCompleted=!newTodos[index].isCompleted
    setTodos(newTodos)
  }

  return (
    <>
    <Navbar/>
      <div className='container mx-auto my-5 p-5 bg-violet-100 rounded-lg min-h-[80vh]'>
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className='w-1/2'/>
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6'>Save</button>
        </div>
        <h2 className='font-semibold'>Your Todos</h2>
        <div className="todos">
          {todos.length==0 && <h2 className='mx-5'>No todos to display</h2>}
          {todos.map(item=>{
            
          
          return <div key={item.id} className="todo flex w-1/2 justify-between my-3">
            <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted} />
          <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
          <div className="buttons">
            <button onClick={(e)=>handleEdit(e, item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Edit</button>
            <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Delete</button>
          </div>
          </div>
          })}
        </div>
        
      </div>
    </>
  )
}

export default App
