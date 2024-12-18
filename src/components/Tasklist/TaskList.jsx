/* eslint-disable react/jsx-key */
 /* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

function TaskList({data}) {
  
  return (
    
    <div id="tasklist" className=" py-5 h-[55%] w-full overflow-x-auto  flex items-center justify-start gap-10 flex-nowrap mt-10">
       
       {data.tasks.map((elem,idx)=>{
       
        
               
            if(elem.active){
              console.log("active");
              
              return <AcceptTask key={idx} data={elem}  />
            }
            if(elem.newTask){
              console.log(elem);
              return <NewTask key={idx} data={elem} />
           }
            if(elem.completed){
              return <CompleteTask key={idx} data={elem} /> 
            }
            if(elem.failed){
              return <FailedTask key={idx} data={elem} />
            }
               

       })}
       
      

    </div>
  )
}

export default TaskList