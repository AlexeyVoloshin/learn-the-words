import React from 'react';
import s from './style.module.scss';

const Pragraph = ({children}) => {
	return <p className={s.pragraph}>{children}</p>
};
export default Pragraph;