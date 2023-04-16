function DeleteAllButton() {
  return (
    <button>
      <p className='self-center text-xs font-semibold text-blue-700 underline'>
        Delete All Tasks
      </p>
    </button>
  );
}

function SearchInput() {
  return (
    <input
      type='text'
      placeholder='Search..'
      className='self-end w-7/12 px-3 py-1 border border-black rounded-md outline-none'
    />
  );
}

function TaskItem() {
  return (
    <div className='flex space-x-3'>
      <input type='checkbox' checked={false} />
      <p>Task #1,2,3</p>
    </div>
  );
}

function TaskList() {
  const items = [1, 2, 3];
  return (
    <div className='flex flex-col '>
      <p className='pl-3'>Title</p>
      <div className='flex-1 my-1 border-b border-black w-100' />
      <div className='flex flex-col space-y-2'>
        {items.map((item) => (
          <TaskItem key={item} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className='flex items-center justify-center w-screen h-screen'>
      <div className='flex h-2/6 min-h-fit w-4/12 min-w-fit flex-col bg-[#f3f3f3] px-12 py-4 pb-20'>
        <div className='flex justify-between mb-12'>
          <p className='text-xl font-bold'>Marvelous 2.0</p>
          <DeleteAllButton />
        </div>
        <div className='flex space-x-10'>
          <div className='flex flex-col w-1/2 space-y-8'>
            <div className='flex space-x-2'>
              {' '}
              <input
                type='text'
                className='w-full px-3 py-1 border border-black rounded-md outline-none'
              />
              <button className='rounded-md border border-black bg-[#cfe2f3] px-5 py-1'>
                Add
              </button>
            </div>
            <TaskList />
          </div>
          <div className='flex flex-col w-1/2 space-y-8'>
            <SearchInput />
            <TaskList />
          </div>
        </div>
      </div>
    </main>
  );
}
