import React from 'react';
import './Task.css';
import Tasklist from './Tasklist'
import 'tachyons';
const Task = () => {
	return  (
		<div className = "mainpage">
		<h1>Welcome to web World </h1>
		<Tasklist  id="1" name="vinod" work="web developer"/>
		<Tasklist  id="2" name="Sivilaye" work="Backend developer"/>
		<Tasklist  id="3" name="Nazli" work="Frontend developer"/>
		<Tasklist  id="4" name="Selin" work="Database"/>
		
		</div>
		)
}

export default Task;