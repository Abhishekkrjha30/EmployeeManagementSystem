/* eslint-disable react/prop-types */
import AllTask from "../componentsForcomponent/AllTask"
import CreateTask from "../componentsForcomponent/CreateTask"
import Header from "../componentsForcomponent/Header"


const AdminDashboard = (props) => {
  
  return (
    <div>
        <div className="m-8 p-4 bg-zinc-900  rounded h-full">
        <Header changeUser={props.changeUser}/>
        <CreateTask/>
        <AllTask/>
        
        </div>
    </div>
  )
}

export default AdminDashboard