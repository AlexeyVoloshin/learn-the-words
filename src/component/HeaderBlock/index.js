import React from 'react';
import s from './style.module.scss';
import { ReactComponent as ReactLogoSvg } from '../../logo.svg'

const HeaderBlock = ({title, hideBackground = false, descr}) => {
	const styleCover = hideBackground ? { backgroundImage: 'none'} : {};
	return (
		<div className={s.cover} style={styleCover}>
			<div className={s.cover__wrap}>
				{title && <h1 className={s.cover__header}>{title}</h1>}
				<ReactLogoSvg />
				{descr && <p className={s.cover__descr}>
					{descr}
				</p>}
			</div>
		</div>
	);
}

export default HeaderBlock;