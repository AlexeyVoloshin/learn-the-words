import React from 'react';
import s from './style.module.scss';

const FooterBlock = ({title, subtitle}) => {
	return (
		<div className={s.content}>
			<h1 className={s.content__title}>{title}</h1>
			<p className={s.content__subtitle}>{subtitle}</p>
		</div>
	)
}

export default FooterBlock;
