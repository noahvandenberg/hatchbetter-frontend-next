import axios from 'axios';
import React, { useState } from 'react';
import type { FormEvent } from 'react';
import { mutate } from 'swr';

function TaskInput({ search }: { search: string }) {
  const [input, setInput] = useState('');

  const handleCreateTask = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/todos`, {
        value: input,
        done: false,
      });
      setInput('');
      mutate(['/api/todos', search]); // Include search parameter in the cache key
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <form onSubmit={handleCreateTask} className='flex space-x-2'>
      <input
        type='text'
        className='w-full px-3 py-1 border border-black rounded-md outline-none'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type='submit'
        className='rounded-md border border-black bg-[#cfe2f3] px-5 py-1'
      >
        Add
      </button>
    </form>
  );
}

export default TaskInput;
