import { useEffect, useState } from 'react';
import './App.css';
import db from './firebase';
import firebase from 'firebase';
import Todo from './Todo';
import TodoCompleted from './TodoCompleted';

function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');
	const [todosCompleted, setTodosCompleted] = useState([]);

	useEffect(() => {
		db.collection('todos')
			.where('completed', '==', false)
			.onSnapshot((snapshot) => {
				setTodos(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						todo: doc.data().todo
					}))
				);
			});
	}, []);

	useEffect(() => {
		db.collection('todos')
			.where('completed', '==', true)
			.onSnapshot((snapshot) => {
				setTodosCompleted(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						todo: doc.data().todo
					}))
				);
			});
	}, []);

	const addTodo = (e) => {
		e.preventDefault();
		db.collection('todos').add({
			todo: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			completed: false
		});
		setInput('');
	};

	return (
		<div className='app'>
			<div className='app__header'>
				<h2>Todolist app</h2>
			</div>

			<form className='app__form' onSubmit={addTodo}>
				<h2>Add a todo</h2>

				<div className='app__addTodo'>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder='Type here...'
						className='app__todoInput'
						type='text'
					/>
					<button type='submit' onClick={addTodo} className='app__submit'>
						<i className='fas fa-plus'></i>
					</button>
				</div>
			</form>

			<ul className='app__ul'>
				{todos.map((todo) => (
					<Todo todo={todo} />
				))}
			</ul>

			<ul className='app__ulCompleted'>
				{todosCompleted.map((todo) => (
					<TodoCompleted todo={todo} />
				))}
			</ul>
		</div>
	);
}

export default App;
