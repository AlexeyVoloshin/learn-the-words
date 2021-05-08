import React from 'react';
import s from './Button.module.scss';

class ButtonComponent extends React.Component {
	hendlerClick = () => {
		const {inpRef} = this.props;
		inpRef().current.focus();
	};
	render() {
		const {children} = this.props;
		return (
			<div className="wrapper">
				<button onClick={this.hendlerClick} className={s.wrapper__button}>{children}</button>
			</div>
		);
	}
}

export default ButtonComponent;