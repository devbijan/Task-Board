'use client' 

import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditTask({task}) {
    
    const modalId = "modal-"+task.id

    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const openEditor = () =>{
        console.log("edit task", task)
        document.getElementById(modalId).showModal();
    }
    const closeEditor = () =>{
        document.getElementById(modalId).close();
        setNewTitle('')
        setNewDescription('')

    }

    const router = useRouter();

    const edit = async() => {
      await fetch(`http://127.0.0.1:8090/api/collections/tasks/records/${task.id}`,{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
          title: newTitle != '' ? newTitle : task.title,
          description: newDescription != '' ? newDescription : task.description,
        }),
      });
  
      

      closeEditor();
      router.refresh();

    }

  return (
    <>
    
        <button className = { 'btn utility-btn' } onClick={ () => { openEditor() }}>
            <img src="/edit-icon.png" width={25} height={25}  alt="Edit Icon"/>
        </button>
        
        <dialog  className={'modal'} id={modalId}>
            <div className = { 'task-ui-bar' }>
                <button className = { 'btn utility-btn' } onClick={ () => { edit() }}>
                    <img src="/save-icon.png" width={18} height={18}  alt="Save Icon"/>
                </button>

                <button className = { 'btn utility-btn' }  onClick={ () => { closeEditor() }}>
                    X
                </button>
            </div>
            <div className={'modal-info'}>
                <h2>Edit Task</h2>
                <hr></hr>

                <form onSubmit={edit} method='dialog'>
                    <div>
                    <label htmlFor="task-title"><h3>Title</h3></label>
                        <input 
                        type="text" 
                        placeholder={task.title} 
                        value={newTitle != '' ? newTitle : task.title} 
                        name="task-title"
                        onChange={(e) => setNewTitle(e.target.value)}
                        />    
                    </div>    
                    <div>
                        <label htmlFor="task-description"><h3>Description</h3></label>
                        <textarea 
                        name="task-description"
                        placeholder={task.description}
                        value={newDescription != '' ? newDescription : task.description} 
                        onChange={(e) => setNewDescription(e.target.value)}
                        />
                    </div>
                    <hr></hr>
                    <div className = { 'edit-btns' }>
                        <button className = { 'btn operation-btn' }  type="submit">
                            Save
                        </button>
                    </div>
                </form>
                <hr></hr>
            </div>
        </dialog>
    </>
  )
}
