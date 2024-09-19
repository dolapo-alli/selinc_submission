import { createContext, ReactNode,  useState } from 'react'
import { Task, TaskContextType } from '../types/task'

export const TaskContext = createContext<TaskContextType>({
	tasks: [],
	addTask: () => {},
	deleteTask: () => {},
	toggleComplete: () => {},
	updateTask: () => {},
})

interface TaskProviderProps {
	children: ReactNode
}


export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
	const [tasks, setTasks] = useState<Task[]>([])

	const sortTasks = (tasks: Task[]): Task[] => {
		return tasks.slice().sort((a, b) => b.id - a.id)
	}

	const addTask = (newTask: string) => {
		const newTaskObject: Task = {
			id: Date.now(),
			title: newTask.trim(),
			completed: false,
		}
		setTasks((prevTasks) => sortTasks([...prevTasks, newTaskObject]))
	}

	const deleteTask = (id: number) => {
		setTasks((prevTasks) =>
			sortTasks(prevTasks.filter((task) => task.id !== id))
		)
	}

	const toggleComplete = (id: number) => {
		setTasks((prevTasks) =>
			sortTasks(
				prevTasks.map((task) =>
					task.id === id
						? { ...task, completed: !task.completed }
						: task
				)
			)
		)
	}

	const updateTask = (id: number, updatedTitle: string) => {
		setTasks((prevTasks) =>
			sortTasks(
				prevTasks.map((task) =>
					task.id === id
						? { ...task, title: updatedTitle, id: Date.now() }
						: task
				)
			)
		)
	}

	return (
		<TaskContext.Provider
			value={{ tasks, addTask, deleteTask, toggleComplete, updateTask }}
		>
			{children}
		</TaskContext.Provider>
	)
}
