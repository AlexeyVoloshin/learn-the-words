import React from 'react';
import s from './Pragraph.module.scss';
const classNames = require('classnames')
const Pragraph = ({
	children, 
	white = false, 
	small = false, 
	lead =false,
}) => {
	return (
		<p className={classNames(s.pragraph, {
			[s.white]: white,
			[s.small]: small,
			[s.lead] : lead, 
		})}> 
			{children}
		</p>
	)
};
export default Pragraph;