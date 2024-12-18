/* eslint-disable react/prop-types */



const TaskMenu = ({data}) => {
  
  return (
    <div className="flex justify-between gap-5 screen mt-10">
      <div className=" w-[40%] px-9 py-6 bg-red-400 rounded-xl">
        <h2 className="text-3xl font-semibold">
          {data.taskCount.newTasks}
        </h2>
        <h3 className="text-2xl font-medium">
          New Task
        </h3>
      </div>

      <div className=" w-[40%] px-9 py-6 bg-emerald-400 rounded-xl">
        <h2 className="text-3xl font-semibold">
        {data.taskCount.completedTasks}
        </h2>
        <h3 className="text-2xl font-medium">
          Completed
        </h3>
      </div>

      <div className=" w-[40%] px-9 py-6 bg-sky-400 rounded-xl">
        <h2 className="text-3xl font-semibold">
        {data.taskCount.activeTasks}
        </h2>
        <h3 className="text-2xl font-medium">
          Accepted 
        </h3>
      </div>
      
      <div className=" w-[40%] px-9 py-6 bg-orange-400 rounded-xl">
        <h2 className="text-3xl font-semibold">
        {data.taskCount.failedTasks}
        </h2>
        <h3 className="text-2xl font-medium">
          Failed
        </h3>
      </div>

    </div>
  )
}

export default TaskMenu