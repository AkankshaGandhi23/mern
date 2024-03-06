'use client';
import React, { useState } from 'react'

const TodoList = () => {
   const [taskList , setTaskList ] = useState([
    
    {text: 'Do Homework' , completed : false},
    {text : 'learn React', completed : false},
    {text :'bring water', completed : false}
]);
    
   console.log(taskList);


    const addNewTask = (e) => {
    
    if(e.code ==='Enter'){
        console.log(e.target.value);
        const obj ={text :e.target.value , completed :false};

        setTaskList ([obj , ...taskList]);

        e.target.value ='';
    }
}

const deleteTask =(index) => {
    console.log(index);
    const temp =taskList;
    temp.splice(index , 1);
    setTaskList([...temp]);
}

const completeTask =(index) =>
{
    const temp =taskList;
    temp[index].completed = true;
    setTaskList([...temp]);
    console.log(temp);
}




  return (
    <div className='bg-primary-subtle vh-100'>
    <div className='container py-5'>
        <h1 className='display-3 fw-bold text-center'>TodoList</h1>
        <div className="card shadow">
            <div className='card-header py-3'>

                <input onKeyDown={addNewTask} 
                
                type='text' className=' form-control border-3 border-primary '
                 placeholder='Enter new task to add'/>



            </div>
            <div className='card-body'>
                {
                    taskList.map((task , index) => {
                        return <div key={index} className='p-3 shadow mb-3 d-flex justify-content-between align-items-center'>  
                        <input type='checkbox' checked={task.completed}/>
                        <p className='my-auto h4'>{ task.text }</p>
                        {task.completed ? 
                        <span className=' badge bg-success'>completed </span>
                    : 
                    <span className='badge bg-warning' > Pending </span>
                    }

                        <button onClick={() => { deleteTask(index)} } className='btn btn-danger'> Delete </button>
                        <button onClick={() => {completeTask(index)}} className='btn btn-primary' >
                         
                         {task.completed ?'Undo Task' : 'Complete Task'}
                         </button>
                    </div>
                    } )
                }


            </div>


        </div>

    </div>
    </div>
  )
}

export default TodoList;