import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Buttons/Button'
import './inputField.css'
import { InputFieldProps } from '../../types/task'

export const InputField: React.FC<InputFieldProps> = ({
	addTask,
	task,
	isEditing,
	updateTask,
}) => {
	const [inputValue, setInputValue] = useState('')
	const navigate = useNavigate()
	const inputRef = useRef<HTMLInputElement>(null)
	useEffect(() => {
		if (isEditing && task) {
			setInputValue(task.title)
		} else {
			setInputValue('')
		}
	}, [task, isEditing])

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus()
		}
	}, [isEditing])

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (inputValue === '') {
			window.alert('Please enter a new task')
			return
		}
		if (inputValue === task?.title) {
			const confirmed = window.confirm(
				'You have not made any changes to your todo, this action will keep current todo and take you back to the home page.'
			)
			if (confirmed) {
				navigate('/')
			}
			return
		}
		if (inputValue) {
			if (isEditing && task && updateTask) {
				updateTask(task.id, inputValue)
				navigate('/')
			} else if (addTask) {
				addTask(inputValue)
			}
			setInputValue('')
			return
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='input-form'
		>
			<input
				type='text'
				value={inputValue}
				onChange={(e) => handleChange(e)}
				placeholder={isEditing ? 'Edit task' : 'Enter new task'}
				className='input-field'
				ref={inputRef}
			/>
			
			<Button
				type='submit'
				label={isEditing ? 'Save Changes' : 'Add Task'}
				size='small'
				onClick={() => {}}
				disabled={inputValue === ''}
				icon={
					<>
						<i
							className='fa fa-plus'
							aria-hidden='true'
						></i>
						<p>{isEditing ? 'Update' : 'Add'}</p>
					</>
				}
			/>
		</form>
	)
}
