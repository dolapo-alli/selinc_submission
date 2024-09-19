import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Buttons/Button'
import './todoLists.css'
import { TodoListsProps } from '../../types/task'

const TodoLists: React.FC<TodoListsProps> = ({
	tasks = [],
	deleteTask,
	toggleComplete,
}) => {
	const navigate = useNavigate()
	return (
		<ul>
			{tasks.map((task) => (
				<li
					key={task.id}
					style={{
						backgroundColor: task.completed ? '#d1f4d9' : '',
					}}
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
							onClick={() =>
								toggleComplete && toggleComplete(task.id)
							}
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
							/>
						)}
						<Button
							label='Delete'
							onClick={() => deleteTask && deleteTask(task.id)}
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
