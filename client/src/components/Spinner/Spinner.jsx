import React from 'react';
import s from './Spinner.module.css';

export default function Spinner() {
	return (
		<div class={s.centrar}>
			<div class={s.ldsroller}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}
