import { ListItem, ListItemText, IconButton, List } from '@material-ui/core';
import React from 'react';
import db from './firebase';
import './Todo.css';

const Todo = ({ todo }) => {
	const checkTodo = () => {
		db.collection('todos').doc(todo.id).update({
			completed: true
		});
	};

	const deleteTodo = () => {
		db.collection('todos').doc(todo.id).delete();
	};

	return (
		<List className='todo__list'>
			<ListItem>
				<ListItemText primary={todo.todo} />
			</ListItem>

			<IconButton onClick={checkTodo}>
				<i className='fas fa-check'></i>
			</IconButton>

			<IconButton onClick={deleteTodo}>
				<i className='fas fa-trash'></i>
			</IconButton>
		</List>
	);
};

export default Todo;
