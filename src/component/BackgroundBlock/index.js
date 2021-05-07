import React from 'react';
import s from './BackgroundBlock.module.scss';

const BackgroundBlock = ({fullHeight = false, backgroundImg, children}) => {
	const styleCover = {backgroundImage: `url(${backgroundImg})`};
	if (fullHeight) {
		styleCover.height = '100vh';
	}
	return (
		<div className={s.cover} style={styleCover}>
			<div className={s.cover__wrap}>
				{children}
			</div>
		</div>
	);
};

export default BackgroundBlock;