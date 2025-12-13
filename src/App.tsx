import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar/Navbar'
import Currency from './pages/Currency'
import Home from './pages/Home'
import Passwords from './pages/Passwords'
import Quiz from './pages/Quiz'
import Register from './pages/Register'
import RPS from './pages/RPS'
import Todo from './pages/Todo'
import Users from './pages/Users'

const App = () => {
	return (
		<div>
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/todo' element={<Todo />} />
				<Route path='/passwords' element={<Passwords />} />
				<Route path='/currency' element={<Currency />} />
				<Route path='/quiz' element={<Quiz />} />
				<Route path='/register' element={<Register />} />
				<Route path='/users' element={<Users />} />
				<Route path='/rps' element={<RPS />} />
			</Routes>
		</div>
	)
}

export default App
