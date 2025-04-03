import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaThLarge, FaList } from 'react-icons/fa';

const tasks = [
  { name: "Task1", path: "tsgagaar", image: "/images/task1.png" },
  { name: "Task2", path: "ungusolih", image: "/images/task2.png" },
  { name: "Task3", path: "task1", image: "/images/task3.png" },
  { name: "Task4", path: "task2", image: "/images/task4.png" },
  { name: "Task5", path: "task3", image: "/images/task5.png" },
  { name: "Task6", path: "task4", image: "/images/task6.png" },
  { name: "Biy daalt", path: "biydaalt", image: "/images/biydaalt.png" },
];

export default function TaskList() {
  const router = useRouter();
  const [view, setView] = useState('grid');

  return (
    <div className="w-full h-full bg-pink-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl text-gray-700 font-extrabold mb-6">11B - U. Munkhnaran</h1>
      <div className="flex gap-4 mb-6">
        <button 
          onClick={() => setView('grid')} 
          className={`p-3 rounded-full  text-white transition-all ${view === 'grid' ? 'bg-pink-600' : 'bg-gray-400'}`}
        >
          <FaThLarge size={24} />
        </button>
        <button 
          onClick={() => setView('list')} 
          className={`p-3 rounded-full text-white transition-all ${view === 'list' ? 'bg-pink-600' : 'bg-gray-400'}`}
        >
          <FaList size={24} />
        </button>
      </div>
      <ul className={`w-full max-w-5xl ${view === 'grid' ? 'grid grid-cols-3 gap-6' : 'block'}`}>
        {tasks.map((task, index) => (
          <li
            key={index}
            onClick={() => router.push(task.path)}
            className={`cursor-pointer mt-4 p-4 border-2 border-pink-300 bg-white hover:bg-pink-200 rounded-xl text-xl flex ${view === 'grid' ? 'flex-col' : 'flex-row'} items-center justify-start text-gray-800 font-semibold shadow-lg hover:shadow-2xl transition-all`}
          >
            <img src={task.image} alt={task.name} className={`object-cover rounded-lg ${view === 'grid' ? 'w-32 h-32 mb-3' : 'w-16 h-16 mr-4'}`} />
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
