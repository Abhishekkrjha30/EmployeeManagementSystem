/* eslint-disable react/prop-types */

const AcceptTask = ({data}) => {
  return (
    <div className="h-full w-[300px] flex-shrink-0 p-5 bg-lime-400 rounded-xl">
            <div className="flex items-center justify-between">
                <h2 className="bg-red-500 px-3 py-1 rounded text-sm ">{data.category}</h2>
                <h4 className="text-sm">{data.taskDate}</h4>
            </div>
            <h2 className="mt-10 text-2xl font-semibold text-red-900">
                {data.taskTitle}
            </h2>
            <p className="text-sm mt-3 text-black">
                {data.taskDescription}
            </p>
            <div className="flex justify-between mt-6">
                <button className="bg-green-500 py-1 px-2 text-sm rounded shadow-md shadow-black">Mark as Completed</button>
                <button className="bg-red-500 py-1 px-2 text-sm rounded shadow-md shadow-black">Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask