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
    console.log(e.key);
}


  return (
    <div className='bg-primary-subtle vh-100'>
    <div className='container py-5'>
        <h1 className='display-3 fw-bold text-center'>TodoList</h1>
        <div className="card shadow">
            <div className='card-header py-3'>
                <input type='text' className=' form-control border-3 border-primary '
                 placeholder='Enter new task to add'/>



            </div>
            <div className='card-body'>
                {
                    taskList.map((task , index) => {
                        return <div key={index} className='p-3 shadow mb-3 d-flex justify-content-between'>  
                        <p className='my-auto h4'>{ task.text }</p>

                        <button className='btn btn-danger'> Delete </button>
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