import React from 'react';
import s from './Button.module.scss';

class ButtonComponent extends React.Component {
	constructor(props) {
		super(props);
		if(props.inpRef) {
			this.inputRef = props.inpRef;
		}
	}
	hendlerClick = () => {
		this.inputRef().current.focus();
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