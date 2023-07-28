'use client'

import React from 'react'
import { useRouter } from 'next/navigation';

export default function DeleteTask({task}) {
    const{ id } = task || {};
    const router = useRouter();


    const deleteTask = async() => {
        await fetch(`http://127.0.0.1:8090/api/collections/tasks/records/${id}`,{
            method: 'DELETE',
          });

        router.refresh();
        
    }
  return (
    <div>               
        <button className = { 'btn utility-btn' } onClick={ () => {deleteTask(id)}}>X</button>
    </div>
  )
}
