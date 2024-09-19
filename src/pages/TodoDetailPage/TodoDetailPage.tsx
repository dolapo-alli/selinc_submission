import { useParams, useNavigate } from 'react-router-dom'
import { InputField } from '../../components/InputField/InputField'
import { useTasks } from '../../store/useTasks'

function TodoDetailPage() {
	const { id } = useParams()
	const navigate = useNavigate()
	const { tasks, updateTask } = useTasks()
	const idString = id as string
	const task = tasks.find((t) => t.id === parseInt(idString))

	if (!task) {
		return (
			<>
				<button onClick={() => navigate('/')}>Back</button>
				<p>Task not found</p>
			</>
		)
	}

	return (
		<div>
			<h1>Edit Task</h1>
			<br />
			<InputField
				updateTask={updateTask}
				task={task}
				isEditing={true}
				addTask={undefined}
			/>
		</div>
	)
}

export default TodoDetailPage
