import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Buttons/Button'
import './todoLists.css'
import { TodoListsProps } from '../../types/task'

const TodoLists: React.FC<TodoListsProps> = ({
	tasks = [],
	deleteTask,
	toggleComplete,
}) => {
	
	const [newTaskId, setNewTaskId] = useState<string | number | null>(null)
	const [tasksToRemove, setTasksToRemove] = useState<number[]>([])
	const navigate = useNavigate()

	useEffect(() => {
		if (newTaskId) {
			const timeout = setTimeout(() => setNewTaskId(null), 1000)
			return () => clearTimeout(timeout)
		}
	}, [newTaskId])

	const handleDelete = (taskId: number) => {
		setTasksToRemove([...tasksToRemove, taskId]) 
		setTimeout(() => {
			if (deleteTask) {
				deleteTask(taskId)
			}
			setTasksToRemove(tasksToRemove.filter((id) => id !== taskId))
		}, 400)
	}

	return (
		<ul>
			{tasks.map((task) => (
				<li
					key={task.id}
					style={{
						backgroundColor: task.completed ? '#d1f4d9' : '',
					}}
					className={`task-item ${
						task.completed ? 'completed' : ''
					} ${task.id === newTaskId ? 'task-item' : ''} ${
						tasksToRemove.includes(task.id) ? 'fade-out' : ''
					}`}
				>
					<span
						className='title-container'
						style={{
							textDecoration: task.completed
								? 'line-through'
								: 'none',
						}}
					>
						{task.title}
					</span>
					<div className='button-group'>
						<Button
							label={task.completed ? 'Undo' : 'Complete'}
							icon={
								task.completed ? (
									<>
										<i
											className='fa fa-undo'
											aria-hidden='true'
										></i>
										<p>Undo</p>
									</>
								) : (
									<>
										<i
											className='fa fa-check mobile-icons'
											aria-hidden='true'
										></i>
										<p>Done</p>
									</>
								)
							}
							onClick={() => {
								if (toggleComplete) {
									toggleComplete(task.id)
								}
								setNewTaskId(task.id)
							}}
							color={task.completed ? 'edit' : 'success'}
							size='small'
							type={'button'}
						/>
						{!task.completed && (
							<Button
								label={'Edit'}
								onClick={() => navigate(`/task/${task.id}`)}
								color='edit'
								size='small'
								type={'button'}
								icon={
									<>
										<i
											className='fa fa-pencil'
											aria-hidden='true'
										></i>
										<p>Edit</p>
									</>
								}
							/>
						)}
						<Button
							label='Delete'
							icon={
								<>
									<i
										className='fa fa-trash'
										aria-hidden='true'
									></i>
									<p>Delete</p>
								</>
							}
							onClick={() => handleDelete(task.id)}
							color='delete'
							size='small'
							type={'button'}
						/>
					</div>
				</li>
			))}
		</ul>
	)
}

export default TodoLists
