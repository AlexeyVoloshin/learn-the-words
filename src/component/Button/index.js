import React from 'react';
import s from './Button.module.scss';

class ButtonComponent extends React.Component {
	hendlerClick = () => {
		const {inpRef} = this.props;
		console.log('click', );
		inpRef().current.focus();
	};
	render() {
		const {children, inpRef} = this.props;
		console.log(inpRef);
		return (
			<div className="wrapper">
				<button onClick={this.hendlerClick} className={s.wrapper__button}>{children}</button>
			</div>
		);
	}
}

export default ButtonComponent;