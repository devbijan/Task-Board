'use client';

import React from 'react'
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function CreateTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const create = async() => {
    await fetch('http://127.0.0.1:8090/api/collections/tasks/records',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });

    setTitle('')
    setDescription('')

    router.refresh();
  }
  return (
    <div className={'create-new-task-container'}>
      <form onSubmit={create}>
        <h3>Create a new Task</h3><br />
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
        />        
        <br />
        <textarea 
          placeholder="Description..." 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button className = { 'btn operation-btn' } type="submit">
          Create Task
        </button>
      </form>
    </div>
  )
}
