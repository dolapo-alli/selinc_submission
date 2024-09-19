import { InputField } from '../../components/InputField/InputField'
import TodoLists from '../../components/TodoLists/TodoLists' 
import { useTasks } from '../../store/useTasks' 

const TodoList = () => {
	const { tasks, addTask, deleteTask, toggleComplete } = useTasks() 
	return (
		<div>
			<h1>Todo List</h1>
            <br />
			<InputField
				addTask={addTask}
				updateTask={undefined}
				isEditing={false}
			/>
            <br/>
			<TodoLists
				tasks={tasks}
				deleteTask={deleteTask}
				toggleComplete={toggleComplete}
			/>
		</div>
	)
}

export default TodoList
