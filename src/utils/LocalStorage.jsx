

const employees = [
  {
    "id": 1,
    "name": "John Doe",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Monthly Report",
        "taskDescription": "Compile data for the monthly report and prepare presentation.",
        "taskDate": "2024-11-10",
        "category": "Reporting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Client Records",
        "taskDescription": "Ensure all client contact information is up-to-date.",
        "taskDate": "2024-11-01",
        "category": "Data Management"
      }
    ],
    "taskCount": {
      "activeTasks": 1,
      "failedTasks": 0,
      "completedTasks": 1,
      "newTasks": 1
    }
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Organize Team Meeting",
        "taskDescription": "Schedule a meeting for the project team and share agenda.",
        "taskDate": "2024-11-12",
        "category": "Scheduling"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Document Review",
        "taskDescription": "Review and approve the project documents.",
        "taskDate": "2024-11-05",
        "category": "Documentation"
      }
    ],
    "taskCount": {
      "activeTasks": 1,
      "failedTasks": 0,
      "completedTasks": 1,
      "newTasks": 1
    }
  },
  {
    "id": 3,
    "name": "Bob Johnson",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Marketing Plan",
        "taskDescription": "Draft a new marketing plan for the next quarter.",
        "taskDate": "2024-11-15",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Budget Forecast",
        "taskDescription": "Prepare a forecast for the upcoming budget cycle.",
        "taskDate": "2024-11-03",
        "category": "Finance"
      }
    ],
    "taskCount": {
      "activeTasks": 1,
      "failedTasks": 1,
      "completedTasks": 0,
      "newTasks": 1
    }
  },
  {
    "id": 4,
    "name": "Emily Davis",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "System Update",
        "taskDescription": "Update all systems with the latest software patch.",
        "taskDate": "2024-11-18",
        "category": "IT"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Training Session",
        "taskDescription": "Conduct training for new employees on system usage.",
        "taskDate": "2024-11-04",
        "category": "Training"
      }
    ],
    "taskCount": {
      "activeTasks": 1,
      "failedTasks": 0,
      "completedTasks": 1,
      "newTasks": 1
    }
  },
  {
    "id": 5,
    "name": "Michael Brown",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Customer Feedback Analysis",
        "taskDescription": "Analyze feedback from recent customer survey.",
        "taskDate": "2024-11-20",
        "category": "Analysis"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Product Demo",
        "taskDescription": "Prepare and present a demo for the new product.",
        "taskDate": "2024-11-02",
        "category": "Sales"
      }
    ],
    "taskCount": {
      "activeTasks": 1,
      "failedTasks": 0,
      "completedTasks": 1,
      "newTasks": 1
    }
  }
]


  
const admin = [
    {
        "id": 1,
        "name": "Abhishek",
        "email": "admin@example.com",
        "password": "123"
      },
];
 
 

  export const setLocalStorage = ()=>{
    localStorage.setItem("employees",JSON.stringify(employees));
    localStorage.setItem("admin",JSON.stringify(admin));

  }
  export const getLocalStorage = ()=>{
   const employees =JSON.parse(localStorage.getItem('employees'));
   const admin =JSON.parse(localStorage.getItem('admin'));
   
return {employees,admin};
  }
