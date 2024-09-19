export interface Task {
	id: number
	title: string
	completed: boolean
}

export interface TaskContextType {
	tasks: Task[]
	addTask: (title: string) => void
	deleteTask: (id: number) => void
	toggleComplete: (id: number) => void
	updateTask: (id: number, title: string) => void
}

export interface TodoListsProps {
	tasks?: Task[]
	deleteTask?: (id: number) => void
	toggleComplete?: (id: number) => void
}

export interface InputFieldProps {
	addTask?: (title: string) => void | undefined
	isEditing: boolean
	updateTask?: (id: number, title: string) => void
	task?: Task
}

export interface ButtonProps {
	label: string
	onClick: () => void
	color?: string
	size: string
	disabled?: boolean
	type: 'button' | 'submit' | 'reset'
	icon?: React.ReactNode; 
}
