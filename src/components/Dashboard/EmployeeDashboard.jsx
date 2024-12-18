/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Header from "../componentsForcomponent/Header"
import TaskMenu from "../componentsForcomponent/TaskMenu"
import TaskList from "../Tasklist/TaskList"


const EmployeeDashboard = (props) => {
  
  
  return (
    <div className="h-full w-full">
        <div className="m-8 p-2 bg-zinc-900  rounded h-screen">
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskMenu data={props.data}/>
        <TaskList data={props.data}/>
        </div>
    
     
    
    </div>
  )
}

export default EmployeeDashboard