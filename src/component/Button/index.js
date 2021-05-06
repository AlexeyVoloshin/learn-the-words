import React from 'react';
import s from './Button.module.scss'

class ButtonComponent extends React.Component {
	hendlerClick = () => {
		console.log('click');
	}
	render() {
		const {children} = this.props;
		return (
			<div className="wrapper">
				<button onClick={this.hendlerClick} className={s.wrapper__button}>{children}</button>
			</div>
		)
	}
}

export default ButtonComponent;