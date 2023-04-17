import axios from 'axios';
import React from 'react';
import type { MouseEvent } from 'react';
import { mutate } from 'swr';

function DeleteAllButton({ search }: { search: string }) {
  const handleDeleteAll = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to delete all tasks?')) {
      try {
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/todos`);
        mutate(['/api/todos', search]);
      } catch (error) {
        console.error('Error deleting tasks:', error);
      }
    }
  };

  return (
    <button onClick={handleDeleteAll}>
      <p className='self-center text-xs font-semibold text-blue-700 underline'>
        Delete All Tasks
      </p>
    </button>
  );
}

export default DeleteAllButton;
