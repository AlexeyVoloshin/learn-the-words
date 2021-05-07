import React from 'react';
import s from './Pragraph.module.scss';
const classNames = require('classnames');
const Pragraph = ({
	children, 
	white = false, 
	small = false, 
	lead = false,
	xxSmall = false,
}) => {
	return (
		<p className={classNames(s.pragraph, {
			[s.white]: white,
			[s.small]: small,
			[s.xxSmall]: xxSmall,
			[s.lead] : lead, 
		})}> 
			{children}
		</p>
	);
};

export default Pragraph;