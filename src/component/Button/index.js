import React from 'react';
import s from './Button.module.scss'
const Button = ({children}) => {
	return (
		<div className="wrapper">
			<div className={s.wrapper__text}>{children}</div>
			<button className={s.wrapper__button}>начать</button>
		</div>
	)
}

export default Button;