import React from 'react';
import s from './Footer.module.scss';

const Footer = ({title, subtitle}) => {
	return (
		<div className={s.content}>
			<h1 className={s.content__title}>{title}</h1>
			<p className={s.content__subtitle}>{subtitle}</p>
		</div>
	);
};

export default Footer;
