import { List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import db from './firebase';
import './TodoCompleted.css';

const TodoCompleted = ({ todo }) => {
	const uncheckTodo = () => {
		db.collection('todos').doc(todo.id).update({
			completed: false
		});
	};

	const deleteTodo = () => {
		db.collection('todos').doc(todo.id).delete();
	};

	return (
		<List className='todoCompleted__list'>
			<ListItem>
				<ListItemText primary={todo.todo} />
			</ListItem>

			<IconButton onClick={uncheckTodo}>
				<i class='fas fa-check-square'></i>
			</IconButton>

			<IconButton onClick={deleteTodo}>
				<i className='fas fa-trash todoCompleted__trash'></i>
			</IconButton>
		</List>
	);
};

export default TodoCompleted;
