import React from 'react';
import s from './Header.module.scss';
const classNames = require('classnames');

const Header = ({children, size = 'xl', white }) => {
	let sizePoint;
	let uppCaseSize;
	switch (size) {
		case 'xl':
			sizePoint = 1;
			break;
		case 'l':
			sizePoint = 2;
			break;
		case 'm':
			sizePoint = 3;
			break;
		case 's':
			sizePoint = 4;
			break;
		case 'xs':
			sizePoint = 5;
			break;
		default:
			sizePoint = 1;
			break;
	};
	uppCaseSize = size.toUpperCase();
	return React.createElement(
		`h${sizePoint}`,
		{
			className: classNames(s.header, s[`size${uppCaseSize}`], {
				[s.whiteColor]: white,
			}),
		},
		children,
	)
};

export default Header;