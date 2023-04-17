import axios from 'axios';
import React from 'react';
import { mutate } from 'swr';

type Todo = {
  id: number;
  value: string;
  done: boolean;
  completedAt: string;
};

function TaskItem({ item, search }: { item: Todo; search: string }) {
  const handleToggleDone = async () => {
    try {
      await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/todos`, {
        id: item.id,
        done: !item.done,
      });
      mutate(['/api/todos', search]); // Include search parameter in the cache key
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className='flex space-x-3'>
      <input type='checkbox' checked={item.done} onChange={handleToggleDone} />
      <p>{item.value}</p>
    </div>
  );
}

export default TaskItem;
