/* eslint-disable no-unused-vars */
import React,{ useState } from "react"
import { getLocalStorage } from "../../utils/LocalStorage"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

function CreateTask() {

    const [userData,setUserData] = useContext(AuthContext);


    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')
    const [newTask, setNewTask] = useState({})


    
    
   
   

    function submitHandler(e){
        e.preventDefault()
        const taskData = {
            taskTitle:taskTitle,
            taskDescription:taskDescription,
            taskDate:taskDate,
            category:category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        };
        
        console.log(taskTitle+" ",taskDescription+" "+taskDate+" "+category);
        

        setNewTask(taskData)
        
        
        let data=userData;
        

        data.forEach((emp) => {
            

            if(emp.email==asignTo){
                emp.tasks.push((taskData));
                emp.taskCount.newTasks=emp.taskCount.newTasks+1;
                
            }
            
        });
        setUserData(data)

        setTaskTitle("")
        setTaskDescription("")
        setTaskDate("")
        setCategory("")
        setAsignTo("")
    }
  return (
    <div>
        <h2 className="text-3xl font-bold mt-14 ml-5">Create Task</h2>
        <div className="p-5 mt-6 rounded ">
            
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}
            className="flex  w-full items-start justify-around">
                <div className="w-1/2">
                   <div>
                      <h3 className="font-thin">Task Title</h3>
                      <input 
                      value={taskTitle}
                      onChange={(e)=>{
                        setTaskTitle(e.target.value);
                      }}
                      className="mt-2 py-1 px-2 w-4/5 bg-transparent outline-none border-[1px] border-white rounded text-sm"  type="text" placeholder=" Make UI desion" />
                   </div>
                   <div>
                       <h3 className="font-thin">Date</h3>
                       <input 
                       value={taskDate}
                       onChange={(e)=>{
                        setTaskDate(e.target.value)
                       }}
                        className="mt-2 py-1 px-2 w-4/5 bg-transparent outline-none border-[1px] border-white rounded text-sm" type="date" placeholder=" Date" />
                   </div>
                   <div>
                       <h3 className="font-thin">Asign To</h3>
                       <input 
                       value={asignTo}
                       onChange={(e)=>{
                        setAsignTo(e.target.value)
                       }}
                        className="mt-2 py-1 px-2 w-4/5 bg-transparent outline-none border-[1px] border-white rounded text-sm" type="text" placeholder=" Employee Email" />
                   </div>
                   <div>
                       <h3 className="font-thin">Category</h3>
                       <input 
                       value={category}
                       onChange={(e)=>{
                        setCategory(e.target.value)
                       }}
                        className="mt-2 py-1 px-2 w-4/5 bg-transparent outline-none border-[1px] border-white rounded text-sm" type="text" placeholder=" Dev , Design , etc." />
                   </div>

                </div>
                
                <div className="w-1/2 flex flex-col items-end ">
                   <h3 className="font-thin">Description</h3>
                   <textarea 
                   value={taskDescription}
                   onChange={(e)=>{
                    setTaskDescription(e.target.value)
                   }}
                    className="mt-2 py-1 px-2 w-4/5 h-40 bg-transparent outline-none border-[1px] border-white rounded text-sm" name="" id="" cols="20 " rows="7" placeholder="   Detailed decription of Task"></textarea>
                   
                   <button className="mx-1 mt-4 py-2 font-semibold w-4/5 bg-red-900 rounded shadow-xl shadow-black" >Create Task</button>
                </div>
               
                
                

            </form>
        </div>
    </div>
  )
}

export default CreateTask