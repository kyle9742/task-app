import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";
import todoIcon from './assets/direct-hit.png';
import doingIcon from './assets/glowing-star.png';
import doneIcon from './assets/check-mark-button.png';
import { useEffect, useState } from "react";

const saveTasks = localStorage.getItem('tasks');

export default function App() {
  
  const [tasks, setTasks] = useState(JSON.parse(saveTasks) || []);

  useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

  const handleDelete = (taskIndex) => {
		const newTasks = tasks.filter((task, index) => index !== taskIndex);
		setTasks(newTasks);
	};

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      
      <main className="app_main">
        <TaskColumn title="할 일" icon={todoIcon} tasks={tasks} status='todo' handleDelete={handleDelete} />
        <TaskColumn title="진행중" icon={doingIcon} tasks={tasks} status='doing' handleDelete={handleDelete} />
        <TaskColumn title="완 료" icon={doneIcon} tasks={tasks} status='done' handleDelete={handleDelete} />
      </main>
    </div>
  );
}
