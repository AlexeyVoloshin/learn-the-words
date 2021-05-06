import React from 'react';
import s from './style.module.scss';
import { ReactComponent as ReactLogoSvg } from '../../logo.svg'

const HeaderBlock = ({hideBackground = false, children}) => {
	console.log('#### ', children);
	
	const styleCover = hideBackground ? { backgroundImage: 'none'} : {};
	return (
		<div className={s.cover} style={styleCover}>
			<div className={s.cover__wrap}>
				{children}
			</div>
		</div>
	);
}

export default HeaderBlock;