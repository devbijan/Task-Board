import React from 'react'

async function getTask(taskId){

    const res = await fetch(`http://127.0.0.1:8090/api/collections/tasks/records/${taskId}`,
        {
            next: { revalidate: 10},
        }
    );

    const data = await res.json();
    return data;
}

export default async function TaskPage({ params }) {
    const task = await getTask(params.id);

    console.log(task)

    return (
        <div>
            {task.id}<br/>
            {task.title}<br/>
            {task.description}<br/>
            {task.created}<br/>
            
        </div>
    )
}
