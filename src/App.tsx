import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { TaskProvider } from './store/TaskProvider'
import TodoList from './pages/TodoListPage/TodoListPage'
import TodoDetailPage from './pages/TodoDetailPage/TodoDetailPage'
import './app.css'

function App() {
	return (
		<TaskProvider>
			<div className='app-container'>
				<Router>
					<Routes>
						<Route
							path='/'
							element={<TodoList />}
						/>
						<Route
							path='/task/:id'
							element={<TodoDetailPage />}
						/>
					</Routes>
				</Router>
			</div>
		</TaskProvider>
	)
}

export default App
