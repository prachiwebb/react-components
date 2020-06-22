import React from 'react';
import './Task.css';
import 'tachyons';
const Tasklist = (props) => {
	return  (
		<div className= "Maindiv_style ma4 bg-light-purple dib pa3 grow tc">
		
		
		<img src = {`https://joeschmoe.io/api/v1/${props.name}`}  alt = "Prachi"/>
		<h1> {props.name}</h1>
		<p>{props.work}</p>

		</div>
		)
}
export default Tasklist;