import React from 'react'
import Link from 'next/link'
import CreateTask from './CreateTask';
import DeleteTask from './DeleteTask';
import EditTask from './EditTask';


async function getTasks(){
    const res = await fetch(`http://127.0.0.1:8090/api/collections/tasks/records?page=1&perPage=30`,
        {cache: 'no-store'}
    );
    const data = await res.json();
    return data?.items;
}



export default async function TaskPage() {
    const tasks = await getTasks();
  return (
    <div>
        <h1>Tasks</h1>
        <CreateTask />

        <div  className = { 'task-container' }>
            {tasks?.map((task) => {
                return <Task key={task.id} task={task} />
            })}
        </div>
    </div>
  )
}




function Task({task}){
    const{ id, title, description } = task || {};

    return(
        
            <div className = { 'task-card' }>
                <div className = { 'task-ui-bar' }>
                    <EditTask task={task}/>
                    <DeleteTask task={task}/>
                </div>



                <div className = { 'task-details' }>
                    <Link href={`/tasks/${id}`}>
                        <h2>{title}</h2>
                        <hr></hr>
                        <span className={ 'task-description' } >{description}</span>
                    </Link>
                </div>
            </div>
        
    )
}