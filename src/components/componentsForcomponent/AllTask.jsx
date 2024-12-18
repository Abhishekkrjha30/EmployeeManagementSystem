
/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"


function AllTask() {

   const [userData,setUserData] = useContext(AuthContext);
   
 
   

  return (
    <div  className="p-4 rounded mt-5   ">
<div className="border-2 border-red-800 mb-3  p-4 flex justify-between rounded ">
            <h2 className="text-lg w-1/5 font-medium">Employee Name </h2>
            <h5 className="text-lg w-1/5 font-medium">New Task</h5>
            <h5 className="text-lg w-1/5 font-medium">Active Task</h5>
            <h5 className="text-lg w-1/5 font-medium">Completed </h5>
            <h5 className="text-lg w-1/5 font-medium">Failed </h5>
        </div>

        <div  className="">
        {userData?.map((emp,idx)=>{
          
            return <div key={idx} className="border-2 border-emerald-800 mb-3  p-4 flex justify-between rounded">
            <h2 className="text-lg w-1/5   font-semibold ">{emp.name}</h2>
            <h5 className="text-lg w-1/5 text-blue-600  font-medium ">{emp.taskCount.newTasks}</h5>
            <h5 className="text-lg w-1/5 text-yellow-600 font-medium">{emp.taskCount.activeTasks}</h5>
            <h5 className="text-lg w-1/5 text-green-600 font-medium">{emp.taskCount.completedTasks}</h5>
            <h5 className="text-lg w-1/5 text-red-600 font-medium ">{emp.taskCount.failedTasks}</h5>
        </div>
    
        })}
        </div>

        

       
    </div>
  )
}

export default AllTask